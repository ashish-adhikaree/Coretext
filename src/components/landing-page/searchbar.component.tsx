import { AiOutlineSearch } from "react-icons/ai";
import { useState } from "react";
import { useRouter } from "next/router";
import Button from "./button.component";

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState("");
  const router = useRouter();

  const handleSearchValueChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (event.target.value === null) return;
    setSearchValue(event.target.value);
  };

  const handleSearch = async (event: React.FormEvent) => {
    event.preventDefault();
    router.push(`/search?q=${searchValue}`);
  };

  return (
    <div className="w-full max-w-screen-sm flex items-center space-x-3">
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
  );
};

export default SearchBar;
