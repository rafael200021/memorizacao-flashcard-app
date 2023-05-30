import Button from "components/Button";
import Card from "components/Card";
import InputText from "components/InputText";
import ModalCardGroup from "components/ModalCardGroup";
import axiosConfig from "Helpers/axios";
import IGroups from "Intefaces/IGroups";
import React, { useEffect, useState } from "react";

export default function Group() {
  const [groups, setGroups] = useState<IGroups[] | undefined>([]);
  const [groupsData, setGroupsData] = useState<IGroups[] | undefined>([]);
  const [search,setSearch] = useState("");

  useEffect(() => {
    const id = localStorage.getItem("id");

    axiosConfig.get(`/users/${id}/groups`).then((res) => {
      setGroups(res.data);
      setGroupsData(res.data);
    });
  }, []);

  const searchGroups = () => {

    setGroupsData(groups?.filter((group)=> group.name.toLowerCase().includes(search.toLowerCase())));

    setSearch("");
  }

  return (
    <div>
      {groups?.length !== 0 ? (
        <div className="p-10">
          <div className="mb-10 flex  gap-2">
            <InputText
              funcao={setSearch}
              tipo="text"
              valor={search}
              placeholder="Search"
            />
            <Button color="bg-blue-500 text-white font-bold hover:bg-blue-700" onClick={searchGroups} text="Search"/>
          </div>
          <div className="flex justify-between">
            <h1 className="mb-10 font-semibold text-2xl">Groups</h1>
            <a href="#modal-card-group" className="btn">
              Create New Group
            </a>
          </div>
          <div className="flex gap-4 ">
            {groupsData?.map((card) => (
              <Card {...card} />
            ))}
          </div>
        </div>
      ) : (
        <div
          className="flex flex-col gap-5 justify-center items-center"
          style={{ minHeight: "80vh" }}
        >
          <h1 className="font-bold text-3xl">
            You don't found any card here ?
          </h1>
          <button className="btn bg-blue-500 border-white">Create one !</button>
        </div>
      )}
      <ModalCardGroup />
    </div>
  );
}
