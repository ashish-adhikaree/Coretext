import Head from "next/head";
import { useRouter } from "next/router";
import { SingleSearchResult, SearchHeader } from "@/components";
import { SingleResult } from "types";
import { default as searchResult } from "dummydata.json";

const SearchPage = () => {
  const router = useRouter();
  return (
    <div>
      <Head>
        <title>{`${router.query.q} - Coretext`}</title>
      </Head>
      <SearchHeader />
      <div>
        <div className="ml-5 md:ml-[12rem] text-gray-500">{`About ${searchResult.length} results`}</div>
        <div>
          {searchResult.map((item: SingleResult, index: number) => {
            return (
              <SingleSearchResult key={item.page_source + index} item={item} />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
