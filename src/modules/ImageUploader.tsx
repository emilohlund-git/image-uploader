import React, { ChangeEvent, useState } from "react";
import Dropzone from "../components/Dropzone";
import { BsFillCheckCircleFill } from "react-icons/bs";
import Image from "next/image";
import { Upload } from "upload-js";

type Props = {};

const upload = Upload({ apiKey: process.env.NEXT_PUBLIC_UPLOAD_IO_API_KEY! });

const ImageUploader = (props: Props) => {
  const [loading, setLoading] = useState(false);
  const [uploaded, setUploaded] = useState(false);
  const [image, setImage] = useState({} as any);
  const [progressValue, setProgressValue] = useState(0);

  const onFilesAdded = async (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    await uploadToServer(e.target.files[0]);
    setLoading(false);
    setUploaded(true);
  };

  const onDrop = async (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    await uploadToServer(e.dataTransfer.files[0]);
    setLoading(false);
    setUploaded(true);
  };

  const uploadToServer = async (image: any) => {
    setLoading(true);
    const { fileUrl } = await upload.uploadFile(image, { onProgress });
    setImage(fileUrl);
  };

  const onProgress = ({ progress }: { progress: number }) => {
    setProgressValue(progress);
  };

  return (
    <div className="flex font-sans bg-white flex-col justify-center items-center gap-y-4 shadow-md p-10 rounded-xl">
      {uploaded ? (
        <>
          <BsFillCheckCircleFill className="text-green-600 w-7 h-7" />
          <h1 className="text-2xl font-semibold text-left">
            uploaded successfully!
          </h1>
          <Image src={image} width={180} height={180} alt="preview" />
          <div className="flex items-center">
            <input
              className="input input-sm input-bordered text-xs rounded-l-lg disabled:cursor-default"
              disabled
              type="text"
              value={image}
            />
            <button
              onClick={() => {
                navigator.clipboard.writeText(image);
              }}
              className="btn btn-primary rounded-r-lg btn-sm text-xs"
            >
              copy link
            </button>
          </div>
        </>
      ) : (
        <>
          {loading ? (
            <>
              <h1 className="text-2xl font-semibold text-left">uploading...</h1>
              <progress
                className="progress progress-primary w-56"
                value={progressValue}
                max="100"
              ></progress>
            </>
          ) : (
            <>
              <h1 className="text-2xl font-semibold">upload your image</h1>
              <p>file should be jpeg, png,..</p>
              <Dropzone onDrop={onDrop} onFilesAdded={onFilesAdded} />
            </>
          )}
        </>
      )}
    </div>
  );
};

export default ImageUploader;
