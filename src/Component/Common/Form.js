import React from "react";
import { useNavigate } from "react-router-dom";
import { BasicButton, RouteButton } from "./Button";

// d-flex align-items-center justify-content-center" style="min-height: 100vh;"

const Form = ({ title, setEmail, setPassword, handleAction }) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    console.log("clicked");
    title === "Login" ? navigate("/register") : navigate("/login");
  };

  return (
    <>
    
    <div className="d-flex align-items-center justify-content-center" style={{height: '50vh'}}>
      <div className="border border-2 p-5">
      <h3>{title} Form</h3>
        <div className="d-flex justify-content-center align-items-center">
          <div className="mb-3 m-1">
            <input
              id="email"
              type="email"
              className="form-control text-center"
              placeholder="Enter Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3 m-1">
            <input
              id="password"
              type="password"
              className="form-control text-center"
              placeholder="Enter Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>

        <BasicButton title={title} handleAction={handleAction} />
        <hr class="solid"></hr>
        <h5 className="mt-2">
          {title === "Login" ? "New User " : "Existing User "}
          <RouteButton title="Click Here" handleNavigate={handleNavigate} />
          {/* <button
            title="Click Here"
            onClick={handleNavigate}
            type="button"
            className="btn btn-light"
          >
            Click Here
          </button> */}
        </h5>
      </div>
    </div>
    </>
  );
};

export default Form;
