import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html, body, #root {
        height: 100%;
    }

    *, button, input {
        border: none;
        outline: none;
        font-family: 'Open Sans', sans-serif;
    }

    button {
        cursor: pointer;
    }
`;