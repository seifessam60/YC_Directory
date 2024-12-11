import React from "react";
import Link from "next/link";
import Image from "next/image";
import { SessionProvider } from "next-auth/react";
import { auth, signIn, signOut } from "@/auth";
import { options } from "preact";

const Navbar = async () => {
  const session = await auth();
  return (
    <header className={"px-5 py-3 shadow-sm bg-white font-work-sans"}>
      <nav className={"flex justify-between items-center"}>
        <Link href={"/public"}>
          <Image src={"/logo.png"} alt={"logo"} width={143} height={30} />
        </Link>
        <div className={"flex gap-5 items-center text-black"}>
          {session && session?.user ? (
            <>
              <Link href={"/startup/create"}>
                <span>Create</span>
              </Link>
              <form
                action={async () => {
                  "use server";
                  await signOut({ redirectTo: "/" });
                }}
              >
                <button type={"submit"}>Log Out</button>
              </form>
              <Link href={`/startup/${session?.id}`}>
                <span>{session?.user?.name}</span>
              </Link>
            </>
          ) : (
            <form
              action={async () => {
                "use server";
                await signIn("github");
              }}
            >
              <button type="submit">Login</button>
            </form>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
