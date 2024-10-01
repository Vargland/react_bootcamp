import { client } from "./config/client.config"

import { useQuery } from "react-query"

const fetchPokemons = (): Promise<unknown[]> => {
    return client.get('/pokemon')  
}

export const useGetAllPokemons = () => {
    return useQuery({ queryKey: ['all_pokemon'], queryFn: fetchPokemons })
}
