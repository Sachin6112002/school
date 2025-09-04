import { db } from '@/lib/db';
import path from 'path';
import fs from 'fs';
import { IncomingForm } from 'formidable';
import { v2 as cloudinary } from 'cloudinary';

// Configure Cloudinary using environment variables
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  const tempDir = path.join(process.cwd(), '.tmpUploads');
  if (!fs.existsSync(tempDir)) fs.mkdirSync(tempDir, { recursive: true });

  const form = new IncomingForm({
    uploadDir: tempDir,
    keepExtensions: true,
    multiples: false,
  });

  form.parse(req, async (err, fields, files) => {
    if (err) {
      res.status(500).json({ error: 'Image upload failed.' });
      return;
    }
    // Normalize potential array values returned by formidable for fields
    const norm = (v) => (Array.isArray(v) ? v[0] : v) || '';
    const name = norm(fields.name);
    const address = norm(fields.address);
    const city = norm(fields.city);
    const state = norm(fields.state);
    const contact = norm(fields.contact);
    const email_id = norm(fields.email_id);

    // Handle both single file object and array (depending on formidable behavior)
    let image = '';
    if (files.image) {
      const fileObj = Array.isArray(files.image) ? files.image[0] : files.image;
      if (fileObj && fileObj.filepath) {
        try {
          const uploadRes = await cloudinary.uploader.upload(fileObj.filepath, {
            folder: 'schools',
            resource_type: 'image',
          });
          image = uploadRes.secure_url;
        } catch (e) {
          console.error('Cloudinary upload failed', e);
          res.status(500).json({ error: 'Cloud upload failed.' });
          return;
        } finally {
          // Clean up temp file
          try { fs.unlinkSync(fileObj.filepath); } catch {}
        }
      }
    }
    try {
      await db.query(
        'INSERT INTO schools (name, address, city, state, contact, image, email_id) VALUES (?, ?, ?, ?, ?, ?, ?)',
        [name, address, city, state, contact, image, email_id]
      );
  res.status(200).json({ message: 'School added successfully.', imageUrl: image });
    } catch (error) {
      res.status(500).json({ error: 'Database error.' });
    }
  });
}
