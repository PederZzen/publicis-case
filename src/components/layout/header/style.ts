import styled from "styled-components";
import { Colors } from "../../../utils/constants";

export const Wrapper = styled.div`
  width: 15rem;
  z-index: 2;

  div {
    display: flex;
    flex-direction: column;
    padding: 1.5rem;
    background-color: ${Colors.main};
    height: 100vh;
    position: fixed;
    width: 15rem;

    * {
      margin-top: 1rem;
      color: white;
      text-decoration: none;
      font-weight: 500;
      font-size: 1.2rem;
      transition: all 0.3s;

      &:hover {
        color: ${Colors.contrast};
      }
    }
  }
`;
