import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  secure: true,
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

async function uploadToCloudinary(buffer, options) {
  return new Promise((resolve, reject) => {
    const uploadStream = cloudinary.uploader.upload_stream(
      options,
      (error, result) => {
        if (error) {
          return reject(error);
        }
        resolve(result);
      },
    );

    uploadStream.end(buffer);
  });
};

export async function saveAvatarToCloudinary(buffer, userId) {
    const options = {
        public_id: `avatar_${userId}`,
        folder: 'northwind/avatars',
        resource_type: 'image',
        overwrite: true,
        unique_filename: false,
        transformation: [
            { width: 500, height: 500, crop: 'fill', gravity: 'auto' },
            { fetch_format: 'auto', quality: 'auto' },
        ],
    };

    return uploadToCloudinary(buffer, options);
};

export async function saveStoryToCloudinary(buffer, storyId) {

  const options = {
       public_id: `stories_${storyId}`,
        folder: 'northwind/stories',
        resource_type: 'image',
        transformation: [
            { width: 1600, height: 1600, crop: 'limit' },
            { fetch_format: 'auto', quality: 'auto' },
        ],
    };

    return uploadToCloudinary(buffer, options);
};
