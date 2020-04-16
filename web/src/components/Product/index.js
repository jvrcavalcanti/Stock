import React, { useState } from "react";
import { connect } from "react-redux";

import "./style.scss";
import api from "../../services/api";
import Input from '../Input';

const Product = ({id, name, description, quantity, type, token}) => {
  const [quantityState, setQuantity] = useState(quantity);
  const [incrementQuanity, setIncrementQuantity] = useState(1);

  async function increment(quantityI = 1) {
    if(quantityI > 99999) {
      alert("Choose a smaller quantity");
      return;
    }

    const response = await api.patch("/product/increment", {
      token,
      id,
      quantity: quantityI
    });

    const data = response.data;

    if(data.status !== 200) {
      alert("Increment failed");
      return;
    }

    setQuantity(parseInt(quantityState) + parseInt(quantityI));
  }

  async function reduce(quantityI = 1) {
    const quant = parseInt(quantityState) - parseInt(quantityI);

    if(quant < 0) {
      alert("Product quantity cannot be less than 0");
      return;
    }

    if(quantityI > 99999) {
      alert("Choose a smaller quantity");
      return;
    }

    const response = await api.patch("/product/reduce", {
      token,
      id,
      quantity: quantityI
    });

    const data = response.data;

    if(data.status !== 200) {
      alert("Reduce failed");
      return;
    }

    setQuantity(parseInt(quantityState) - parseInt(quantityI));
  }

  function handleChange({ target }) {
    const value = target.value;

    setIncrementQuantity(value);
  }


  return (
    <div
      className="product text-center w-100 border border-dark rounded p-2"
    >
      <h3>{name}</h3>
      <p>{description}</p>
      <label>{quantityState} {quantityState > 1 ? type + "s" : type}</label>
      <br/>
      <Input 
        type="number"
        label="Increment Quantity"
        place="Increment Quantity"
        onChange={handleChange}
        value={incrementQuanity}
      />
      <div className="d-inline">
        <button className="btn btn-success" onClick={() => increment(incrementQuanity)}>&#43;</button>
        <button className="btn btn-danger" onClick={() => reduce(incrementQuanity)}>&#45;</button>
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  token: state.token
});

export default connect(
  mapStateToProps
)(Product);
