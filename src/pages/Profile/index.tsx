import Button from "components/Button";
import InputText from "components/InputText";
import axiosConfig from "Helpers/axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const nameStoraged: string | null = localStorage.getItem("nome");
  const emailStoraged: string | null = localStorage.getItem("email");
  const id: string | null = localStorage.getItem("id");
  const [email, setEmail] = useState(emailStoraged!);
  const [name, setName] = useState(nameStoraged!);
  const navigate = useNavigate();

  const update = async () => {
    let data = {
      name: name,
      email: email,
    };
    await axiosConfig.put(`users/${id}`, data);

    localStorage.removeItem('group');
    localStorage.removeItem('id');
    localStorage.removeItem('nome');
    localStorage.removeItem('email');

    navigate("/");
  };

  return (
    <div className="flex justify-center items-center">
      <div className="m-10 w-full md:w-2/4 lg:w-1/4 shadow-lg p-10 rounded-lg bg-blue-500">
        <div className="flex justify-center items-center">
          <div className="w-24 h-24 flex justify-center items-center font-bold text-3xl cursor-pointer text-blue-500 text-center rounded-full bg-white">
            {nameStoraged![0]}
          </div>
        </div>
        <div className="flex  flex-col ">
          <div className="flex flex-col w-full  mt-5">
            <label className="mb-1 text-bold text-white ">Name</label>
            <InputText tipo="text" valor={name} funcao={setName} />
          </div>
          <div className="flex flex-col w-full mt-5">
            <label className="mb-1  text-bold text-white">E-mail</label>
            <InputText tipo="e-mail" valor={email} funcao={setEmail} />
          </div>
        </div>
        <Button
          onClick={ update}
          color="bg-white mt-10 w-full"
          text="Update"
        />
      </div>
    </div>
  );
}
