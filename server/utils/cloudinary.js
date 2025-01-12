import cloudinary from "cloudinary";
import multer from "multer";

// Configure cloudinary
cloudinary.v2.config({
  cloud_name: "vincentsang",
  api_key: "455286944547629",
  api_secret: "764okYVYwP9WOp5iXMKS7Oxbr7c",
});

// Image upload utility function
export const imageUploadUtil = (file) => {
  return new Promise((resolve, reject) => {
    cloudinary.v2.uploader.upload_stream(
      { resource_type: 'auto' },
      (error, result) => {
        if (error) reject(error);
        else resolve(result);
      }
    ).end(file.buffer);
  });
};

// Image delete utility function
export const deleteImageUtil = async (publicId) => {
  return cloudinary.v2.uploader.destroy(publicId);
};
