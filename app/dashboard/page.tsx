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
import ClientDash from "../components/client/ClientDash";
import Transactions from "../components/dashboard/Transactions";
import Chart from "../components/dashboard/Chart";
import Rightbar from "../components/dashboard/rightbar/Rightbar";
import AssuDash from "../components/assu/AssuDash";
import ActionDash from "../components/action/ActionDash";
import ImmoDash from "../components/immo/ImmoDash";

export const dynamic = "force-dynamic";

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);
  if (!session) redirect("/login");

  // redirect("/dashboard");

  return (
    <div className="flex gap-5 mt-5 max-md:px-1">
      <div className="flex-[3_3_0%] flex flex-col gap-5 w-full">
        <div className="flex justify-between gap-5 max-md:gap-1 max-md:flex-col w-full">
          <ClientDash />
          <AssuDash />
          <ImmoDash />
          <ActionDash />
          {/*           <ImmoDash />
          <AssuDash /> */}
          {/*           <Card title="immobiliers" total={0} path="/clients" />
          <Card title="Assurances" total={0} path="/clients" /> */}
        </div>
        <Transactions />
        <Chart />
      </div>
      <div className="flex-1 max-md:hidden">
        <Rightbar />
      </div>
    </div>

    /*     <main>
      <Header />
      {<span>USER</span>}
    </main> */
  );
}
