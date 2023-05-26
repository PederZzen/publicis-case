import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  gap: 3rem;

  @media screen and (max-width: 1200px) {
    flex-direction: column;
  }
`;
