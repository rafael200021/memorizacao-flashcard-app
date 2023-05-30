import HomeContainer from "components/HomeContainer";
import InputText from "components/InputText";
import { signin } from "Helpers/constants";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import IUser from "Intefaces/IUser";
import axiosConfig from "Helpers/axios";

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();
  const cadastrar = async () => {
    const user: IUser = {
      name: name,
      password: password,
      email: email,
    };

    await axiosConfig
      .post("users", user)
      .then((res) => {
        navigate(signin);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <HomeContainer>
      <h3 className="text-blue-500 font-bold text-2xl">Sign Up</h3>
      <div className="flex flex-col w-full mt-5">
        <label className="mb-2">Name</label>
        <InputText tipo="text" funcao={setName} valor={name} />
      </div>
      <div className="flex flex-col w-full mt-3">
        <label className="mb-2">E-mail</label>
        <InputText tipo="e-mail" funcao={setEmail} valor={email} />
      </div>
      <div className="flex flex-col w-full mt-3">
        <label className="mb-2">Password</label>
        <InputText tipo="password" funcao={setPassword} valor={password} />
      </div>
      <div className="flex flex-col w-full mt-3">
        <label className="mb-2">Confirm Password</label>
        <InputText
          tipo="password"
          funcao={setConfirmPassword}
          valor={confirmPassword}
        />
      </div>
      <p className="self-start mt-2 text-sm">
        Já possuí uma conta?{" "}
        <Link
          className="text-blue-500 hover:text-blue-700 transition-all"
          to={signin}
        >
          <span>Realize o Login Agora</span>
        </Link>
      </p>
      <button
        onClick={cadastrar}
        className="mt-5 border rounded p-5 w-40 border-blue-500 text-blue-500 font-bold hover:text-white hover:bg-blue-500 transition-all"
      >
        Cadastrar
      </button>
    </HomeContainer>
  );
}
