import React from "react";
import Card from "./Card";

const MainSection = ({ todo, getAll }) => {
  return (
    <div>
      {todo.map((item) => (
        <div key={item._id}>
          <Card title={item.title} id={item._id} getAll={getAll}/>
        </div>
      ))}
    </div>
  );
};

export default MainSection;
