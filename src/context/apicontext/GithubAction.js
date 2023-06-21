import axios from 'axios'
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_AUTH_TOKEN
const GITHUB_URL = process.env.REACT_APP_GITHUB_URL_API

// Search User
 export const searchUser = async (username) =>{
    try {
        const response = await axios.get(`${GITHUB_URL}/search/user/?q=${username}`,{
            header:{
                Authorization:`token ${ GITHUB_TOKEN}` 
            },
          })
      } catch (error) {
        console.error('Error fetching users:', error);
      }
 
  return response.data.items
}

// Get User
export const getUser = async (user) =>{
    const response = await axios.get(`${GITHUB_URL}/users/${user}`)
    const data = await response.data
    return data
}

// Get Repo
export const getRepo = async (user) =>{
    const response = await axios.get(`${GITHUB_URL}/users/${user}`)
    const repoData = await response.data
    return repoData
}