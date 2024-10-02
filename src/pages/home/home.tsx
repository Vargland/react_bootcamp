import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import { TRANSLATE } from '../../constants/translates';
import { ROUTES } from '../../constants/routes';
import { LANGUAGE } from '../../constants/language';
import { StyledButton, StyledContainerButtons, StyledHomeContainer } from './home.style';
import { languageMap } from './home.constants';


function Home() {
    const { t, i18n } = useTranslation(TRANSLATE.COMMON);

    const navigate = useNavigate()

    const handleSwitchLanguage = () => {
        const newLanguage = i18n.language === LANGUAGE.ES ? LANGUAGE.EN : LANGUAGE.ES;  

        i18n.changeLanguage(newLanguage)
    }

    const handleNavigate = () => {
        navigate(ROUTES.POKEMON)
    }

    return (
        <StyledHomeContainer>
            <div>{t('HELLO_WORLD')}</div>
            <StyledContainerButtons>
                <StyledButton onClick={handleSwitchLanguage}>{t('SWITCH_LANGUAGE', { language: i18n.language === LANGUAGE.ES ? languageMap[LANGUAGE.EN] : languageMap[LANGUAGE.ES] })}</StyledButton>
                <StyledButton onClick={handleNavigate} $primary>{t('GO_TO_POKEMON')} </StyledButton>
            </StyledContainerButtons>
        </StyledHomeContainer>
    )
}

export default Home
