import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  z-index: 2;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  width: 100%;
  height: 500px;
  background-color: #add8e6;
`;

export const ContainerCircle = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  height: 500px;
  background-color: #add8e6;
`;

export const TextContainer = styled.div`
  display: flex;
  width: 80%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 20px;
`;

export const Title = styled.div`
  font-family: "Quicksand", sans-serif;
  font-size: 2rem;
  color: black;
  text-align: center;
`;

export const Description = styled.div`
  font-family: "Amatic SC", sans-serif;
  font-size: 3rem;
  color: black;
  max-width: 600px;
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  margin-right: -350px;
`;

export const CircleStyle = styled.svg`
  width: 400px;
  height: 400px;
`;
export const ContactButton = styled.button`
  font-family: "Quicksand", sans-serif;
  font-size: 30px;
  color: white;
  background-color: #fa8072;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-bottom: -50px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #e85a4f;
  }
`;
