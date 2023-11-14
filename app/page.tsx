import { prisma } from "@/lib/prisma";
import Image from "next/image";

export default async function Home() {
  const user = await prisma.user.findFirst({
    where: {
      email: "test@gmail.com",
    },
  });
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      USER, {user?.email}
    </main>
  );
}
