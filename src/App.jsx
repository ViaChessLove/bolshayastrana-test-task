import React from 'react';
import CommentList from './components/commentList/CommentList';
import { GlobalStyle } from './globalStyles';



const App = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  }
  return (
    <>
      <GlobalStyle/>
      <form onSubmit={handleSubmit}>
        <input type="text" />
      </form>
      <CommentList/>
    </>
  );
}

export default App;
