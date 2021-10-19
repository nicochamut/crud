import styled from "styled-components";

export const User = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: linear-gradient(45deg, #082a33, #b7687e);
  box-shadow: 8px 10px 20px #070607, -8px 20px 30px #2d142c8d;
  width: 65vh;
  height: 60vh;
  margin: 5rem;
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
  }
  @media screen and (max-width: 500px) {
    width: 28rem;
    margin: 1rem;
    height: 28rem;
    margin-top: 1rem;
  }
`;

export const Buttons = styled.div`
  display: flex;
  button {
    margin: 5px;
    border-radius: 1rem;
    background: #082a33;
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
