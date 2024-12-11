import React from 'react';
import { useTranslation } from 'react-i18next';
import { BugButton } from 'app/providers/ErrorBoundary';
import Products from 'shared/lib/data/data';

const MainPage = () => {
    const { t } = useTranslation();

    return (
        <div>
            <h2>{t('Главная')}</h2>
            <BugButton />
            <Products />
        </div>
    );
};

export default MainPage;
