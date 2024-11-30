import { useQuery } from '@tanstack/react-query'
import { serverRequest } from '../../utils/request'

const getTypes = async () => {
    
    const response = await serverRequest("v1/types", {}, "GET")
    if(!response?.succes) {
        return response.data
    } else {
        throw new Error(response?.error)
    }
}

const useGetTypes = () => {
    return useQuery({
        queryKey: ['get_types'],
        queryFn: getTypes,
        refetchOnMount: false,
    })
}

export default useGetTypes;