import Image from "next/image";
import React, { useRef, useState } from "react";

type DropzoneProps = {
  onDrop: (e: any) => void;
  onFilesAdded: (e: any) => void;
};

const Dropzone: React.FC<DropzoneProps> = ({ onDrop, onFilesAdded }) => {
  const fileInputRef = useRef(null as HTMLInputElement | null);
  const [highlight, setHighlight] = useState(false);

  const openFileDialog = () => {
    fileInputRef.current?.click();
  };

  const onDragOver = (e: any) => {
    e.preventDefault();
    setHighlight(true);
  };

  const onDragLeave = (e: any) => {
    e.preventDefault();
    setHighlight(false);
  };

  return (
    <>
      <div
        style={{
          backgroundColor: "#F6F8FB",
        }}
        onDragLeave={onDragLeave}
        onDragOver={onDragOver}
        onDrop={onDrop}
        className={`flex justify-center my-4 flex-col items-center gap-y-8 dashed-gradient ${
          highlight && ""
        } rounded-xl`}
      >
        <Image src="/image.svg" width={150} height={150} alt="Image" />
        <input
          ref={fileInputRef}
          className="hidden"
          type="file"
          onChange={onFilesAdded}
          accept="image/jpeg, image/png"
        />
        <p className="text-gray-300 font-semibold">
          drag & drop your image here
        </p>
      </div>
      <p className="text-gray-400 mb-3">or</p>
      <button
        onClick={openFileDialog}
        className="btn btn-sm text-xs lowercase btn-primary rounded-lg"
      >
        choose a file
      </button>
    </>
  );
};

export default Dropzone;
