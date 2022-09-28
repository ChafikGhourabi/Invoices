import React, {useMemo, useState} from 'react';
import {StatusBar, useColorScheme} from 'react-native';
import {Provider} from 'react-redux';

import {store} from './src/redux/store';
import Colors from './src/constants/Colors';
import i18n from './src/language/i18n';
import LanguageContext from './src/context/LanguageContext';
import {DrawerNavigation} from './src/navigation/';

const App = () => {
  const schema = useColorScheme();
  const isDarkMode = schema === 'dark';
  const [locale, setLocale] = useState('fr');

  const languageContext = useMemo(
    () => ({
      t: (scope, options) => i18n.t(scope, {locale, ...options}),
      locale,
      setLocale,
    }),
    [locale],
  );

  return (
    <>
      <LanguageContext.Provider value={languageContext}>
        <Provider store={store}>
          <StatusBar barStyle={'dark-content'} backgroundColor={Colors.white} />
          <DrawerNavigation />
        </Provider>
      </LanguageContext.Provider>
    </>
  );
};

export default App;
