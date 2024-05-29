import {useTranslation} from "react-i18next";
import {AutoCrud} from "@hilla/react-crud";
import {GradeService} from "Frontend/generated/endpoints";
import GradeModel from "Frontend/generated/ch/timduerr/gradesportfolio/entity/GradeModel";

export default function GradesView() {
  const {t} = useTranslation();

  return (
    <div className="flex flex-col h-full items-center justify-center p-l text-center box-border">
      <AutoCrud className="w-full h-full" service={GradeService} model={GradeModel}/>
    </div>
  );
}
