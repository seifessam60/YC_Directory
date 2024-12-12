import React from "react";
import SearchForm from "@/components/SearchForm";
import StartupCard from "@/components/StartupCard";

const Page = async ({
  searchParams,
}: {
  searchParams: Promise<[query?: string]>;
}) => {
  const query = (await searchParams).query;
  const posts = [
    {
      _createdAt: new Date(),
      views: 55,
      author: { _id: 1, name: "Seif" },
      _id: 1,
      description: "This is a description",
      image:
        "https://totempool.com/wp-content/uploads/2019/08/Startup_a4171014e8d4cfe295a3db794f5389d6_2000-930x620.jpg",
      category: "Robots",
      title: "We Robots",
    },
  ];
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
    </>
  );
};

export default Page;
