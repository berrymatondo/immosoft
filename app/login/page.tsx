"use client";

import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import { FaHouseDamage } from "react-icons/fa";
import Title from "../components/Title";

//export const runtime = "edge";

const LoginPage = () => {
  const { data: session, status } = useSession();
  const val: any = session?.user;
  const inputStyle =
    "outline-0 rounded-full p-2 mb-2 bg-secondary border-2 border-hov";

  const [show, setShow] = useState<boolean>(false);
  const [email, setEmail] = useState<any>("");
  const [password, setPassword] = useState<string>("");
  const [errorMsg, setErrorMsg] = useState<string>("");

  const router = useRouter();

  if (val) {
    router.back();
  }

  const HandleConfirmer = async (e: any) => {
    e.preventDefault();

    const loginUser = {
      email: email,
      password: password,
    };

    try {
      const out = await signIn("credentials", {
        ...loginUser,
        redirect: false,
      });

      if (out?.ok) {
        router.push("/");
        //console.log("OCUOUCIISDDDQSUDSQ");

        //router.back();
        //window.history.back();
        //console.log("dsqfqsdfsqfdqsf");
      } else {
        if (out?.error === "CredentialsSignin")
          setErrorMsg("Email ou mot de passe incorrect");
      }
    } catch (e) {
      return e;
    }
  };

  /*   const handleSignOut = async () => {
    try {
      signOut({ redirect: false });
      router.push("/login");
    } catch (e) {
      return e;
    }
  }; */

  return (
    <div className="max-w-[400px] mx-auto">
      <div className=" flex justify-center text-6xl">
        <span className="text-teal-600">
          <FaHouseDamage />
        </span>
      </div>

      <div className="w-full text-center flex justify-center p-5">
        <Title title="Connexion" back={false} size="text-3xl" />
      </div>

      <form
        onSubmit={(e) => {
          HandleConfirmer(e);
        }}
        className="flex flex-col justify-start items-center bg-primary rounded-lg"
      >
        <div className="text-lg   rounded-lg w-full p-2 ">
          <div className="w-full  py-2 flex flex-col">
            <label className="font-semibold m-1">Email</label>
            <input
              onChange={(e) => {
                setErrorMsg("");
                setEmail(e.target.value);
              }}
              className={inputStyle}
              type="email"
              disabled={val ? true : false}
              required
            />
          </div>

          {!val && (
            <div className="w-full  py-2 flex flex-col">
              <label className="font-semibold m-1">Mot de passe</label>
              <input
                onChange={(e) => {
                  setErrorMsg("");
                  setPassword(e.target.value);
                }}
                className={inputStyle}
                type="password"
                required
              />
            </div>
          )}

          {errorMsg && (
            <div className="w-full  py-2 flex flex-col">
              <label className="text-red-400">{errorMsg}</label>
            </div>
          )}

          <div className="self-end flex flex-col justify-center gap-2 mt-4">
            {!val && (
              <button className="bg-teal-800 text-white text-xl rounded-lg p-2 w-full">
                Se Connecter
              </button>
            )}
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
