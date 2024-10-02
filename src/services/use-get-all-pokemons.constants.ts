export const ALL_POKEMONS = 'all_pokemon';

export interface AllPokemonsRespomse {
    count: number;
    next: string | null;
    previous: string | null;
    results: Pokemon[];
}

interface Pokemon {
    name: string;
    url: string;
}
