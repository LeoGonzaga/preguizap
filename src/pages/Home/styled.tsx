import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  background-color: #04bf68;
  justify-content: center;
  align-items: center;
`;

export const Form = styled.form`
  background-color: #fff;
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
  border-radius: 9px;
  @media (max-width: 300px) {
    padding: 15px;
  }
`;

export const Input = styled.input`
  height: 46px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin: 0px;
  margin-bottom: 10px;
  outline: none;
  padding: 0px 10px;

  &:focus {
    border: 1px solid #04bf68;
  }
`;
export const InputArea = styled.textarea`
  height: 46px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin: 0px;
  margin-bottom: 10px;
  outline: none;
  padding: 10px;

  &:focus {
    border: 1px solid #04bf68;
  }
`;

export const Button = styled.button`
  height: 46px;
  margin-top: 10px;
  background-color: #03a65a;
  border: 1px solid #03a65a;
  border-radius: 5px;
  color: #fff;

  &:hover {
    background-color: #01B170;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
export const WhatsLogo = styled.img`
  width: 140px;
  margin: 0px;
  padding: 0px;
`;

export const Title = styled.h2`
  font-weight: bold;
  margin: 0px;
  padding: 0px;
  margin-bottom: 20px;
  color: #04bf68;
`;
