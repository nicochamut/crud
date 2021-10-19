import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { User, Buttons, Title } from "../style";

const EditUserForm = (props) => {
  const [user, setUser] = useState(props.currentUser);

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setUser({ ...user, [name]: value });
  };

  useEffect(() => {
    setUser(props.currentUser);
  }, [props]);
  return (
    <EditUser>
      <TitleStyl>
        <h3>Edit user</h3>
      </TitleStyl>
      <form
        onSubmit={(event) => {
          event.preventDefault();

          props.updateUser(user.id, user);
        }}
      >
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={user.name}
          onChange={handleInputChange}
        />
        <label>Username</label>
        <input
          type="text"
          name="username"
          value={user.username}
          onChange={handleInputChange}
        />
        <Buttons>
          <button>Update user</button>
          <button
            onClick={() => props.setEditing(false)}
            className="button muted-button"
          >
            Cancel
          </button>
        </Buttons>
      </form>
    </EditUser>
  );
};

const EditUser = styled(User)`
  background: #caccc1;
  color: black;
  @media screen and (max-width: 500px) {
    height: 28rem;
  }
`;
const TitleStyl = styled(Title)`
  background: linear-gradient(45deg, #082a33, #b7687e);
`;
export default EditUserForm;
