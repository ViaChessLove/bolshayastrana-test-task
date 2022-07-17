import React, { createContext, useState } from 'react'

const initialState = {
  comments: [],
  setComments: (state) => {}
}
export const Comments = createContext(initialState);


const CommentContext = ({children}) => {
  const [comments, setComments] = useState(initialState.comments);
  return (
    <Comments.Provider value={{comments, setComments}} >
      {children}
    </Comments.Provider>
  )
}

export default CommentContext