import React from 'react';
import { useTranslation } from 'react-i18next';
import { BugButton } from 'app/providers/ErrorBoundary';

const MainPage = () => {
    const { t } = useTranslation();

    return (
        <div>
            <h2>{t('Главная')}</h2>
            <BugButton />
        </div>
    );
};

export default MainPage;
