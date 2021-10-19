import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
html, body{
 padding: 0;
 margin: 0;
}
body{
    display:flex;
    align-items: center;
    justify-content: center;
    font-family: 'Montserrat', sans-serif;
    background: #2b2b2b;
    flex-direction: column;
    //MEDIAQUERY
    @media screen and (max-width: 500px) {
       background: #5e5b5b;
    }
}
`;
