import styled from "styled-components";

export const FormInput = styled.input`
  width: 200px;
  height: 30px;
  border-radius: 20px;
  margin-top: 10px;
  margin-bottom: 10px;
  background-color: white;
  border: none;
  padding-left: 10px;
  &:focus{
    outline: none;
  }
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
  &:hover{
    background: black;
    color: white;
    cursor: pointer;
  }
  &:active{
    transform: scale(0.5);
    transition: all 2s ease-out;
  }
`

export const FormInvalid = styled.div`
  color: darkred;
  font-size: 14px;
  margin-top: 20px;
  padding-left: 30px;
  padding-right: 30px;
  text-align: center;
`