"use client";
import React, { useEffect, useState } from "react";
import Card from "../dashboard/Card";
import { MdGrade, MdHouse } from "react-icons/md";
import { totalImmos } from "@/app/lib/getAllImmos";

//export const dynamic = "force-dynamic";

const ImmoDash = () => {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const fetchImmos = async () => {
      const data = await totalImmos(true);

      setTotal(data);
    };

    fetchImmos();
  }, []);

  return (
    <>
      <Card
        title="Dossiers Immobiliers"
        total={+total}
        path="/immos"
        icon={
          <span className="text-orange-400">
            <MdHouse size={24} />
          </span>
        }
        text="Nombre total de dossiers immobiliers dans le système"
      />
    </>
  );
};

export default ImmoDash;
