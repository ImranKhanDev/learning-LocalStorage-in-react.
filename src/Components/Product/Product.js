import React from "react";
import { addToDatabase, deleteFromDb } from "../../Utilities/fakedb";

const Product = (props) => {
  // console.log(props);
  const { id, name, born } = props.product;
  const handleClick = (id) => {
    console.log(`these are all id `, id);
    addToDatabase(id);
  };
  const handleRemove = (id) => {
    deleteFromDb(id);
  };
  return (
    <div>
      <h1>_id : {id}</h1>
      <h1>Name : {name}</h1>
      <h3>Born {born}</h3>
      <button onClick={() => handleClick(id)}>See more</button>

      <button onClick={() => handleRemove(id)}>Remove Details</button>
    </div>
  );
};

export default Product;
