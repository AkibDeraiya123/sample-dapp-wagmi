import React, { Dispatch, SetStateAction } from "react";
import { TFormdata } from "./mint";

type TUpload = {
  setFormData: Dispatch<SetStateAction<TFormdata>>;
  image: string;
  setImage: Dispatch<SetStateAction<string>>;
};

const Upload: React.FC<TUpload> = ({ setFormData, image, setImage }) => {
  const handleImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, image: e.target!.files![0] }));
    setImage(URL.createObjectURL(e.target!.files![0]));
  };
  return (
    <div className="flex items-center justify-center w-full h-[100px]">
      {image ? (
        <div className=" w-[100px] h-[100px] ">
          <img src={image} alt="nft" className=" w-full h-full rounded" />
        </div>
      ) : (
        <label
          htmlFor="dropzone-file"
          className="flex flex-col items-center justify-center w-full border-2 border-[#9E9E9E] text-[#9E9E9E] rounded-lg cursor-pointer bg-[#383838] border-dashed"
        >
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <div className=" flex items-center gap-2">
              <svg
                className="w-5 h-5 mb-3 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 16"
              >
                <path
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                />
              </svg>
              <p className="mb-2  text-sm text-gray-500 dark:text-gray-400">
                <span className="font-semibold text-white">Upload Image</span>
              </p>
            </div>

            <p className="text-xs text-gray-400 dark:text-gray-400 -mt-2 ">
              Format Supported
            </p>
          </div>
          <input
            id="dropzone-file"
            type="file"
            className="hidden"
            onChange={handleImage}
          />
        </label>
      )}
    </div>
  );
};

export default Upload;
