import { useContext } from 'react';
function LanguageSelector({LanguageContext, languageOptions}) {
    const { userLanguage, userLanguageChange } = useContext(LanguageContext);
  
    // set selected language by calling context method
    const handleLanguageChange = e => userLanguageChange(e.target.value);
  
    return (
      <select
        onChange={handleLanguageChange}
        value={userLanguage}
        className="bg-[#0d1117] text-white float-right mr-2"
      >
        {Object.entries(languageOptions).map(([id, name]) => (
          <option key={id} value={id}>{name}</option>
        ))}
      </select>
    );
  };

  export default LanguageSelector;
