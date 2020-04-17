import React from "react";
import Product from "../Product";

const ListProduct = ({ data}) => {
  return data.map(product => (
    <li className="list-group-item w-75 bg-danger d-flex m-auto" key={product.id}>
      <Product
        id={product.id}
        name={product.name}
        description={product.description}
        quantity={product.quantity}
        type={product.type}
      />
    </li>
  ));
};

export default ListProduct;
