import useClient, {prefix} from "./index"
import {useState} from "react"

export const usePostService = () => {
    const collection =`${prefix}_registertech`
    const client = useClient()
    const [loading, setLoading] = useState(false)

    const getPosts = async () => {
        if(loading) return
            setLoading(true)
            return client.get(collection,{
                params: {
                sort: '-timestamp'
            }
        }).then((response) => {
                    return response.data
                }).finally(() => {
                setLoading(false)
            })
        }
        
        const createPosts = async (data) => {
            if (loading) return;
            setLoading(true);
            return client
              .post(collection, data)
              .then((response) => {
                return response.data;
              })
              .finally(() => {
                setLoading(false);
              });
          };

    return { getPosts, createPosts, loading}
}

export default usePostService