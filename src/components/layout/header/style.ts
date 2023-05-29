import styled from "styled-components";
import { colors } from "../../../utils/constants";

export const Wrapper = styled.div`
  width: 10rem;
  z-index: 2;

  .menu {
    padding: 1.5rem;
    background-color: ${colors.main};
    height: 100vh;
    position: fixed;
    width: 10rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    div {
      display: flex;
      flex-direction: column;
    }
    * {
      margin-top: 1rem;
      color: white;
      text-decoration: none;
      font-weight: 500;
      font-size: 1.2rem;
      transition: all 0.3s;
      cursor: pointer;

      &:hover {
        color: ${colors.contrast};
      }
    }

    .logOut {
      color: ${colors.contrast};
      font-size: 1rem;
    }
  }

  .menuIcon {
    position: absolute;
    right: -3rem;
    top: -1rem;
    background-color: ${colors.main};
    height: 3.5rem;
    border-radius: 0.5rem 0 0 0;
    transform: rotate(180deg);

    svg {
      width: 3.5rem;
      height: 1.5rem;
    }
  }

  @media screen and (max-width: 1200px) {
    .menu {
      transform: translateX(-100%);
      transition: all 0.3s;

      button {
        position: absolute;
        right: -5rem;
      }
    }
  }
`;
