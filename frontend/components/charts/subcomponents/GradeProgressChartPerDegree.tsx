import React, {useEffect, useRef, useState} from "react";
import {Chart} from "chart.js";
import {DegreeGradeCollection} from "Frontend/interfaces/global";

interface GradeProgressChartPerDegreeProps {
  data: DegreeGradeCollection[];
}

const GradeProgressChartPerDegree: React.FC<GradeProgressChartPerDegreeProps> = ({data}) => {
  const [chart, setChart] = useState<Chart>();
  const [chartData, setChartData] = useState();
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const ctx = ref.current?.getContext('2d');
    if (!ctx) return;
    if (chart) chart.destroy();

    const elementZero = data[0];
    let gradesLength = elementZero.grades.length;
    let sequenceArray = Array.from({length: gradesLength}, (_, i) => (i + 1).toString());

    setChart(new Chart(ctx, {
      type: 'line',
      data: {
        labels: sequenceArray,
        datasets: [{
          label: 'Notenverlauf ' + elementZero.name,
          backgroundColor: 'rgba(153, 27, 27, 0.2)',
          borderColor: 'rgba(153, 27, 27, 1)',
          data: elementZero.grades
        }]
      }
    }));
  }, [ref]);

  return (
    <canvas ref={ref}></canvas>
  );
}

export default GradeProgressChartPerDegree;