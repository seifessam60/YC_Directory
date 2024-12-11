import Form from "next/form";
import SearchFormReset from "@/components/SearchFormReset";
import { Search } from "lucide-react";

const SearchForm = ({ query }: { query?: string }) => {
  return (
    <Form className={"search-form"} action={"/"} scroll={false}>
      <input
        name={"query"}
        className={"search-input"}
        defaultValue={query}
        placeholder={"Search Startups"}
      />
      <div className={"gap-2 flex"}>
        {query && <SearchFormReset />}
        <button type="submit" className={"search-btn text-white"}>
          <Search className={"size-5"} />
        </button>
      </div>
    </Form>
  );
};

export default SearchForm;
