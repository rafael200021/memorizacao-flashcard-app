import axiosConfig from "Helpers/axios";
import IGroups from "Intefaces/IGroups";
import { useState } from "react";

interface createGroupProps {
  setGroups: React.Dispatch<React.SetStateAction<IGroups[] | undefined>>,
  setGroupsData: React.Dispatch<React.SetStateAction<IGroups[] | undefined>>
}

export default function ModalCardGroup({ setGroups, setGroupsData }: createGroupProps) {
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [image, setImage] = useState<string>("");



  const createGroup = async () => {
    const id = localStorage.getItem("id");

    if (id !== null) {
      let data: IGroups = {
        name: name,
        description: description,
        created_by: Number(id),
        img_url: image,
        createdAt: new Date().toString(),
        updatedAt: new Date().toString(),
      };

      await axiosConfig.post(`users/${id}/groups`, data);

      setName("");
      setDescription("");
      setImage("");

      axiosConfig.get(`/users/${id}/groups`).then((res) => {
        setGroups(res.data);
        setGroupsData(res.data);
      });

    }
  };

  return (
    <div className="modal" id="modal-card-group">
      <div className="modal-box">
        <div className="flex justify-between  items-center">
          <h3 className="font-bold text-lg">Create Card Group</h3>
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
          <label>Name</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border rounded p-3"
          />
        </div>
        <div className="mt-5 flex gap-2 flex-col">
          <label>Description</label>
          <input
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="border rounded p-3"
          />
        </div>
        <div className="mt-5 flex gap-2 flex-col">
          <label>Image URL</label>
          <input
            value={image}
            onChange={(e) => setImage(e.target.value)}
            className="border rounded p-3"
          />
        </div>
        <div className="modal-action">
          <button onClick={createGroup} className="btn">
            Create
          </button>
        </div>
      </div>
    </div>
  );
}
