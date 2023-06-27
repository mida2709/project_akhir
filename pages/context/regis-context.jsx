import {createContext, useEffect, useState} from 'react'
import { usePostService } from '../rest-client/post'


export const RegisContext = createContext()

export const RegisContextProvider = ({ children }) => {
    const { getPosts} = usePostService()
    const [posts, setPosts] = useState([])
    const fetchPosts = async () => {
        const _posts = await getPosts()
        setPosts(_posts)
    }


    useEffect(() => {
        fetchPosts().then()
    }, [])

    return <RegisContext.Provider value={
        {
            posts, 
            fetchPosts}
            }>
        { children }
    </RegisContext.Provider>
}