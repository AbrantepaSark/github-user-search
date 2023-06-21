import { useContext, useState } from 'react'
import Header from './components/Header'
import SearchBar from './components/SearchBar'
import CardDetails from './components/CardDetails'
import useTheme from './context/useTheme'
import GithubContext from './context/apicontext/GithubContext'
import Spinner from './components/Spinner'

function App() {
const {theme,toggleTheme} = useTheme()
const {user,loading} = useContext(GithubContext)

  return (
    <>
      <div className={`w-full h-screen bg-${theme==='light'?'[#F6F8FF]':'[#141D2F]'} flex flex-col gap-5 items-center`}>
       <Header/>
       <SearchBar />
       {loading && <Spinner/>}
       {
        user.name && <CardDetails/>
       }
      
       </div>
    </>
  )
}

export default App
