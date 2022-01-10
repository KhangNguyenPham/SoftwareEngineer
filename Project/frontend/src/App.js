import React from "react"
import { Switch, Route, Link } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import LoginForm from "./Components/Login/LoginForm.js"
import SignupForm from "./Components/Login/SignupForm.js"

function App(props) {
  if (props.page == "login") {
    return (
      <div className="App">
        <LoginForm socialMediaLink="" loginImage="../public/log.svg" />
      </div>
    )
  } else {
    return (
      <div className="App">
        <SignupForm socialMediaLink="" registerImage="../public/register.svg" />
      </div>
    )
  }
}

export default App;
