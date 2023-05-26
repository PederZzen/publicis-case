import { createGlobalStyle } from "styled-components";
import { colors } from "./utils/constants";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Montserrat', sans-serif;
    }

    h1 {
        margin: 2rem 0;
    }

    .button {
        background-color: ${colors.accent};
        border: none;
        padding: 0.5rem;
        margin-bottom: 1rem;
        color: white;
        font-weight: 500;
        border-radius: 5px;
        cursor: pointer;
        transition: all .3s;

        &:hover {
            filter: brightness(120%);
        }
    }
`;
