import {useTranslation} from "react-i18next";
import {useAuth} from "Frontend/auth";
import {capitalize} from "Frontend/i18n/utils";
import React from "react";
import Widget from "Frontend/components/widget/Widget";
import './StartView.css';
import GradeProgressChartPerDegree from "Frontend/components/charts/subcomponents/GradeProgressChartPerDegree";

export default function StartView() {
  const {t} = useTranslation();
  const auth = useAuth();

  return (
    <div className="startview-root p-l">
      <h2 className="text-white">{t('greeting')} {capitalize(auth.state.user?.name || "anonymous")}</h2><br/>
      <div className="flex flex-wrap gap-m">
        <Widget title="Notenverlauf pro Abschluss" subtitle="Aktuell nur für BM verfügbar">
          <GradeProgressChartPerDegree data={[{name: 'BM', grades: [3.5, 4, 4.5, 5, 6]}]}/>
        </Widget>
        <Widget title="Allgemeine Statistik" subtitle="Beispieldaten">
          Noten insgesamt: 5<br/>
          Bestes Fach: Mathematik
        </Widget>
        <Widget title="Notenverlauf pro Fach">
          <select>
            <option>Deutsch</option>
            <option>Mathematik</option>
            <option>Englisch</option>
          </select>
          <GradeProgressChartPerDegree data={[{name: 'BM', grades: [5, 4, 4.5, 4, 6]}]}/>
        </Widget>
        <Widget title="Mittelwert pro Fach">
          Deutsch 4.5<br/>
          Mathematik 6<br/>
          Englisch 4.0
        </Widget>
      </div>
    </div>
  );
}
