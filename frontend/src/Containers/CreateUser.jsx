import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreateUser = () => {
  const [Name, setName] = useState();
  const [Email, setEmail] = useState();
  const [Age, setAge] = useState();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    axios
        .post("http://localhost:3001/createuser", { Name, Email, Age })
        .then(() => navigate("/", { replace: true }));
};
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="Name"
          id=""
          placeholder="Provide your name"
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <input
          type="email"
          name="Email"
          id=""
          placeholder="Provide your Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <input
          type="number"
          name="Age"
          id=""
          placeholder="Provide your Age"
          onChange={(e) => setAge(e.target.value)}
        />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default CreateUser;
