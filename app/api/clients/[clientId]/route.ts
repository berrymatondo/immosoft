import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/utils/authOptions";
import { revalidatePath } from "next/cache";

export const GET = async (request: NextRequest, response: NextResponse) => {
  const path = request.nextUrl.pathname;
  const clientId = path.split("clients/")[1].split("/assus")[0];
  //console.log("clientId vaut:", clientId);

  try {
    const client = await prisma.person.findUnique({
      where: {
        id: +clientId,
      },
      include: {
        immos: true,
        assus: true,
        task: true,
      },
    });

    // console.log("READ client:", client);

    return NextResponse.json({ message: "OK", client }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Error", error },
      {
        status: 500,
      }
    );
  }
};

export const PUT = async (request: NextRequest, response: NextResponse) => {
  const path = request.nextUrl.pathname;
  const clientId = path.split("clients/")[1].split("/assus")[0];

  const {
    firstName,
    lastName,
    email,
    gender,
    maritalStatus,
    birthdate,
    mobile,
    address,
    notes,
  } = await request.json();

  const session = await getServerSession(authOptions);

  try {
    const userTmp: any = session?.user;
    const client = await prisma.person.update({
      where: {
        id: +clientId,
      },
      data: {
        email: email,
        notes: notes,
        firstname: firstName,
        lastname: lastName,
        gender: gender,
        maritalstatus: maritalStatus,
        birthday: new Date(birthdate),
        mobile: mobile,
        address: address,
        // createAt: new Date(),
        // updatedAt: new Date(),
        username: userTmp.username ? userTmp.username : "",
        userId: userTmp.id ? parseInt(userTmp.id) : null,
      },
    });

    //console.log("READ client:", client);

    return NextResponse.json({ message: "OK", client }, { status: 200 });
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

export const DELETE = async (request: NextRequest, response: NextResponse) => {
  const path = request.nextUrl.pathname;
  const clientId = path.split("clients/")[1];
  console.log("clientId vaut:", clientId);

  try {
    const res0 = await prisma.task.findMany({
      where: {
        personId: +clientId,
      },
    });
    if (res0.length > 0) {
      for (let i = 0; i < res0.length; i++) {
        await prisma.task.delete({
          where: {
            id: res0[i].id,
          },
        });
      }
    }

    console.log("clientIvvv vaut:", clientId);
    const res10 = await prisma.assurance.findMany({
      where: {
        personId: +clientId,
      },
    });
    if (res10.length > 0) {
      for (let i = 0; i < res10.length; i++) {
        await prisma.assurance.delete({
          where: {
            id: res10[i].id,
          },
        });
      }
    }

    console.log("clientIdyyy vaut:", clientId);
    const res2 = await prisma.immo.findMany({
      where: {
        personId: +clientId,
      },
    });
    console.log("RES2:", res2);

    if (res2.length > 0) {
      for (let i = 0; i < res2.length; i++) {
        await prisma.immo.delete({
          where: {
            id: res2[i].id,
          },
        });
      }
    }

    console.log("clientIdxxx vaut:", clientId);
    const res1a = await prisma.person.findUnique({
      where: {
        id: +clientId,
      },
    });
    if (res1a) {
      const results = await prisma.person.delete({
        where: {
          id: +clientId,
        },
      });
    }
    console.log("clientIdzzz vaut:", clientId);

    // console.log("READ action:", action);

    return NextResponse.json({ message: "OK", res1a }, { status: 200 });
  } catch (error) {
    //console.log("error", error);

    return NextResponse.json(
      { message: "Error", error },
      {
        status: 500,
      }
    );
  }
};
