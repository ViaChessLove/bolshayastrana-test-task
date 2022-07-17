import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import CommentContext from './CommentContext';
import PageContext from './PageContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <PageContext>
    <CommentContext>
      <App />
    </CommentContext>
  </PageContext>
  
);
