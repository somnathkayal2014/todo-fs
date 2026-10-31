import React, { useState } from "react";
import DeleteModal from "./DeleteModal";

const Card = ({ title, id, getAll }) => {
  const [delModal, setDelModal] = useState(false);

  function handleDelete(id) {
    setDelModal(true);
    console.log(id);
  }

  return (
    <div className="flex justify-center gap-2">
      <div className="w-64 p-2 bg-gray-200 rounded mt-2">{title}</div>
      <button className=" p-2 bg-green-400 text-white rounded mt-2">
        Edit
      </button>
      <button
        className=" p-2 bg-red-400 rounded text-white mt-2"
        onClick={() => handleDelete(id)}
      >
        Delete
      </button>
      {delModal && (
        <DeleteModal setDelModal={setDelModal} id={id} getAll={getAll} />
      )}
    </div>
  );
};

export default Card;
