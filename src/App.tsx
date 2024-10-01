import './App.css'

import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import { TRANSLATE } from './constants/translates';
import { ROUTES } from './constants/routes';

function App() {
    const { t, i18n } = useTranslation(TRANSLATE.COMMON);
    const navigate = useNavigate()

    const handleSwitchLanguage = (lng: string) => {
        i18n.changeLanguage(lng === 'es' ? 'en' : 'es' )
    }

    const handleNavigate = () => {
        navigate(ROUTES.POKEMON)
    }

    return (
        <div>
            <div>{t('HELLO_WORLD')}</div>
            <div>
                <button onClick={() => handleSwitchLanguage(i18n.language)}>{t('SWITCH_LANGUAGE', { lng: i18n.language === 'es' ? 'ENG' : "ESP" })} </button>
                <button onClick={handleNavigate}>{t('GO_TO_POKEMON')} </button>
            </div>
        </div>
    )
}

export default App
