import styled from "styled-components";

export const User = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border: 1px solid grey;
  box-shadow: 8px 10px 20px #070607;
  width: 65vh;
  height: 60vh;

  font-size: 2rem;
  color: white;
  form {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-bottom: 2rem;
    button {
      flex-direction: row;
    }
  }
  input {
    margin: 0.5rem 0rem 2rem 0rem;
    border-radius: 2rem;
    font-family: "Times New Roman", Times, serif;
    font-size: 1rem;
    padding: 5px;
    background: none;
    border: 1px solid grey;
    color: white;
  }
  @media screen and (max-width: 500px) {
    height: 28rem;
    margin-top: 1rem;
    width: 24rem;
  }
`;

export const Buttons = styled.div`
  display: flex;
  button {
    margin: 5px;
    border-radius: 1rem;
    border: 1px solid grey;
    background: transparent;
    color: white;
    height: 2rem;
    width: 7rem;
  }
`;

export const Title = styled.div`
  background: linear-gradient(45deg, #082a33, #b7687e);
  width: 100%;
  color: #ffffff;
  text-align: center;
  font-size: 1.4rem;
  height: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  margin: 1rem 0rem 2rem;
`;
