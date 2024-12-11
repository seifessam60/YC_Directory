import React from "react";
import SearchForm from "@/components/SearchForm";

const Page = async ({
  searchParams,
}: {
  searchParams: Promise<[query?: string]>;
}) => {
  const query = (await searchParams).query;
  return (
    <>
      <section className={"pink_container"}>
        <h1 className={"heading"}>
          PITCH YOUR STARTUP,
          <br /> CONNECT WITH ENTREPRENEURS
        </h1>
        <p className={"sub-heading !max-w-3xl"}>
          Submit Ideas. Vote on Pitches. and Get Noticed in Virtual
          Competitions.
        </p>
        <SearchForm query={query} />
      </section>
    </>
  );
};

export default Page;
