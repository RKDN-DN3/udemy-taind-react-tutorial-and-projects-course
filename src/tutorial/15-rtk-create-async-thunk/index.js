import React from "react";
import { useState } from "react";
const Register = () => {
  const initialState = {
    username: '',
    email: '',
    password: '',
  }
  const [value, setValue] = useState(initialState)

  const handleChange= (e) => {
    console.log(e.target)
  }

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(e.target)
  }

  return (
    <React.Fragment>
      <form onSubmit={onSubmit}>
        <input type="text" name="username" />
        <input type="password" name="password" />
        <button type="submit">Login</button>
      </form>
    </React.Fragment>
  )
}

export default Register