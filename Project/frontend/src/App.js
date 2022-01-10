import React from "react"
import { Switch, Route, Link } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import LoginForm from "./Components/Login/LoginForm.js"
import SignupForm from "./Components/Login/SignupForm.js"

function App(props) {
  if (props.page == "login") {
    return (
      <div className="App">
        <LoginForm />
      </div>
    )
  } else {
    return (
      <div className="App">
        <SignupForm />
      </div>
    )
  }
}

export default App;
