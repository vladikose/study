import React from 'react';
import { useTranslation } from 'react-i18next';
import ShopLoad from 'shared/lib/shopLoad/shopLoad';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
    uri: 'https://omoikiri.ru/graphql', // Замените на ваш GraphQL эндпоинт
    cache: new InMemoryCache(),
});

const SinksPage = () => {
    const { t } = useTranslation();

    return (
        <ApolloProvider client={client}>
            <div>
                <h2>{t('Мойки123')}</h2>
                <ShopLoad />
            </div>
        </ApolloProvider>
    );
};

export default SinksPage;
