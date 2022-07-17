import React, { createContext, useState } from 'react'

const initialState = {
  currentPage: 1,
  setCurrentPage: (state) => {}
}
export const Page = createContext(initialState);


const PageContext = ({children}) => {
  const [currentPage, setCurrentPage] = useState(initialState.currentPage);
  return (
    <Page.Provider value={{currentPage, setCurrentPage}} >
      {children}
    </Page.Provider>
  )
}

export default PageContext