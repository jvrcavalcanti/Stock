import React from "react";
import { Link } from "react-router-dom";
import { Alert } from 'react-bootstrap';

const Notfound = () => {
  return (
    <main className="container text-center">
      <Alert variant="danger">
        <h1>Error: 404</h1>
        Page not found
        <br/>
        <Link to="/" className="alert alert-link">
          Click me for go to home
        </Link>
      </Alert>
    </main>
  );
};

export default Notfound;
