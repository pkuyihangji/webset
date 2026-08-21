export type PublicNavKey = "hft" | "hft3x" | "mft" | "lowVol";

export type PublicNavPoint = {
  date: string;
  hft: number;
  hft3x: number;
  mft: number;
  lowVol: number;
};

type PublicNavSample = Pick<PublicNavPoint, "date" | "hft" | "mft">;

export const publicNavSeries: Array<{
  key: PublicNavKey;
  label: string;
  name: string;
  color: string;
}> = [
  { key: "hft", label: "HFT", name: "High Frequency", color: "#58b6e7" },
  { key: "hft3x", label: "3x HFT", name: "Positive Manhattan Fund", color: "#c6e36c" },
  { key: "mft", label: "MFT", name: "Mid Frequency", color: "#4fc39c" },
  { key: "lowVol", label: "Low Vol MFT", name: "Mid Frequency - Low Vol", color: "#df9f63" },
];

// Reconstructed from the public NAV curves in the August 2026 external deck.
// HFT and MFT are sampled from the published plots; their scaled profiles follow the deck definitions.
const sampledNavData: PublicNavSample[] = [
  { date: "2024-03-01", hft: 1, mft: 1 },
  { date: "2024-03-15", hft: 1.119, mft: 1.113 },
  { date: "2024-03-28", hft: 1.185, mft: 1.166 },
  { date: "2024-04-11", hft: 1.205, mft: 1.234 },
  { date: "2024-04-24", hft: 1.281, mft: 1.307 },
  { date: "2024-05-08", hft: 1.311, mft: 1.307 },
  { date: "2024-05-21", hft: 1.35, mft: 1.346 },
  { date: "2024-06-04", hft: 1.363, mft: 1.374 },
  { date: "2024-06-17", hft: 1.416, mft: 1.397 },
  { date: "2024-07-01", hft: 1.446, mft: 1.405 },
  { date: "2024-07-14", hft: 1.43, mft: 1.391 },
  { date: "2024-07-28", hft: 1.43, mft: 1.411 },
  { date: "2024-08-10", hft: 1.43, mft: 1.417 },
  { date: "2024-08-24", hft: 1.476, mft: 1.448 },
  { date: "2024-09-06", hft: 1.496, mft: 1.448 },
  { date: "2024-09-20", hft: 1.489, mft: 1.431 },
  { date: "2024-10-03", hft: 1.509, mft: 1.453 },
  { date: "2024-10-17", hft: 1.542, mft: 1.448 },
  { date: "2024-10-30", hft: 1.578, mft: 1.484 },
  { date: "2024-11-13", hft: 1.581, mft: 1.459 },
  { date: "2024-11-26", hft: 1.628, mft: 1.515 },
  { date: "2024-12-10", hft: 1.727, mft: 1.605 },
  { date: "2024-12-23", hft: 1.773, mft: 1.611 },
  { date: "2025-01-06", hft: 1.78, mft: 1.631 },
  { date: "2025-01-19", hft: 1.839, mft: 1.695 },
  { date: "2025-02-02", hft: 1.793, mft: 1.707 },
  { date: "2025-02-15", hft: 1.895, mft: 1.808 },
  { date: "2025-03-01", hft: 1.971, mft: 1.864 },
  { date: "2025-03-14", hft: 2.077, mft: 1.921 },
  { date: "2025-03-28", hft: 2.133, mft: 1.994 },
  { date: "2025-04-10", hft: 2.229, mft: 2.081 },
  { date: "2025-04-24", hft: 2.295, mft: 2.135 },
  { date: "2025-05-07", hft: 2.348, mft: 2.202 },
  { date: "2025-05-21", hft: 2.407, mft: 2.264 },
  { date: "2025-06-04", hft: 2.493, mft: 2.354 },
  { date: "2025-06-17", hft: 2.579, mft: 2.427 },
  { date: "2025-07-01", hft: 2.626, mft: 2.461 },
  { date: "2025-07-14", hft: 2.705, mft: 2.512 },
  { date: "2025-07-28", hft: 2.698, mft: 2.517 },
  { date: "2025-08-10", hft: 2.678, mft: 2.472 },
  { date: "2025-08-24", hft: 2.731, mft: 2.517 },
  { date: "2025-09-06", hft: 2.744, mft: 2.495 },
  { date: "2025-09-20", hft: 2.744, mft: 2.472 },
  { date: "2025-10-03", hft: 2.857, mft: 2.585 },
  { date: "2025-10-17", hft: 2.91, mft: 2.655 },
  { date: "2025-10-30", hft: 3.022, mft: 2.748 },
  { date: "2025-11-13", hft: 3.088, mft: 2.782 },
  { date: "2025-11-26", hft: 3.141, mft: 2.816 },
  { date: "2025-12-10", hft: 3.22, mft: 2.878 },
  { date: "2025-12-23", hft: 3.339, mft: 2.979 },
  { date: "2026-01-06", hft: 3.372, mft: 2.993 },
  { date: "2026-01-19", hft: 3.428, mft: 3.035 },
  { date: "2026-02-02", hft: 3.57, mft: 3.159 },
  { date: "2026-02-15", hft: 3.584, mft: 3.151 },
  { date: "2026-03-01", hft: 3.6, mft: 3.193 },
  { date: "2026-03-14", hft: 3.689, mft: 3.278 },
  { date: "2026-03-28", hft: 3.729, mft: 3.323 },
  { date: "2026-04-10", hft: 3.696, mft: 3.306 },
  { date: "2026-04-24", hft: 3.822, mft: 3.416 },
  { date: "2026-05-07", hft: 3.848, mft: 3.444 },
  { date: "2026-05-21", hft: 3.888, mft: 3.475 },
  { date: "2026-06-03", hft: 3.914, mft: 3.492 },
  { date: "2026-06-17", hft: 3.874, mft: 3.444 },
  { date: "2026-06-30", hft: 3.914, mft: 3.472 },
  { date: "2026-07-14", hft: 4.001, mft: 3.561 },
];

function roundNav(value: number) {
  return Number(value.toFixed(3));
}

export const publicNavData: PublicNavPoint[] = sampledNavData.map(({ date, hft, mft }) => ({
  date,
  hft,
  hft3x: roundNav(1 + 3 * (hft - 1)),
  mft,
  lowVol: roundNav(1 + (mft - 1) / 3),
}));
