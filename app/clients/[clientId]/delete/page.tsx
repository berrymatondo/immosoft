"use client";
import MyLabel from "@/app/components/MyLabel";
import Title from "@/app/components/Title";
import { AssuStatus, AssuType, Assurance, Person } from "@prisma/client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

type ClientDeletePageProps = {
  params: {
    clientId: number;
  };
};

type Inputs = {
  denom: string;
  status: string;
  description?: string;
};

const AssuranceStatus = [
  { DV1: "DVA - A définir" },
  { DV2: "DVA - A définir" },
  { OFA: "OFA - Offre faite" },
  { OAC: "OAC - Offre acceptée" },
  { PCD: "PCD - Possède déjà" },
];

const inputStyle =
  "rounded-lg py-1 px-2 max-lg:p-1 mb-1  bg-secondary outline-0 border border-hov";

const ClientDeletePage = ({ params }: ClientDeletePageProps) => {
  const [clientId, setClientId] = useState(params.clientId);
  const [client, setClient] = useState<Person>();

  const [comments, setComments] = useState("");
  const router = useRouter();

  const { data: session, status } = useSession();
  const tempo: any = session?.user;
  const val: any = tempo ? tempo?.role : "USER";
  //console.log("VAL: ", val);

  const [data, setData] = useState<Inputs>();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    const fetchClient = async () => {
      //  console.log(" params.clientId:", params.clientId);

      const res = await fetch(`/api/clients/` + clientId, {
        cache: "no-store",
      });
      const data = await res.json();
      // console.log("CLIENT: ", data.client);
      setClient(data.client);
    };

    fetchClient();
  }, [clientId]);

  const processForm = async (e: any) => {
    e.preventDefault();

    /*     const updateAssu = {
      type: assuType,
      status: assuStatus,
      comments: comments,
    };
 */
    const options = {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      //  body: JSON.stringify(updateAssu),
    };
    //   console.log("updateAssu", updateAssu);

    try {
      //const res = await fetch(process.env.NEXT_PUBLIC_POLES_API!, options);
      //return null;
      const res = await fetch(`/api/clients/${params.clientId}`, options);
      //   const data = await res.json();
      //   return data;

      if (res.ok) router.push(`/clients`);
    } catch (e) {
      return e;
    }

    // setData(data);
  };

  return (
    <div className="w-full mx-auto ">
      <div className=" rounded-lg p-2 mt-2 bg-primary">
        <div className="flex items-center gap-2">
          <Title title="Supprimer un client" back={true} size="lg:text-xl" />{" "}
        </div>
        <div className="flex justify-between items-center">
          <p className="text-sm">
            {"Cette transaction permet de supprimer un client"}
          </p>
        </div>
      </div>
      <form
        onSubmit={processForm}
        className="border border-hov rounded-lg p-2 mt-5 w-1/2  max-md:w-full"
      >
        <div className="bg-black-400 text-center text-red-400 text-xl py-2">
          {"Etes-vous sûr de vouloir supprimer ce client ?"}
        </div>

        <div className="flex items-center justify-center">
          <div className="">
            <span className={" font-bold uppercase w-full"}>
              {client?.lastname}
            </span>
            <span className={" font-bold  w-full"}> {client?.firstname}</span>
          </div>
        </div>

        {/*         <div className="flex items-center justify-center">
          <MyLabel title="Dénomination" />
          <div className="">
            <span className={" font-bold uppercase w-full"}>{assu?.type}</span>
          </div>
        </div> */}

        {/*         <div className="flex items-center justify-center">
          <MyLabel title="Statut" />
          <div className="">
            <span className={" font-bold uppercase w-full"}>
              {assu?.status}
            </span>
          </div>
        </div> */}

        <div className="flex justify-center gap-4 mt-4 rounded-lg px-2 py-1  ">
          <button
            type="button"
            onClick={() => router.back()}
            className="mt-4 border text-red-400 text-lg rounded-lg px-2 py-1 w-1/3"
          >
            Annuler
          </button>
          <button
            type="submit"
            className="mt-4 bg-teal-800 hover:bg-teal-600 text-white text-lg rounded-lg px-2 py-1 w-1/3 "
          >
            Confirmer
          </button>
        </div>
      </form>
    </div>
  );
};

export default ClientDeletePage;
