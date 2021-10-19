import React from "react";
//STYLED
import styled from "styled-components";

import editar from "../icons/editar.png";
import deleteuser from "../icons/deleteuser.png";

const UserTable = ({ users, deleteUser, editRow }) => {
  return (
    <UserST>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Username</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 ? (
            users.map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>
                  <img src={editar} onClick={() => editRow(user)} alt="edit" />
                  <img
                    src={deleteuser}
                    onClick={() => deleteUser(user.id)}
                    alt="delete"
                  />
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td>No users</td>
            </tr>
          )}
        </tbody>
      </table>
    </UserST>
  );
};

const UserST = styled.div`
  display: flex;
  flex-direction: column;
  background: #caccc1;
  width: 70vh;
  height: 60vh;
  margin: 5rem;
  background: linear-gradient(45deg, #082a33, #b7687e);
  box-shadow: 8px 10px 20px #070607, -8px 20px 30px #2d142c8d;
  overflow: scroll;
  ::-webkit-scrollbar {
    width: 0.3rem;
    overflow: hidden;
    margin: 1rem;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #112e37;
    border-radius: 10px;
  }
  tr {
    background: #082a33;
    margin: 1rem;
    display: grid;
    grid-template-columns: repeat(3, 8rem);
    justify-content: center;
    text-align: center;
    border-radius: 20rem;
    color: white;
    border: 1px solid white;
    th {
      margin: 1rem;
    }
    td {
      margin: 0.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
  img {
    width: 25px;
    margin-left: 5px;
    cursor: pointer;
  }

  @media screen and (max-width: 500px) {
    width: 28rem;
    margin-top: 2rem;
  }
`;

export default UserTable;
