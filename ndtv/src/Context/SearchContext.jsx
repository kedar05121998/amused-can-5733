import React, { createContext, useState } from 'react'

export const SearchContext=createContext()

function SearchContextProvider({children}) {
    const [state,setState]=useState("")

    const handleChange=(value)=>{
        setState(value)

    }
  return (
   <SearchContext.Provider value={{state,handleChange}} >
       {children}
   </SearchContext.Provider>
  )
}

export default SearchContextProvider