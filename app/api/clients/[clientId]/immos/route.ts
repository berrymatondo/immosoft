//import { db } from "@/db";
//import { myusers, poles } from "@/db/schema";
import { NextRequest, NextResponse } from "next/server";

import bcrypt from "bcrypt";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/utils/authOptions";
import { revalidatePath } from "next/cache";

export const POST = async (request: NextRequest, response: NextResponse) => {
  //console.log("POST");

  const {
    maritalStatus,
    salNet,
    salNetCo,
    chqRep,
    chqRepCo,
    autRev,
    autRevCo,
    prtTmp,
    prtTmpCo,
    autPrt,
    autPrtCo,
    notes,
    demAccepetd,
    banque,
    bankName,
    demAmount,
    taux,
    duree,
    mensualite,
  } = await request.json();
  const path = request.nextUrl.pathname;
  const clientId = path.split("clients/")[1].split("/immos")[0];
  // console.log("ASSURANCE clientId vaut:", clientId);
  // console.log("obj", { assudenom, assustatus, description });

  const session = await getServerSession(authOptions);

  try {
    console.log("AVANT ECRITURE:", duree);
    console.log("AVANT ECRITURE men:", mensualite);
    console.log("AVANT ECRITURE dem:", demAmount);
    console.log("AVANT ECRITURE tau:", taux);
    console.log("AVANT ECRITURE autPrtCo:", autPrtCo);
    console.log("AVANT ECRITURE chqRepCo:", chqRepCo);

    const userTmp: any = session?.user;
    const assus = await prisma.immo.create({
      data: {
        personId: +clientId,
        maritalStatus: maritalStatus,
        salNet,
        salNetCo,
        chqRep,
        chqRepCo,
        autRev,
        autRevCo,
        prtTmp,
        prtTmpCo,
        autPrt,
        autPrtCo,
        notes,
        demAccepetd,
        banque,
        bankName,
        demAmount: demAmount ? +demAmount : 0,
        taux: taux ? +taux : 0,
        duree: duree ? +duree : 0,
        mensualite: mensualite ? +mensualite : 0,
        username: userTmp.username ? userTmp.username : "",
        userId: userTmp.id ? parseInt(userTmp.id) : null,
      },
    });

    return NextResponse.json({ message: "OK", assus }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
};

export const GET = async (request: NextRequest, response: NextResponse) => {
  //const url = new URL(request.url);

  const path = request.nextUrl.pathname;
  const clientId = path.split("clients/")[1].split("/immos")[0];

  try {
    const results = await prisma.immo.findMany({
      where: {
        personId: +clientId,
      },
    });

    //    console.log("results", results);

    return NextResponse.json({ message: "OK", results }, { status: 200 });
  } catch (error) {
    console.log("error", error);

    return NextResponse.json(
      { message: "Error", error },
      {
        status: 500,
      }
    );
  }
};
