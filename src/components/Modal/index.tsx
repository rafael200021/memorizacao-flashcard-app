import axiosConfig from "Helpers/axios";
import ICard from "Intefaces/ICard";
import IGroups from "Intefaces/IGroups";
import React, { useState } from "react";


interface ModalProps {
  id: string | undefined,
  modal: string,
  setCards: React.Dispatch<React.SetStateAction<ICard[] | undefined>>,
  setGroup: React.Dispatch<React.SetStateAction<IGroups | undefined>>
}

export default function Modal({
  id,
  modal,
  setCards,
  setGroup
}: ModalProps) {
  const [front, setFront] = useState<string>("");
  const [back, setBack] = useState<string>("");

  const createCard = async () => {

    const data: ICard = {
      back: back,
      front: front,
      id_card_group: Number(id),
      time: new Date().toString(),
    };

    await axiosConfig.post("cards", data);

    const idUsuario = localStorage.getItem("id");

    await axiosConfig.get(`/groups/${id}/cards/time`).then((res) => {
      setCards(res.data);
    });

    await axiosConfig.get(`/users/${idUsuario}/groups/${id}`).then((res) => {
      setGroup(res.data);
    });

    setFront("");
    setBack("");
  };

  return (
    <div className="modal" id={modal}>
      <div className="modal-box">
        <div className="flex justify-between  items-center">
          <h3 className="font-bold text-lg">Create Card</h3>
          <a href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="currentColor"
              className="bi bi-x"
              viewBox="0 0 16 16"
            >
              <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
            </svg>
          </a>
        </div>
        <div className="mt-5 flex gap-2 flex-col">
          <label>Front</label>
          <textarea
            value={front}
            onChange={(e) => setFront(e.target.value)}
            className="border rounded p-2"
            rows={3}
          ></textarea>
        </div>
        <div className="mt-5 flex gap-2 flex-col">
          <label>Back</label>
          <textarea
            value={back}
            onChange={(e) => setBack(e.target.value)}
            className="border rounded p-2"
            rows={3}
          ></textarea>
        </div>

        <div className="modal-action">
          <button onClick={createCard} className="btn">
            Create
          </button>
        </div>
      </div>
    </div>
  );
}
