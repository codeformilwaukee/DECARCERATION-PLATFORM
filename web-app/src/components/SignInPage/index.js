import React, { useState } from "react";
import { Auth } from "aws-amplify";
import Button from "@material-ui/core/Button"
import TextField from '@material-ui/core/TextField'


export default function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  async function handleSubmit(event) {
    event.preventDefault();
  
    try {
      await Auth.signIn(email, password);
      alert("Logged in");
    } catch (e) {
      alert(e.message);
    }
  }

  return (
    <div className="Login main" align='center'>

        <form onSubmit={handleSubmit}>
          <div>
            <TextField
              id="email"
              onChange={e => setEmail(e.target.value)}
              label="Email"
              margin="normal"
            />
          </div>
          <div>
            <TextField
              id="pass"
              onChange={e => setPassword(e.target.value)}
              label="Password"
              margin="normal"
              type="password"
            />
          </div>
          <div>
            <Button block bsSize="large" disabled={!validateForm()} type="submit" variant='contained'>
              Login
            </Button>
          </div>
        </form>
    </div>
  );
}