"use client";
import React, { useEffect, useState } from "react";
import Card from "../dashboard/Card";
import { MdGrade } from "react-icons/md";
import { totalAssurances } from "@/app/lib/getAllAssurances";

//export const dynamic = "force-dynamic";

const AssuDash = () => {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const fetchAssus = async () => {
      const data = await totalAssurances(true);

      setTotal(data);
    };

    fetchAssus();
  }, []);

  return (
    <>
      <Card
        title="Dossiers Assurances"
        total={+total}
        path="/assus"
        icon={
          <span className="text-purple-400">
            <MdGrade size={24} />
          </span>
        }
        text="Nombre total de dossiers d'assurances dans le système"
      />
    </>
  );
};

export default AssuDash;
