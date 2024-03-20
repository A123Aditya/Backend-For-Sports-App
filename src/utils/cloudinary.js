import { v2 as cloudinary } from "cloudinary"
import fs from "fs"


cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

const UploadFile = async(localfilepath) =>{
    try {
        // if no file selected
        if(!localfilepath){
            return;
        }

        // if file is selected
        else {
            const respose = await cloudinary.uploader.upload(localfilepath,{
                resource_type:"auto"
            })
            console.log(respose.url)
            return respose.url
        }
    } catch (error) {
        fs.unlinkSync(localfilepath) // if file upload method fails then it removes the file from server
    }
}