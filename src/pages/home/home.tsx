import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { TRANSLATE } from '../../constants/translates';
import { ROUTES } from '../../constants/routes';
import { StyledButton, StyledContainerButtons, StyledHomeContainer } from './home.style';

function Home() {
    const { t, i18n } = useTranslation(TRANSLATE.COMMON);

    const navigate = useNavigate()

    const handleSwitchLanguage = (lng: string) => {
        i18n.changeLanguage(lng === 'es' ? 'en' : 'es' )
    }

    const handleNavigate = () => {
        navigate(ROUTES.POKEMON)
    }

    return (
        <StyledHomeContainer>
            <div>{t('HELLO_WORLD')}</div>
            <StyledContainerButtons>
                <StyledButton onClick={() => handleSwitchLanguage(i18n.language)}>{t('SWITCH_LANGUAGE', { lng: i18n.language === 'es' ? 'ENG' : "ESP" })} </StyledButton>
                <StyledButton onClick={handleNavigate} $primary>{t('GO_TO_POKEMON')} </StyledButton>
            </StyledContainerButtons>
        </StyledHomeContainer>
    )
}

export default Home
