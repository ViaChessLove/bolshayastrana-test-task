import styled from "styled-components";

export const Comment = styled.li`
  height: 100%;
  max-width: 1400px;
  width: 95%;
  background: white;
  color: black;
  margin-right: 20px;
  margin-left: 20px;
  margin-bottom: 10px;
  border-radius: 10px;
  @media screen and (max-width: 768px){
    max-width: 768px;

  }
`

export const CommentContent = styled.div`
  margin: 10px 20px;
  background-color: white;
`

export const CommentAvatar = styled.img`
  width:50px;
  height:50px;
  border-radius: 9999px;
`;

export const CommentBody = styled.div`
  font-size: 16px;
  background: #fff;
`

export const CommentCreatedAt = styled.div`
  background: #fff; 
  color:lightgray;
`