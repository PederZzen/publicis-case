import styled, { createGlobalStyle } from "styled-components";
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

    .flex-row-space {
        display: flex;
        justify-content: space-between;
    }
`;

export const PageWrapper = styled.div`
  margin: 0 0.5rem;
  padding-top: 1rem;

  img {
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    object-fit: cover;
  }
`;

export const Search = styled.input`
  padding: 0.5rem;
  margin-bottom: 1rem;
  border-radius: 2rem;
  outline: none;
  border: 1px solid gray;
  background-color: #fafafa;
  transition: all 0.3s;

  &:focus {
    box-shadow: 0 0 10px -5px black;
  }
`;
