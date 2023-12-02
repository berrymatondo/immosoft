import React from "react";
import { getAllclients } from "../lib/getAllClients";
import Title from "../components/Title";
import { Person } from "@prisma/client";
import Search from "../components/Search";

const ImmosPage = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  // const { data: session, status } = useSession();

  const search =
    typeof searchParams.search === "string" ? searchParams.search : "";

  // const clients = await getAllclients(search);
  const clients = await getAllclients(1, 2);
  console.log("clients: ", clients);

  return (
    <div className=" mx-auto w-full">
      <div className=" rounded-lg p-2 mt-2 bg-primary">
        <Title
          title="Liste des dossiers immos"
          back={false}
          size="lg:text-xl"
        />
        <p className="text-sm">
          Cette transaction permet de lister tous les dossiers immobiliers
        </p>
      </div>
      <div className="flex justify-between items-center my-5">
        <div className="flex items-center gap-2 bg-hov p-2 rounded-lg max-w-max">
          <Search placeholder="Rechercher un dossier ..." path="immos" />
        </div>
        {/* <AddButton path="/clients/newuser" /> */}
      </div>
      <table className="bg-primary w-full mt-6 rounded-lg">
        <thead>
          <tr>
            <td>Nom</td>
            <td>Prénom</td>
            <td>Téléphone</td>
            <td>Produits</td>
            <td>Actions</td>
          </tr>
        </thead>
        <tbody>
          {clients &&
            clients.map((el: Person) => (
              <tr key={el.id}>
                <td>{el.firstname}</td>
                <td>{el.lastname}</td>
                <td>{el.mobile}</td>
                <td>{}</td>
                <td></td>
              </tr>
            ))}
        </tbody>
      </table>
      {/*       <p>Current page: {page}</p>
       */}{" "}
      {/*       <div className=" flex justify-end gap-4 text-xs">
        <Link
          className={
            page == 1
              ? `p-2 rounded-lg bg-gray-400 text-gray-800 pointer-events-none`
              : `p-2 bg-hov rounded-lg hover:text-yellow-400`
          }
          href={`/clients?page=${page > 1 ? page - 1 : 1}`}
        >
          Précédent
        </Link>
        <Link
          className={
            total - page * limit < 0
              ? "p-2 rounded-lg bg-gray-400 text-gray-800 pointer-events-none"
              : "p-2 bg-hov rounded-lg hover:text-yellow-400"
          }
          href={`/clients?page=${page + 1}`}
        >
          Suivant
        </Link>
        <Suivant page={page} />
      </div> */}
    </div>
  );
};

export default ImmosPage;
