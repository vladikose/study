import React from 'react';
import {useTranslation} from "react-i18next";

const AboutPage = () => {

    const {t} = useTranslation('about');

    return (
        <div>
            <h2>{t('О компании')}</h2>
        </div>
    );
};

export default AboutPage;