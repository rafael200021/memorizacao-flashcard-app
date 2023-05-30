import Button from "components/Button";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function EmptyCard() {
  const navigate = useNavigate();

  return (
    <div className="rounded border flex flex-col gap-2 w-full shadow-lg p-10">
      <h1 className="text-2xl font-bold">Ops !</h1>
      <h2 className="text-lg font-semibold">
        Looks like someone has already finished all the cards!
      </h2>
      <div className="flex mt-10 justify-center items-center">
        <Button
          color="bg-gray-800 hover:bg-gray-900 text-white"
          onClick={() => navigate(-1)}
          text="Back"
        />
      </div>
    </div>
  );
}
