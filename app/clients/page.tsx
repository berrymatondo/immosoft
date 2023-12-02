import React from "react";
import Title from "../components/Title";
import AddButton from "../components/AddButton";
import Search from "../components/Search";
import { getAllclients, totalClients } from "../lib/getAllClients";
import NaviPages from "../components/NaviPages";
import getSes from "../lib/getServerSession";
import ClientsTable from "../components/client/ClientsTable";
import Navbar from "../components/navigation/Navbar";

export const dynamic = "force-dynamic";

const page = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const page =
    typeof searchParams.page === "string" ? Number(searchParams.page) : 1;

  const limit =
    typeof searchParams.limit === "string" ? Number(searchParams.limit) : 5;

  const search =
    typeof searchParams.search === "string" ? searchParams.search : undefined;

  const session: any = await getSes();
  const clients = await getAllclients(page, limit, search);
  const total = await totalClients();

  return (
    <div className=" mx-auto w-full">
      <div className=" rounded-lg p-2 mt-2 bg-primary">
        <div className="flex items-center gap-2">
          <Title title="Liste des clients" back={false} size="lg:text-xl" />{" "}
          <span className="font-bold">({total})</span>
        </div>
        <p className="text-sm">
          Cette transaction permet de lister tous les clients
        </p>
      </div>
      <div className="flex justify-between items-center my-5">
        <div className="flex items-center gap-2 bg-hov p-2 rounded-lg max-w-max">
          <Search
            placeholder="Rechercher un client ..."
            path="clients"
            search={search}
          />
        </div>

        <div className="flex items-center gap-8">
          {(session?.user?.role === "ADMIN" ||
            session?.user?.role === "USER") && (
            <AddButton path="/clients/newclient" text="Nouveau Client" />
          )}
          <NaviPages page={page} limit={limit} total={total} search={search} />
        </div>
      </div>
      <ClientsTable clients={clients} userRole={session.user?.role} />
    </div>
  );
};

export default page;
