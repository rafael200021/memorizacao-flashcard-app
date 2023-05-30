import Modal from "components/Modal";
import axiosConfig from "Helpers/axios";
import { challenge } from "Helpers/constants";
import ICard from "Intefaces/ICard";
import IGroups from "Intefaces/IGroups";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function Detail() {
  const { id } = useParams();

  const [group, setGroup] = useState<IGroups | undefined>();
  const [cards, setCards] = useState<ICard[] | undefined>();

  useEffect(() => {
    const idUsuario = localStorage.getItem("id");

    axiosConfig.get(`/users/${idUsuario}/groups/${id}`).then((res) => {
      setGroup(res.data);
    });

    axiosConfig.get(`/groups/${id}/cards/time`).then((res) => {
      console.log(res);
      setCards(res.data);
    });

  }, []);

  return (
    <div className="p-10 border m-10 rounded" id={id}>
      <div className="">
        <div className="flex justify-between">
          <h3 className="font-bold text-lg">Group: {group?.name}</h3>
          <p>Created At: {group?.createdAt}</p>
        </div>
        <p className="py-4">{group?.description}</p>
        <p>Cards to Study: {cards?.length}</p>
        <div className="mt-10 gap-2 flex justify-end">
          <a href="#modal" className="btn">
            Create Card
          </a>
          <Link to={challenge} className="btn">
            Start
          </Link>
        </div>
      </div>
      <Modal id={id} modal="modal" />
    </div>
  );
}
