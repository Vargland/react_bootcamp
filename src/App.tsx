import './App.css'

import { useTranslation } from 'react-i18next';
//import { useGetAllPokemons } from './services/use-get-all-pokemons';

import { TRANSLATE } from './constants/translates';

function App() {
    const { t, i18n } = useTranslation(TRANSLATE.COMMON);

    const handleSwitchLanguage = (lng: string) => {
        i18n.changeLanguage(lng === 'es' ? 'en' : 'es' )
    }

    return (
        <div>
            <div>{t('HELLO_WORLD')}</div>
            <button onClick={() => handleSwitchLanguage(i18n.language)}>{t('SWITCH_LANGUAGE', { lng: i18n.language === 'es' ? 'ENG' : "ESP" })} </button>
        </div>
    )
}

export default App
