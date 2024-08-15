import React from "react";

interface IElements{
    children:React.ReactNode
}

interface IThemeContext{
  theme: ITheme
  setTheme: React.Dispatch<React.SetStateAction<ITheme>> 
}

type ITheme= "light" | "dark"

export const ThemeContext= React.createContext<IThemeContext>({} as IThemeContext)

const ThemeProvider=({children}:IElements)=>{

    const [theme, setTheme]  = React.useState<ITheme>(()=>{
        const theme=localStorage.getItem("Theme") as ITheme ?? "";
        return theme ? theme : "light"
    })

    React.useEffect(()=>{localStorage.setItem("Theme", theme)}, [theme])

   return(
    <ThemeContext.Provider value={{theme, setTheme}}>
        {children}
    </ThemeContext.Provider>
   )
}

export default ThemeProvider