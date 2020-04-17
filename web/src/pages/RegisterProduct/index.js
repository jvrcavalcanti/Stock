import React, { useState } from "react";
import { Form, Button } from 'react-bootstrap';
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

import Input from "../../components/Input";
import api from "../../services/api";

const RegisterProduct = ({ token }) => {
  const history = useHistory();
  const [validated, setValidated] = useState(false);

  async function handleSubmit(event) {
    const form = event.currentTarget;
    event.preventDefault();

    if (form.checkValidity() === false) {
      event.stopPropagation();
    }

    const formData = new FormData(form);

    const res = await api.post("/product/new", {
      name: formData.get("name"),
      description: formData.get("description"),
      quantity: formData.get("quantity"),
      type: formData.get("type"),
      token
    });

    const data = res.data;

    if (data.status !== 201) {
      alert("Register Failed");
      return;
    }

    alert("Register successful");
    history.push("/");

    setValidated(true);
  }


  return (
    <main className="w-50 m-auto border border-dark rounded p-4 bg-secondary">
      <h1 className="text-center">Register new product</h1>

      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Input type="text" label="Product Name" place="Product Name" name="name" />
        <Input type="text" label="Description" place="Description" name="description" />
        <Input type="number" label="Quantity" place="Quantity" name="quantity" />
        <Input type="text" label="Type" place="Example: unit" name="type" />

        <div className="text-center">
          <Button type="submit" variant="danger">Register</Button>
        </div>
      </Form>
    </main>
  );
};

const mapStateToProps = state => ({
  token: state.token
});

export default connect(
  mapStateToProps
)(RegisterProduct);
