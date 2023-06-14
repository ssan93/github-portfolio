
import { useState } from 'react';

// it provides the language context to app
export const LanguageProvider = ({ children, LanguageContext, dictionaryList, languageOptions }) => {
   

  // const defaultLanguage = 'window.localStorage.getItem('rcml-lang')';
  const defaultLanguage = 'en';
  const [userLanguage, setUserLanguage] = useState(defaultLanguage || 'en');

  const provider = {
    userLanguage,
    dictionary: dictionaryList[userLanguage],
    userLanguageChange: selected => {
      const newLanguage = languageOptions[selected] ? selected : 'en'
      setUserLanguage(newLanguage);
      // window.localStorage.setItem('rcml-lang', newLanguage);
    }
  };

  return (
    <LanguageContext.Provider value={provider}>
      {children}
    </LanguageContext.Provider>
  );
};
