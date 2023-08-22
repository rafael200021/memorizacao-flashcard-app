import HomeContainer from "components/HomeContainer";
import InputText from "components/InputText";
import axiosConfig from "Helpers/axios";
import { home, signup } from "Helpers/constants";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const login = () => {
    axiosConfig
      .post("auth", { email: email, password: password })
      .then((res) => {
        localStorage.setItem("nome", res.data.name);
        localStorage.setItem("id", res.data.id);
        localStorage.setItem("email", res.data.email);
        navigate(home);
      })
      .catch((e) => {
        window.alert(e);
      });
  };

  return (
    <HomeContainer>
      <h3 className="text-blue-500 font-bold text-2xl">Sign In</h3>
      <div className="flex flex-col w-full mt-5">
        <label className="mb-2">E-mail</label>
        <InputText tipo="e-mail" valor={email} funcao={setEmail} />
      </div>
      <div className="flex flex-col w-full mt-3">
        <label className="mb-2">Password</label>
        <InputText tipo="password" valor={password} funcao={setPassword} />
      </div>
      <p className="self-start mt-2 text-sm">
        Don't have an account yet?
        <Link
          className="text-blue-500 hover:text-blue-700 transition-all"
          to={signup}
        >
          <span> Sign Up</span>
        </Link>
      </p>
      <button
        onClick={login}
        className="mt-5 border rounded p-5 w-40 border-blue-500 text-blue-500 font-bold hover:text-white hover:bg-blue-500 transition-all"
      >
        Login
      </button>
    </HomeContainer>
  );
}
