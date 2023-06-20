import React, { useContext } from 'react'
import {ThemeContext} from './ThemeContext'
const useTheme = () => {
   const {theme,toggleTheme} = useContext(ThemeContext)
  return {theme,toggleTheme}
}

export default useTheme
