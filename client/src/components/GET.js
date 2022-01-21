import React, { useState } from "react";
import axios from "axios";

const GET = () => {
  const [details, setDetails] = useState([]);

  const getRequestHandler = async () => {
    const response = await axios.get("http://localhost:5000/user/");
    setDetails(response.data.details);
  };

  return (
    <div>
      <h1>Click the button to get all users!</h1>
      <button onClick={getRequestHandler}>GET</button>
      {details.map((value) => {
        return (
          <div>
            <h3 key={value.id}>
              Name: {value.firstName} | E-mail: {value.email}
            </h3>
          </div>
        );
      })}
    </div>
  );
};

export default GET;
