import React, { useState } from "react";
import { ImCross } from "react-icons/im";

const FileUploader = () => {
  const [selectedFilename, setSelectededFilename] = useState<string>("");

  const removeSelectedFile = () => {
    setSelectededFilename("");
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.length) {
      setSelectededFilename(e.target.files[0].name);
    }
  };

  if (selectedFilename && selectedFilename !== " ")
    return (
      <div className="h-40 w-full max-w-screen-sm">
        <h2 className="p-5 text-lg font-bold">Selected File</h2>
        <div className="border border-purple-400 min-w-full py-3 px-5 rounded-3xl flex items-center justify-between">
          <p>{selectedFilename}</p>
          <button className="cursor-pointer text-purple-400 hover:text-red-500" onClick={removeSelectedFile} title="Remove File">
            <ImCross></ImCross>
          </button>
        </div>
      </div>
    );

  return (
    <div className="relative border border-purple-500 h-40 w-full max-w-screen-sm rounded-2xl overflow-hidden">
      <input
        onChange={handleFileChange}
        className="h-full w-full  object-cover relative z-10 opacity-0"
        type="file"
        accept="application/pdf"
      ></input>
      <p className="absolute inset-0 flex items-center justify-center font-semibold">
        Drag and Drop your pdf file here
      </p>
    </div>
  );
};

export default FileUploader;
