import axios from "axios"
import { useLocalStorage } from "../../hooks/localStorage"

export const prefix = "tim4"
export const useClient = () => {
    const [creds] = useLocalStorage('credential')
    const client = axios.create({
        baseURL: `http://msib-feb3-objectstorage.productzillaacademy.com/collections`,
         headers: {
            Authorization: `Bearer ${creds}`
        }
    })
    return client;
}

export default useClient