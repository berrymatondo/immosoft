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
import Rightbar from "./components/dashboard/rightbar/Rightbar";
import Chart from "./components/dashboard/Chart";
import Transactions from "./components/dashboard/Transactions";
import Card from "./components/dashboard/Card";
import ClientDash from "./components/client/ClientDash";
import ImmoDash from "./components/immo/ImmoDash";
import AssuDash from "./components/assu/AssuDash";

export const dynamic = "force-dynamic";

export default async function Home() {
  /*   const session = await getServerSession(authOptions);



  redirect("/dashboard"); */

  return (
    <div className="flex gap-5 mt-5">
      <div className="flex-[3_3_0%] flex flex-col gap-5">
        <div className="flex justify-between gap-5 ">
          <ClientDash />
          <ImmoDash />
          <AssuDash />
          {/*           <Card title="immobiliers" total={0} path="/clients" />
          <Card title="Assurances" total={0} path="/clients" /> */}
        </div>
        <Transactions />
        <Chart />
      </div>
      <div className="flex-1">
        <Rightbar />
      </div>
    </div>

    /*     <main>
      <Header />
      {<span>USER</span>}
    </main> */
  );
}
