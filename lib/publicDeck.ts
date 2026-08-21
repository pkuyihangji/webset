export type StrategyKey = "hft" | "mft" | "low-vol";

export type Strategy = {
  key: StrategyKey;
  name: string;
  apr: string;
  sharpe: string;
  drawdown: string;
  turnover: string;
  binanceCapacity: string;
  totalCapacity: string;
};

export const strategies: Strategy[] = [
  {
    key: "hft",
    name: "High Frequency",
    apr: ">120%",
    sharpe: ">5",
    drawdown: "-9.32%",
    turnover: "4.7x",
    binanceCapacity: ">$10M",
    totalCapacity: ">$20M",
  },
  {
    key: "mft",
    name: "Mid Frequency",
    apr: "~106%",
    sharpe: ">4.8",
    drawdown: "-10.21%",
    turnover: "2.7x",
    binanceCapacity: ">$18.5M",
    totalCapacity: ">$40M",
  },
  {
    key: "low-vol",
    name: "Low Volatility MFT",
    apr: "~35%",
    sharpe: ">4.8",
    drawdown: "-3.4%",
    turnover: "0.9x",
    binanceCapacity: ">$55M",
    totalCapacity: ">$120M",
  },
];

export const performanceViews = [
  { key: "hft", label: "HFT", title: "High Frequency Strategy", image: "/hft-performance.png" },
  { key: "hft-3x", label: "3x HFT", title: "Positive Manhattan Fund - 3x leverage HFT", image: "/hft-3x-performance.png" },
  { key: "mft", label: "MFT", title: "Mid Frequency Strategy", image: "/mft-performance.png" },
  { key: "low-vol", label: "Low Vol MFT", title: "Low Volatility Mid Frequency Strategy", image: "/low-vol-mft-performance.png" },
] as const;

export type PerformanceKey = (typeof performanceViews)[number]["key"];
