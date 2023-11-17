//"use client";
import { prisma } from "@/lib/prisma";
import Image from "next/image";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
//import { authOptions } from "./api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/utils/authOptions";
import Login from "./components/Login";
import Header from "./components/Header";

export default async function Home() {
  const session = await getServerSession(authOptions);

  /*   const user = await prisma.user.findFirst({
    where: {
      email: "test@gmail.com",
    },
  }); */

  /*   const { data: session, status } = useSession();
  const val: any = session?.user;
  const router = useRouter();

  if (!val) {
    router.push("/login");
  } */

  redirect("/dashboard");

  if (!session) {
    redirect("/login");
  }
  console.log("YESSSSSSSSSSSSSSSSSSSSSSSS");

  return (
    /*     <main className="w-full flex min-h-screen flex-col items-center justify-between">
     */

    <main>
      <Header />
      {<span>USER</span>}
      {/*       <span>{JSON.stringify(session)}</span>
       */}{" "}
    </main>
  );
}
