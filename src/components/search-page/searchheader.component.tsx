import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import { AiOutlineSearch } from "react-icons/ai";
import { Button, Logo } from "@/components";

const SearchHeader = () => {
  const router = useRouter();
  const [searchValue, setSearchValue] = useState<string | string[]>("");

  useEffect(() => {
    if (router.query.q != undefined) {
      setSearchValue(router.query.q);
    }
  }, [router.query.q]);

  const handleSearch = (event: React.FormEvent) => {
    event.preventDefault();
    router.push(`/search?q=${searchValue}`);
  };

  const handleSearchValueChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (event.target.value === null) return;
    setSearchValue(event.target.value);
  };

  return (
    <>
      <div className="flex justify-between items-center  p-5 mb-0 sticky top-0 bg-white space-x-3">
        <div className="flex items-center space-x-5 flex-grow">
          <Logo />
          <div className="w-full max-w-screen-md flex items-center space-x-3">
            <form className="w-full border grow flex rounded-full hover:shadow-md focus-within:shadow-md items-center m-auto">
              <AiOutlineSearch className="text-2xl text-gray-500 mx-5 my-3" />
              <input
                type="text"
                value={searchValue}
                onChange={handleSearchValueChange}
                placeholder="Type your query"
                className="flex-grow outline-none bg-transparent"
              />
              <button
                className="hidden"
                type="submit"
                onClick={handleSearch}
              ></button>
            </form>
            <Button
              onClick={handleSearch}
              disabled={searchValue.length === 0 || searchValue === ""}
            >
              <p className="whitespace-nowrap">Coretext Search</p>
            </Button>
          </div>
        </div>
        <Button href="/upload" className="hidden md:block">
          <p className="whitespace-nowrap">Upload to Coretext</p>
        </Button>
      </div>
      <div className="px-5 my-2 flex items-center">
        <Button href="/upload" className="block md:hidden">
          <p className="whitespace-nowrap">Upload to Coretext</p>
        </Button>
      </div>
    </>
  );
};

export default SearchHeader;
