import React, { useState } from "react";
import axios from "axios";

const POST = () => {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [message, setMessage] = useState(false);

  const postRequestHandler = async () => {
    const data = { firstName, email, password };
    const response = await axios.post(
      "http://localhost:5000/user/create-user",
      data,
    );
    setMessage(true);
  };

  return (
    <div>
      <input
        type="text"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        placeholder="First Name"
      />
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="E-mail"
      />
      <input
        type="text"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button onClick={postRequestHandler}>Insert</button>
      {message ? (
        <h1 style={{ color: "green" }}>Data inserted successfully!</h1>
      ) : (
        ""
      )}
    </div>
  );
};

export default POST;
