"use client";
import React, { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

const RegisterForm = () => {
  const [errorMsg, setErrorMsg] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setErrorMsg("");

    const formData = new FormData(e.currentTarget);

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        body: JSON.stringify({
          email: formData.get("email"),
          password: formData.get("password"),
          isAdmin: formData.get("isadmin"),
        }),
      });

      if (!res.ok) throw new Error(await res.text());

      const data = await res.json();

      if (data.message === "KO") {
        setErrorMsg("Cet email est déjà utilisé");
      } else router.push("/clients");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="border flex flex-col gap-2 mx-auto max-w-md mt-10"
    >
      <input
        className="border border-black"
        name="email"
        type="email"
        onChange={() => setErrorMsg("")}
      />
      <input
        className="border border-black"
        name="password"
        type="password"
        onChange={() => setErrorMsg("")}
      />

      {errorMsg && <label className="text-red-400">{errorMsg}</label>}

      <div className="w-full py-2 flex items-center gap-1">
        <input className="border border-black" name="isadmin" type="checkbox" />
        <label>Administrateur</label>
      </div>
      <button type="submit">Enregistrer</button>
    </form>
  );
};

export default RegisterForm;
