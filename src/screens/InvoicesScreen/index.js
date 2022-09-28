import {Text, View} from 'react-native';
import React, {useContext} from 'react';
import LanguageContext from '../../context/LanguageContext';

const InvoicesScreen = () => {
  const {t} = useContext(LanguageContext);

  return (
    <View>
      <Text>{t('hello')}</Text>
    </View>
  );
};

export default InvoicesScreen;
