import React, { useContext, useState } from 'react';
import CommentList from './components/commentList/CommentList';
import { FormButton, FormInput } from './components/form/Form.style';
import { Comments } from './Context';
import { user } from './data/user';
import { GlobalStyle } from './globalStyles';



const App = () => {
  const [body, setBody] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
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
  }

  const {comments, setComments} = useContext(Comments);
  
  return (
    <>
      <GlobalStyle/>
      {comments.length}
      <form onSubmit={handleSubmit}>
        <FormInput id='body' type="text" placeholder='Type here...' onChange={(e) => {setBody(e.target.value)}}/>
        <FormButton>
          NEW COMMENT
        </FormButton>
      </form>
      <CommentList/>
    </>
  );
}

export default App;
