import { client } from "./config/client.config"

import { useQuery } from "react-query"

import { ALL_POKEMONS, AllPokemonsRespomse } from "./use-get-all-pokemons.constants";

const getAllPokemons = (): Promise<AllPokemonsRespomse> => {
    return client.get('/pokemon');
}

export const useGetAllPokemons = () => {
    return useQuery({ queryKey: [ALL_POKEMONS], queryFn: getAllPokemons })
}
