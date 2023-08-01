import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import { AiOutlineSearch } from "react-icons/ai";
import { Button, Logo } from "@/components";

const SearchHeader = () => {
  const router = useRouter();
  const searchValue = useRef<HTMLInputElement>(null);
  const [value, setValue] = useState<string | string[] | undefined>("");
  
  useEffect(() => {
    if (router.query.q != undefined) {
      setValue(router.query.q);
    }
  }, [router.query.q]);

  const handleClick = (event: any) => {
    event.preventDefault();
    const inputValue = searchValue?.current?.value;
    setValue(inputValue);
    router.push(`/search?q=${inputValue}`);
  };

  const handleChange = (event: any) => {
    setValue(event.target.value);
  };

  return (
    <div className="flex justify-between items-center  p-5 mb-0 sticky top-0 bg-white">
      <div className="flex items-center space-x-5 flex-grow">
        <Logo />
        <form className="w-full border max-w-screen-sm flex rounded-full hover:shadow-md focus-within:shadow-md items-center m-auto">
          <input
            value={value}
            type="text"
            ref={searchValue}
            onChange={handleChange}
            className="pl-6 flex-grow outline-none bg-transparent"
          />
          <AiOutlineSearch className="text-3xl text-gray-500 pl-3 mr-5 my-3" />

          <button
            className="hidden"
            type="submit"
            onClick={handleClick}
          ></button>
        </form>
        <Button href="/upload">
          Upload to Coretext
        </Button>
      </div>
    </div>
  );
};

export default SearchHeader;
