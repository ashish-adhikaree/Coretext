import { FileUploader, Input } from "@/components";
import Head from "next/head";
import React from "react";

const UploadToCoreText = () => {
  return (
    <>
      <Head>
        <title>Upload to Coretext</title>
      </Head>
      <div className="space-y-10 h-screen w-screen flex flex-col items-center justify-center">
        <Input type="text" placeholder="Paste your link here"/>
        <FileUploader/>
      </div>
    </>
  );
};

export default UploadToCoreText;
