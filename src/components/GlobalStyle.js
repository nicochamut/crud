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
    background: #1a1a1a;
    flex-direction: column;
    
}
`;
