import Button from "components/Button";
import EmptyCard from "components/EmptyCard";
import axiosConfig from "Helpers/axios";
import ICard from "Intefaces/ICard";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Challenge() {
  const { id } = useParams();

  const [front, setFront] = useState(true);
  const [cards, setCards] = useState<ICard[]>();
  const [index, setIndex] = useState<number>(0);

  const setNewCard = async (day: number, currentCard: ICard) => {
    if (day == 0) {
      setCards((oldCards) =>
        oldCards?.filter((card) => card.id != currentCard.id)
      );
      setCards((oldCards) => [...oldCards!, currentCard]);
    } else {
      let date = new Date();
      date.setDate(date.getDate() + day);

      console.log(date);
      await axiosConfig.put(`/cards/${currentCard.id}`, {
        time: date,
      });

      setCards((oldCards) =>
        oldCards?.filter((card) => card.id != currentCard.id)
      );
    }

    setFront(true);
  };

  useEffect(() => {
    axiosConfig.get(`/groups/${id}/cards/time`).then((res) => {
      setCards(res.data);
    });
  }, []);

  return (
    <div className="p-10">
      {cards?.length == 0 || cards == undefined ? (
        <EmptyCard />
      ) : (
        <>
          <div className="rounded border w-full shadow-lg p-10">
            <div className="mb-5 flex justify-between items-center">
              <h2 className="font-semibold text-lg ">Do you remember this ?</h2>
              <Button
                text="Flip"
                color="bg-blue-500 text-white hover:bg-blue-600"
                onClick={() => setFront(!front)}
              />
            </div>
            <h2 className="font-semibold text-3xl">
              {front ? cards![index].front ?? "" : cards![index].back ?? ""}
            </h2>
          </div>
          <div className="flex gap-2 justify-center items-center mt-10">
            <Button
              text="Easy"
              color="bg-green-500 text-white hover:bg-green-600"
              onClick={() => setNewCard(5, cards[index])}
            />
            <Button
              text="I Almost Missed"
              color="bg-yellow-400 text-white  hover:bg-yellow-500"
              onClick={() => setNewCard(2, cards[index])}
            />
            <Button
              text="I Missed"
              color="bg-red-500 text-white  hover:bg-red-600"
              onClick={() => setNewCard(0, cards[index])}
            />
          </div>
        </>
      )}
    </div>
  );
}
