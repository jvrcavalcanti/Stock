import React, { useState } from "react";
import { Form, Button } from 'react-bootstrap';
import { useHistory } from "react-router-dom";

import Input from '../../components/Input';
import api from "../../services/api";


const Register = () => {
  const [validated, setValidated] = useState(false);
  const history = useHistory();

  async function handleSubmit (event) {
    const form = event.currentTarget;
    event.preventDefault();

    if (form.checkValidity() === false) {
      event.stopPropagation();
    }

    const formData = new FormData(form);

    if (formData.get("password") !== formData.get("confirm")) {
      event.stopPropagation();
      alert("Password and Confirm must be equal");
    }

    const res = await api.post("/auth/register", {
      username: formData.get("name"),
      email: formData.get("email"),
      password: formData.get("password")
    });

    const data = await res.data;
    
    if (data.status === 201) {
      alert("Register successful");
      history.push("/");
    }

    setValidated(true);
  }

  return (
    <main className="w-50 m-auto border border-dark rounded p-4 bg-secondary">
      <h1 className="text-center">Register new user</h1>

      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Input type="text" label="User Name" place="User Name" name="name" />
        <Input type="email" label="E-mail" place="E-mail" name="email" />
        <Input type="password" label="Password" place="Password" name="password" />
        <Input type="password" label="Confirm" place="Confirm" name="confirm" />

        <div className="text-center">
          <Button type="submit" variant="danger">Register</Button>
        </div>
      </Form>
    </main>
  );
};

export default Register;
