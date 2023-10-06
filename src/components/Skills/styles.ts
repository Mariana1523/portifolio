import styled from "styled-components";

export const Container = styled.div`
  display: flex;

  align-items: center;
  gap: 50px;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  width: 100%;
  height: 700px;
  background-color: #fa8072;
`;

export const ContainerColumn = styled.div`
  gap: 50px;
  flex-direction: row;
  display: flex;
`;

export const Title = styled.div`
  margin-top: 50px;
  font-family: "Quicksand", sans-serif;
  font-size: 3rem;
  color: black;
  text-align: center;
  color: white;
`;
