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
export const CommentUserInfo = styled.div`
  display: flex;
  background: white;
  margin-bottom: 10px;
`

export const CommentAvatarWrapper = styled.div`
  margin-right:20px;
  background: #fff
`

export const CommentAvatar = styled.img`
  width:50px;
  height:50px;
  border-radius: 9999px;
`

export const CommentAuthorNameJob = styled.div`
  background: #fff
`;

export const CommentAuthorName = styled.h2`
  font-size: 24px;
  background: #fff;
  @media screen and (max-width: 450px){
    font-size: 22px
  }
`

export const CommentAuthorJob = styled.p`
  font-size:18px;
  background: #fff;
  color:gray;
  @media screen and (max-width: 450px){
    font-size: 16px
  }
`

export const CommentBody = styled.div`
  font-size: 16px;
  margin-bottom: 10px;
  background: #fff;
`

export const CommentCreatedAt = styled.div`
  background: #fff; 
  color:lightgray;
  font-size: 14px;
  @media screen and (max-width: 450px){
    font-size: 12px
  }
`