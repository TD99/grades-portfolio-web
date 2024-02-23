import {FC, useEffect, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {Select, SelectChangeEvent} from '@hilla/react-components/Select';
import {getLanguageNameFromCode, setLanguageToStorage} from "Frontend/i18n/utils";

interface ContainerProps {
  [key: string]: any;
}

const LanguageSelector: FC<ContainerProps> = ({...props}) => {
  const {t, i18n} = useTranslation();
  const [availableLanguages, setAvailableLanguages] = useState(i18n.languages);

  useEffect(() => {
    setAvailableLanguages(Object.keys(i18n.services.resourceStore.data));
  }, [i18n.languages]);

  const handleLanguageChange = async (event: SelectChangeEvent) => {
    await i18n.changeLanguage(event.target.value);
    setLanguageToStorage(event.target.value);
  };

  return (
    <Select
      label={t('language_selector_label')}
      items={availableLanguages.map((lang) => ({
        value: lang,
        label: getLanguageNameFromCode(lang),
      }))}
      value={i18n.language}
      onChange={handleLanguageChange}
      {...props}
    />
  );
};

export default LanguageSelector;
