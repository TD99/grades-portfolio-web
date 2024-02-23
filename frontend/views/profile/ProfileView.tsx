import {useTranslation} from "react-i18next";

export default function ProfileView() {
  const {t} = useTranslation();

  return (
    <div className="flex flex-col h-full items-center justify-center p-l text-center box-border">
      <img style={{width: '200px'}} src="images/empty-plant.png"/>
      <h2>{t('placeholder_title')}</h2>
      <p>{t('placeholder_text')}</p>
    </div>
  );
}
