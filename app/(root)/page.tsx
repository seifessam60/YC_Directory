import React from "react";
import SearchForm from "@/components/SearchForm";
import StartupCard, { StartupTypeCard } from "@/components/StartupCard";
import { STARTUPS_QUERIES } from "@/sanity/lib/queries";
import { sanityFetch, SanityLive } from "@/sanity/lib/live";
import { auth } from "@/auth";

const Page = async ({
  searchParams,
}: {
  searchParams: Promise<[query?: string]>;
}) => {
  const query = (await searchParams).query;
  const params = { search: query || null };
  const session = await auth();
  console.log(session?.id);
  const { data: posts } = await sanityFetch({
    query: STARTUPS_QUERIES,
    params,
  });

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
      <section className={"section_container"}>
        <p className={"text-30-semibold"}>
          {query ? `Search results for "${query}"` : "All Startups"}
        </p>
        <ul className={"card_grid mt-7"}>
          {posts?.length > 0 ? (
            posts.map((post: StartupTypeCard, index: number) => (
              <StartupCard key={post._id} post={post} />
            ))
          ) : (
            <p className={"no-result"}>No Result Found</p>
          )}
        </ul>
      </section>
      <SanityLive />
    </>
  );
};

export default Page;
