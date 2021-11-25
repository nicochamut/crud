import React, { useState } from "react";

//STYLED
import styled from "styled-components";
//COMPONENTS
import UserTable from "../components/UserTable";
import EditUserForm from "../components/EditUserForm";
//ID
import { v4 as uuidv4 } from "uuid";
import AddUserForm from "../components/AddUserForm";

const Home = () => {
  //STATE
  const [users, setUsers] = useState([]);

  const [editing, setEditing] = useState(false);

  const initialFormState = { id: null, name: "", username: "" };

  const [currentUser, setCurrentUser] = useState(initialFormState);
  //ADD USER
  const addUser = (user) => {
    user.id = uuidv4();
    setUsers([...users, user]);
  };

  //EDIT USER
  const editRow = (user) => {
    setEditing(true);
    setCurrentUser({ id: user.id, name: user.name, username: user.username });
  };

  const updateUser = (id, updatedUser) => {
    setEditing(false);

    setUsers(users.map((user) => (user.id === id ? updatedUser : user)));
  };

  //DELETE USER
  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
    setEditing(false);
  };

  return (
    <HomeStyl>
      {editing ? (
        <div>
          <EditUserForm
            setEditing={setEditing}
            currentUser={currentUser}
            updateUser={updateUser}
          />
        </div>
      ) : (
        <div>
          <AddUserForm addUser={addUser} />
        </div>
      )}
      <UserTable users={users} deleteUser={deleteUser} editRow={editRow} />
    </HomeStyl>
  );
};

const HomeStyl = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  @media screen and (max-width: 1000px) {
    flex-direction: column;
  }
  @media screen and (max-width: 500px) {
    flex-direction: column;
    margin: 0px;
  }
`;

export default Home;
