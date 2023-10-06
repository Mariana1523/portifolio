import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  height: 1000px;
  background-color: #fa8072;
`;

export const ContainerImages = styled.div`
  display: flex;
  justify-content: center;
  gap: 200px;
  align-items: center;
  text-align: center;
  width: 100%;
  height: 1000px;
  background-color: #fa8072;
`;

export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Caption = styled.div`
  font-family: "Amatic SC", sans-serif;
  font-size: 36px;
  color: white;
  margin-top: 10px;
`;

export const Title = styled.div`
  margin-top: 50px;
  font-family: "Quicksand", sans-serif;
  font-size: 3rem;
  color: black;
  text-align: center;
  color: white;
`;
