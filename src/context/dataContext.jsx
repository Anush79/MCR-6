import { createContext, useContext } from "react";
import { data } from "../data";
const DataContext = createContext()

export function DataProvider({children}){
  return <DataContext.Provider value={{candidate:"Anushka Jaiswal"}}>
    {children}
  </DataContext.Provider>
}

export const useData = ()=>useContext(DataContext)