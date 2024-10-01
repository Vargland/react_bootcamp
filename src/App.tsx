import './App.css'

import { useTranslation } from 'react-i18next';

function App() {
    const { t } = useTranslation('common');

    return (
        <div>
            <div>{t('COMMON.HELLO_WORLD')}</div>
        </div>
    )
}

export default App
