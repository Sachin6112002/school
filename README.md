


# School Project

Add school details and upload an image. Images are stored on Cloudinary, and only the link is saved in the database.

## Setup
1. Run:
	```powershell
	npm install
	npm run dev
	```
2. Add your Cloudinary info in `.env.local`:
	```
	CLOUDINARY_CLOUD_NAME=your_cloud_name
	CLOUDINARY_API_KEY=your_api_key
	CLOUDINARY_API_SECRET=your_api_secret
	```
3. Start MySQL and create the table:
	```sql
	CREATE DATABASE school_db;
	USE school_db;
	CREATE TABLE schools (
	  id INT AUTO_INCREMENT PRIMARY KEY,
	  name TEXT,
	  address TEXT,
	  city TEXT,
	  state TEXT,
	  contact VARCHAR(20),
	  image TEXT,
	  email_id TEXT
	);
	```

## Usage
- Go to `/addSchool` to add a school.
- Go to `/showSchools` to see all schools and images.
