import React from "react";
import { Form, Button } from "react-bootstrap";

import api from "../../services/api";
import { connect } from "react-redux";

async function handleSubmit(event, dispatch) {
  event.preventDefault();

  const form = new FormData(event.target);

  // const res = await fetch(api.baseURL + "/auth/login", {
  //   method: "POST",
  //   body: JSON.stringify({
  //     username: form.get("user"),
  //     password: form.get("password")
  //   })
  // })

  const res = await api.post("/auth/login", {
    username: form.get("user"),
    password: form.get("password")
  });

  const data = await res.data;

  if(data.status === 200) {
    alert("Login successful");
    dispatch({
      type: "LOGIN",
      token: data.token,
      user: data.user
    });
  }

  if(data.status !== 200) {
    alert(data.message);
  }
}

const Login = ({ dispatch }) => {
  return (
    <main className="text-center">
      <div className="w-50 m-auto">
        <Form className="mt-5 p-3 border border-dark rounded bg-secondary" onSubmit={e => handleSubmit(e, dispatch)}>
          <h2>Login</h2>

          <Form.Group>
            <Form.Control type="text" placeholder="User name" name="user" required />
          </Form.Group>

          <Form.Group>
            <Form.Control type="password" minLength="8" placeholder="Password" name="password" required />
          </Form.Group>

          <Button variant="danger" type="submit">
            Sign in
          </Button>
        </Form>
      </div>
    </main>
  );
}

const mapStateToProps = state => ({
  state
});

export default connect(
  mapStateToProps
)(Login);