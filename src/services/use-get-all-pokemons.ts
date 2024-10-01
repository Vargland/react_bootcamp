import { client } from "./config/client.config"

import { useQuery } from "react-query"

const fetchPokemons = (): Promise<unknown[]> => {
    return client.get('/pokemon').then((response) => response.data)
}

export const useGetAllPokemons = () => {
    const onSuccess = (data: any) => {
        return data.results
    }

    return useQuery({ queryKey: ['all_pokemon'], queryFn: fetchPokemons, onSuccess })
}
