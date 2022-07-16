import styled from "styled-components";

export const FormInput = styled.input`
  width: 200px;
  height: 30px;
  border-radius: 20px;
  margin-top: 20px;
  margin-bottom: 10px;
  background-color: white;
  padding-left: 10px;
  ::placeholder{
    color: black;
    font-weight: 600;
  }
`

export const FormButton = styled.button`
  margin-bottom: 10px;
  width: 150px;
  font-size: 16px;
  font-weight: 600;
  background: white;
  border-radius: 10px;
`