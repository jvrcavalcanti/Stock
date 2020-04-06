import React from "react";
import { Form, Button } from "react-bootstrap";

import Api from "../../services/api.js";

const Home = () => {
  async function handleSubmit(event) {
    event.preventDefault();

    const form = new FormData(event.target);

    const response = await Api.post("/auth/login", {
      username: form.get("user"),
      password: form.get("password")
    });

    console.log(response);
  }

  return (
    <main className="text-center">
      <div className="w-50 m-auto">
        <Form className="mt-5 p-3 border border-dark rounded bg-secondary" onSubmit={handleSubmit}>
          <h2>Login</h2>

          <Form.Group>
            <Form.Control type="text" placeholder="User name" name="user" />
          </Form.Group>

          <Form.Group>
            <Form.Control type="password" placeholder="Password" name="password" />
          </Form.Group>

          <Button variant="danger" type="submit">
            Sign in
          </Button>
        </Form>
      </div>
    </main>
  );
}

export default Home;