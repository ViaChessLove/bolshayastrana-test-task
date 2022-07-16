import React from 'react';
import CommentList from './components/commentList/CommentList';
import { FormButton, FormInput } from './components/form/Form.style';
import { GlobalStyle } from './globalStyles';



const App = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    
    e.target.reset();
  }
  return (
    <>
      <GlobalStyle/>
      <form onSubmit={handleSubmit}>
        <FormInput id='body' type="text" placeholder='Type here...'/>
        <FormButton>
          NEW COMMENT
        </FormButton>
      </form>
      <CommentList/>
    </>
  );
}

export default App;
