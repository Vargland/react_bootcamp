import { useNavigate } from "react-router-dom"
import { useGetAllPokemons } from "../../services/use-get-all-pokemons"
import { ROUTES } from "../../constants/routes"
import { useTranslation } from "react-i18next"
import { TRANSLATE } from "../../constants/translates"

const PokemonDemoPage = () => {
    const { data, isLoading } = useGetAllPokemons()
    const { t } = useTranslation(TRANSLATE.COMMON);


    const navigate = useNavigate()

    const handleNavigate = () => {
        navigate(ROUTES.ROOT)
    }

    return (
        <>
            {isLoading && <div> LOADING ...</div >}
            {!isLoading && data?.results && data?.results.map(({ name }: { name: string }) => {
                return (<div> {name}</div>)
            })}
                <button onClick={handleNavigate}>{t('GO_BACK')} </button>
        </>
    )
}

export default PokemonDemoPage

