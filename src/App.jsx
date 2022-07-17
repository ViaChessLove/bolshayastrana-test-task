import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import CommentList from './components/commentList/CommentList';
import { FormButton, FormInput, FormInvalid } from './components/form/Form.style';
import Pagination from './components/pagination/Pagination';
import { Comments } from './Context';
import { user } from './data/user';
import { GlobalStyle } from './globalStyles';

const isValid = (body) => {
  if ((body.length > 1000)||(body.split(' ').length < 3)){
    return false;
  }
  return true;
}


const App = () => {
  const [body, setBody] = useState('');
  const [invalid, setInvalid] = useState(false);
  const {comments, setComments} = useContext(Comments);
  

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValid(body)){
      let com = comments;
      let date = new Date();
      com.unshift({
        "id": comments.length+1,
        "body": body,
        "created_at": date.toISOString(),
        "author": user
      })
      setComments(com);
      console.log(comments);
      e.target.reset();
      setBody('');
      setInvalid(false);
    } else {
      setInvalid(true);
    }
  }

  const handleBlur = (e) => {
    if (!isValid(e.target.value)){
      setInvalid(true);
    } else {
      setInvalid(false)
    }
  }

  return (
    <>
      <GlobalStyle/>
      <form onSubmit={handleSubmit}>
        {invalid? <FormInvalid>Your comment should contain at least three words and no more than 1000 symbols</FormInvalid>: undefined}
        <FormInput onBlur={handleBlur}  id='body' type="text" placeholder='Type here...' onChange={(e) => {setBody(e.target.value)}}/>
        <FormButton>
          NEW COMMENT
        </FormButton>
      </form>
      <CommentList/>
    </>
  );
}

export default App;
