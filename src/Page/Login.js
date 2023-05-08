import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function Login() {
  const fields = [
    {
      label: "Email Address",
      controlId: "formBasicEmail",
      type: "email",
      placeholder: "Enter email",
    },
    {
      label: "Password",
      controlId: "formBasicPassword",
      type: "password",
      placeholder: "Enter password",
    },
  ];

  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="Auth-form-container">
      <Form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign In</h3>
          {fields.map((field) => {
            return (
              <Form.Group
                key={field.controlId}
                className="form-group mt-3"
                controlId={field.controlId}
              >
                <Form.Label>{field.label}</Form.Label>
                <Form.Control
                  className="form-control mt-1"
                  type={field.type}
                  placeholder={field.placeholder}
                  onChange={(e) => {
                    if (field.type === "email") {
                      setEmailAddress(e.target.value);
                    } else {
                      setPassword(e.target.value);
                    }
                  }}
                />
              </Form.Group>
            );
          })}
          <div className="d-grid gap-2 mt-3">
            <Button
              type="submit"
              className="btn btn-primary"
              onClick={(e) => e.preventDefault()}
            >
              Submit
            </Button>
          </div>
          <center>
            <p className="forgot-password text-right mt-2">
              Forgot <a href="#">password?</a>
            </p>
          </center>
          <p>Email: {emailAddress}</p>
          <p>Password: {password}</p>
        </div>
      </Form>
    </div>
  );
}

export default Login;
