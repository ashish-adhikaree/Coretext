import Head from "next/head";
import { Button, Logo, SearchBar } from "@/components";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Coretext</title>
      </Head>
      <div className="flex items-center justify-end p-4">
        <Button href="/upload">Upload to Coretext</Button>
      </div>
      <div className="w-screen pt-20 px-5 space-y-5 flex flex-col items-center justify-center">
        <Logo />
        <SearchBar />
      </div>
    </div>
  );
}
