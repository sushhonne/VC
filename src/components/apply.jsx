import { useState } from "react";
import '../styles/apply.css'

const Apply = () => {
  let [name, setName] = useState("");
  let [mob_number, setNumber] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [confirmPassword, setPassword2] = useState("");


  let handleSubmit=(e)=>{
    e.preventDefault()
  }


  return (
    <div className="apply">
      <div className="signUp_form">
        <form action="" className="signUp" onSubmit={handleSubmit}>
          <div className="name">
            <input
              type="text"
              className="form-control"
              placeholder="Enter name..."
              name="name"
              onChange={(e)=>{setName(e.target.value)}} value={name}
            />
          </div>
          <div className="name">
            <input
              type="tel"
              maxLength="10"
              minLength="10"
              className="form-control"
              placeholder="Enter number.."
              name="mob_number"
              onChange={(e)=>{setNumber(e.target.value)}} value={mob_number}
            />
          </div>
          <div className="name">
            <input
              type="email"
              className="form-control"
              placeholder="Enter email.."
              name="email"
              onChange={(e)=>{setEmail(e.target.value)}} value={email}
            />
          </div>
          <div className="name">
            <input
              type="password"
              className="form-control"
              placeholder="Enter password.."
              name="password"
              onChange={(e)=>{setPassword(e.target.value)}} value={password}
            />
          </div>
          <div className="name">
            <input
              type="password"
              className="form-control"
              placeholder="Confirm password.."
              name="confirmPassword"
              onChange={(e)=>{setPassword2(e.target.value)}} value={confirmPassword}
            />
          </div>
          <div className="btn">
            <button className="button_apply">Sign Up</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Apply;
