import {
  BarController,
  BarElement,
  CategoryScale,
  Chart,
  LinearScale,
  LineController,
  LineElement,
  PointElement
} from "chart.js";

export {default as Charts} from './subcomponents/GradeProgressChartPerDegree';
export const prepareCharts = () => {
  Chart.register(CategoryScale);
  Chart.register(LinearScale);
  Chart.register(BarController);
  Chart.register(BarElement);
  Chart.register(LineController);
  Chart.register(LineElement);
  Chart.register(PointElement);
}