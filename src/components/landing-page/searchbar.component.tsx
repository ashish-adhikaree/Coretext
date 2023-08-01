import { AiOutlineSearch } from "react-icons/ai";
import { useRef } from "react";
import { useRouter } from "next/router";

const SearchBar = () => {
  const searchValue = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const handleClick = async (event: any) => {
    event.preventDefault();
    const value = searchValue?.current?.value;
    router.push(`/search?q=${value}`);
  };

  return (
    <div className="w-full space-y-10">
      <form className="w-full border max-w-screen-sm flex rounded-full hover:shadow-md focus-within:shadow-md items-center m-auto">
        <AiOutlineSearch className="text-2xl text-gray-500 mx-5 my-3" />
        <input
          type="text"
          ref={searchValue}
          placeholder="Type your query"
          className="flex-grow outline-none bg-transparent"
        />
        <button className="hidden" type="submit" onClick={handleClick}></button>
      </form>
    </div>
  );
};

export default SearchBar;
