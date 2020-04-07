import React from "react";
import { Form } from 'react-bootstrap';

const Input = ({type, label, place, name}) => {
  return (
    <Form.Group controlId="validationCustom01" className="bg-dark text-white rounded">
      <Form.Label className="p-1">{label}</Form.Label>
      <Form.Control
        required
        type={type}
        placeholder={place}
        name={name}
        minLength={type === "password" ? 8 : type === "text" ? 3 : 0}
      />
    </Form.Group>
  );
};

export default Input;
