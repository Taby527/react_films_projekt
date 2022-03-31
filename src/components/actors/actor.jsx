import React from "react";

const Actor = ({ name, as }) => {
  return (
    <div className="actors">
      <p className="actors_name">{name} </p>
      <p className="actors_as">as {as} </p>
    </div>
  );
};

export default Actor;
