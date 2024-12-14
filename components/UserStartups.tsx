import React from "react";
import { client } from "@/sanity/lib/client";
import { STARTUPS_BY_AUTHOR_QUERY } from "@/sanity/lib/queries";
import StartupCard, { StartupTypeCard } from "@/components/StartupCard";
import { cn } from "@/lib/utils";
import { Skeleton } from "@/components/ui/skeleton";

const UserStartups = async ({ id }: { id: string }) => {
  const startups = await client.fetch(STARTUPS_BY_AUTHOR_QUERY, { id });
  return (
    <>
      {startups.length > 0 ? (
        startups.map((startup: StartupTypeCard) => (
          <StartupCard key={startup._id} post={startup} />
        ))
      ) : (
        <p className={"no-result"}>No Startups Yet</p>
      )}
    </>
  );
};

export const StartupCardSkeleton = () => {
  return (
    <>
      {[0, 1, 2, 3, 4].map((i: number) => (
        <li key={cn("skeleton", i)}>
          <Skeleton className={"startup-card_skeleton"} />
        </li>
      ))}
    </>
  );
};

export default UserStartups;
