import React from "react";
import { Form } from 'react-bootstrap';

const Input = ({type, label, place, name, onChange, value}) => {
  return (
    <Form.Group className="bg-dark text-white rounded">
      <Form.Label className="p-1">{label}</Form.Label>
      <Form.Control
        required
        type={type}
        placeholder={place}
        name={name}
        minLength={type === "password" || type === "number" ? 8 : type === "text" ? 3 : 0}
        onChange={onChange}
        value={value}
      />
    </Form.Group>
  );
};

export default Input;
