import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
const Register = () => {
  const initialState = {
    username: '',
    email: '',
    password: '',
  }
  const [value, setValue] = useState(initialState)
  const [user, isLoading] = useSelector((store) => store.user)
  const dispatch = useDispatch()
  const handleChange = (e) => {
    console.log(e.target)
    setValue({ ...value, [e.target.name]: e.target.value })
  }

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(e.target)
  }

  return (
    <React.Fragment>
      <form onSubmit={onSubmit}>
        <input type="text" name="username" value={value.username} onChange={handleChange} />
        <input type="password" name="password" value={value.password} onChange={handleChange} />
        <button type="submit">Login</button>
      </form>
    </React.Fragment>
  )
}

export default Register