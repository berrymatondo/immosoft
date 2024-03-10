"use client";
import React, { useEffect, useState } from "react";
import Card from "../dashboard/Card";
import { MdGrade, MdTask } from "react-icons/md";
import { totalActions } from "@/app/lib/getAllActions";

//export const dynamic = "force-dynamic";

const ActionDash = () => {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const fetchActions = async () => {
      const data = await totalActions(true);

      setTotal(data);
    };

    fetchActions();
  }, []);

  return (
    <>
      <Card
        title="Total d'actions"
        total={+total}
        path="/actions"
        icon={
          <span className="text-blue-400">
            <MdTask size={24} />
          </span>
        }
        text="Nombre total d'actions ouvertes dans le système"
      />
    </>
  );
};

export default ActionDash;
