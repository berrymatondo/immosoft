import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export const GET = async (request: NextRequest, response: NextResponse) => {
  try {
    const count = await prisma.person.count();

    return NextResponse.json({ message: "OK", count }, { status: 200 });
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
