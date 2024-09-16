import { NativeModules } from 'react-native-web';

NativeModules.PlatformConstants = {
  interfaceIdiom: 'web',
};

jest.mock('react-native-chart-kit', () => ({
  LineChart: () => null,
  BarChart: () => null,
  PieChart: () => null,
  ProgressChart: () => null,
  ContributionGraph: () => null,
  StackedBarChart: () => null,
}));
