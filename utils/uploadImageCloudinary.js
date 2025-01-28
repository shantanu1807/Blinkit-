import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET_KEY,
});

const uploadImageCloudinary = async (image) => {
  const buffer = image?.buffer || Buffer.from(await image.arrayBuffer());

  const uploadImage = await new Promise((resolve, reject) => {
    cloudinary.uploader
      .upload_stream({ folder: "binkeyit" }, (error, uploadResult) => {
        return resolve(uploadResult);
      })
      .end(buffer);
  });

  return uploadImage;
};

export default uploadImageCloudinary;

// import { v2 as cloudinary } from "cloudinary";

// // Configure Cloudinary
// cloudinary.config({
//   cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//   api_key: process.env.CLOUDINARY_API_KEY,
//   api_secret: process.env.CLOUDINARY_API_SECRET_KEY,
// });

// // Function to upload image to Cloudinary
// const uploadImageCloudinary = async (image) => {
//   try {
//     // Ensure the image buffer is processed correctly
//     const buffer = image?.buffer || Buffer.from(await image.arrayBuffer());

//     // Return a promise for the upload
//     const uploadImage = await new Promise((resolve, reject) => {
//       const uploadStream = cloudinary.uploader.upload_stream(
//         { folder: "binkeyit" },
//         (error, uploadResult) => {
//           if (error) {
//             return reject(error); // Reject on error
//           }
//           resolve(uploadResult); // Resolve on success
//         }
//       );
//       uploadStream.end(buffer); // Pass the buffer to the stream
//     });

//     return uploadImage;
//   } catch (error) {
//     console.error("Error uploading to Cloudinary:", error);
//     throw new Error("Failed to upload image to Cloudinary");
//   }
// };

// export default uploadImageCloudinary;
