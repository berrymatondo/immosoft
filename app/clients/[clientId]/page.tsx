import { Person } from "@prisma/client";
import React from "react";

//export const runtime = "edge";

// Get single person
const getClient = async (id: number) => {
  const url = process.env.CLIENTS_API! + id;

  /*   try {
    const res = await fetch(url, {
      cache: "no-store",
    });
    const data = await res.json();

    return data.person;
  } catch (error) {
    console.error(error);
  } */
};

const fetchPoles = async (pers: Person) => {};

// Fecth trainings
const fetchTrainings = async (pers: Person) => {
  // const url = process.env.TRAININGS_API!;
};

type ClientProps = {
  params: {
    clientId: number;
  };
};

const ClientDetailsPage = async (props: ClientProps) => {
  // const person: Person = await getClient(props.params.clientId);
  /*   const poles: any[] = await fetchPoles(person);
  const trainings: any[] = await fetchTrainings(person); */

  // console.log("popopo", poles);

  return (
    <div>
      Client <span>{props.params.clientId}</span>
      {/*       <PersonDetails person={person} poles={poles} trainings={trainings} />
       */}{" "}
    </div>
  );
};

export default ClientDetailsPage;
