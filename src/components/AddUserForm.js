import React, { useState } from "react";
//STYLE

import { User, Buttons, Title } from "../style";

const AddUserForm = ({ addUser }) => {
  const initialFormState = { id: null, name: "", username: "" };

  const [user, setUser] = useState(initialFormState);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
    console.log(user);
  };
  return (
    <User>
      <Title>
        <h3>Add user</h3>
      </Title>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          if (!user.name || !user.username) return;

          addUser(user);
          setUser(initialFormState);
        }}
      >
        <label>Name</label>
        <input
          onChange={handleInputChange}
          type="text"
          value={user.name}
          name="name"
        />
        <label>Username</label>
        <input
          type="text"
          name="username"
          value={user.username}
          onChange={handleInputChange}
        />
        <Buttons>
          <button id="button">Add new user</button>
        </Buttons>
      </form>
    </User>
  );
};

export default AddUserForm;
