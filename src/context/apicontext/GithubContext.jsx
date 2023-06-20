import {createContext,useReducer} from 'react'
import githubReducer from './GithubReducer';
import axios from 'axios'

const GithubContext = createContext();

export const GithubContextProvider = ({children}) =>{
    const GITHUB_TOKEN = "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"
    const GITHUB_URL = "https://api.github.com"
   const inintialState = {
       user:{},
       repos:[],
       laoding:false,
       error:false,
       message:''
   }
   const [state,dispatch] = useReducer(githubReducer,inintialState)

// SEARCH USER
 const searchUser = async (login) =>{
    
    try {
        setLoading()
        const response = await axios.get(`https://api.github.com/users/${login}`,{
            header:{
                Authorization:`token ${ GITHUB_TOKEN}` 
            },
          })
          const data = await response.data
          console.log(response.data)
          dispatch({
            type:'GET_USER',
            payload:data
         })
      } catch (error) {
        // console.error('Error fetching users:', error);
        setError(error.message)
       
      }
    
  
}   

 const setLoading = ()=>dispatch({type:'SET_LOADING'})
 const setError = (text) =>dispatch({type:'SET_ERROR',payload:text})
   
    return (
        <GithubContext.Provider
        value={
        {
          user:state.user,
          loading:state.loading,
          error:state.error,
          message:state.message,
           dispatch,
           searchUser,
        }
        }
        >
        {children}
        </GithubContext.Provider>
    )
}

export default GithubContext;