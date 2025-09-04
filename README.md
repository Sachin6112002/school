# School Project

A Next.js app to add and display school details with image upload. Images are stored on Cloudinary, and school data is saved in a Railway cloud MySQL database.

## Features
- Add school details (name, address, city, state, contact, email, image)
- Display all schools with images
- Cloudinary image hosting
- Railway cloud MySQL database
- Responsive UI with Tailwind CSS

## Setup
1. Install dependencies:
   ```powershell
   npm install
   ```
2. Add environment variables in `.env.local`:
   ```
   # Cloudinary
   CLOUDINARY_CLOUD_NAME=your_cloud_name
   CLOUDINARY_API_KEY=your_api_key
   CLOUDINARY_API_SECRET=your_api_secret

   # Railway MySQL
   DB_HOST=maglev.proxy.rlwy.net
   DB_USER=root
   DB_PASSWORD=your_db_password
   DB_NAME=railway
   DB_PORT=30394
   ```
3. Start the app:
   ```powershell
   npm run dev
   ```

## Deployment
- Deploy to Vercel
- Add the same environment variables in Vercel dashboard

## Usage
- `/addSchool`: Add a school
- `/showSchools`: View all schools
- `/schools`: Tabbed page for add/view

---

**Tech Stack:** Next.js, Tailwind CSS, Cloudinary, Railway MySQL
