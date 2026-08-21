export const performanceRows = [
  { key: "exposure", label: "Exposure" },
  { key: "annualizedReturn", label: "Annualized return" },
  { key: "sharpe", label: "Sharpe" },
  { key: "calmar", label: "Calmar" },
  { key: "maxDrawdown", label: "Maximum drawdown" },
  { key: "capacity", label: "Capacity (AUM basis)" },
  { key: "turnover", label: "Average daily turnover" },
  { key: "executionCost", label: "Execution cost" },
  { key: "ytdReturn", label: "2026 YTD return" },
  { key: "ytdAnnualized", label: "2026 YTD annualized" },
  { key: "ytdSharpe", label: "2026 YTD Sharpe" },
  { key: "ytdMaxDrawdown", label: "2026 YTD max drawdown" },
] as const;

type PerformanceMetric = (typeof performanceRows)[number]["key"];

type PerformanceColumn = {
  key: string;
  label: string;
  name: string;
  values: Record<PerformanceMetric, string>;
};

export const performanceColumns: PerformanceColumn[] = [
  {
    key: "hft",
    label: "HFT",
    name: "High Frequency",
    values: {
      exposure: "1x",
      annualizedReturn: "126.48%",
      sharpe: "5.631",
      calmar: "13.568",
      maxDrawdown: "-9.32%",
      capacity: "$10.67M",
      turnover: "4.676x",
      executionCost: "2.4 bps one-way",
      ytdReturn: "64.56%",
      ytdAnnualized: "120.85%",
      ytdSharpe: "5.082",
      ytdMaxDrawdown: "-6.93%",
    },
  },
  {
    key: "hft-3x",
    label: "3x HFT",
    name: "Positive Manhattan Fund",
    values: {
      exposure: "3x",
      annualizedReturn: "379.44%",
      sharpe: "5.631",
      calmar: "13.568",
      maxDrawdown: "-27.97%",
      capacity: "$3.56M",
      turnover: "14.028x",
      executionCost: "2.4 bps one-way",
      ytdReturn: "193.69%",
      ytdAnnualized: "362.55%",
      ytdSharpe: "5.082",
      ytdMaxDrawdown: "-20.79%",
    },
  },
  {
    key: "mft",
    label: "MFT",
    name: "Mid Frequency",
    values: {
      exposure: "1x",
      annualizedReturn: "107.93%",
      sharpe: "5.073",
      calmar: "10.567",
      maxDrawdown: "-10.21%",
      capacity: "$18.50M",
      turnover: "2.697x",
      executionCost: "2.4 bps one-way",
      ytdReturn: "56.80%",
      ytdAnnualized: "106.33%",
      ytdSharpe: "4.864",
      ytdMaxDrawdown: "-7.20%",
    },
  },
  {
    key: "low-vol",
    label: "Low Vol MFT",
    name: "Mid Frequency - Low Vol",
    values: {
      exposure: "1/3x",
      annualizedReturn: "35.98%",
      sharpe: "5.073",
      calmar: "10.567",
      maxDrawdown: "-3.40%",
      capacity: "$55.51M",
      turnover: "0.899x",
      executionCost: "2.4 bps one-way",
      ytdReturn: "18.93%",
      ytdAnnualized: "35.44%",
      ytdSharpe: "4.864",
      ytdMaxDrawdown: "-2.40%",
    },
  },
];
