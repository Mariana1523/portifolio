import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 1200px;
  background-color: #add8e6;
`;

export const ContainerGreen = styled.div`
  margin-top: 150px;
  display: flex; /* Alteração: altera para display flex */
  justify-content: space-between;
  align-items: center; /* Alteração: alinha os itens no início */
  width: 100%;
  height: 250px;
  background-color: rgba(47, 79, 79, 0.75);
  margin-bottom: 100px;
`;

export const Title = styled.div`
  margin-top: 50px;
  font-family: "Quicksand", sans-serif;
  font-size: 3rem;
  color: black;
  text-align: center;
`;

export const ImageComputerContainer = styled.div`
  width: 50%;
`;

export const DescriptionContainer = styled.div`
  align-items: center;
  text-align: center;
  width: 100%;
`;
export const Description = styled.div`
  align-items: center;
  font-family: "Amatic SC", sans-serif;
  font-size: 2.5rem;
  color: white;
`;
