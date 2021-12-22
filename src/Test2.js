import React from 'react';
import { Card, CardHeader } from '@material-ui/core';
import { useTranslation } from 'react-i18next';

const App = () => {
    const { t } = useTranslation();


    return (
        <Card>
            <CardHeader title={t('test2')} />
        </Card>
    )
};

export default (App);