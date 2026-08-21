"use client";

import { useMemo, useState } from "react";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { publicNavData, publicNavSeries, type PublicNavKey } from "@/lib/publicNav";

const startPoint = publicNavData[0];
const endPoint = publicNavData[publicNavData.length - 1];
const dateTicks = publicNavData
  .filter((point, index) => index === 0 || point.date.slice(0, 4) !== publicNavData[index - 1].date.slice(0, 4))
  .map((point) => point.date)
  .concat(endPoint.date);
const dateFormatter = new Intl.DateTimeFormat("en", {
  day: "numeric",
  month: "short",
  year: "numeric",
  timeZone: "UTC",
});

function formatDate(value: string) {
  return dateFormatter.format(new Date(`${value}T00:00:00Z`));
}

export default function PerformanceChart() {
  const [activeKey, setActiveKey] = useState<PublicNavKey>("hft");
  const activeSeries = useMemo(
    () => publicNavSeries.find((series) => series.key === activeKey) ?? publicNavSeries[0],
    [activeKey],
  );
  const endValue = endPoint[activeKey];

  return (
    <div className="mt-12 border-y border-white/15 py-7 sm:py-9">
      <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
        <div>
          <p className="text-[11px] font-semibold uppercase text-[#718391]">Simple NAV</p>
          <div className="mt-2 flex items-baseline gap-3">
            <h3 className="text-xl font-semibold text-white">{activeSeries.name}</h3>
            <span className="text-2xl font-semibold text-[#58b6e7]">{endValue.toFixed(3)}x</span>
          </div>
          <p className="mt-2 text-xs text-[#7f909e]">
            {startPoint[activeKey].toFixed(3)}x on {formatDate(startPoint.date)} &middot; {endValue.toFixed(3)}x on {formatDate(endPoint.date)}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-px border border-white/15 bg-white/15 sm:flex" role="group" aria-label="Performance profile">
          {publicNavSeries.map((series) => {
            const isActive = series.key === activeKey;
            return (
              <button
                key={series.key}
                type="button"
                aria-pressed={isActive}
                onClick={() => setActiveKey(series.key)}
                className={`min-h-10 bg-[#07111a] px-4 text-xs font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#58b6e7] ${
                  isActive ? "text-white" : "text-[#899aa8] hover:text-white"
                }`}
              >
                <span className="mr-2 inline-block size-2" style={{ backgroundColor: isActive ? series.color : "#536674" }} />
                {series.label}
              </button>
            );
          })}
        </div>
      </div>

      <div className="mt-8 h-[320px] w-full sm:h-[390px]" aria-label={`${activeSeries.label} simple NAV chart`}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={publicNavData} margin={{ top: 8, right: 8, bottom: 0, left: -12 }} accessibilityLayer>
            <CartesianGrid stroke="rgba(255,255,255,0.10)" vertical={false} />
            <XAxis
              dataKey="date"
              ticks={dateTicks}
              tickFormatter={(value: string) => value.slice(0, 4)}
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#718391", fontSize: 11 }}
              dy={12}
            />
            <YAxis
              domain={[1, "auto"]}
              tickFormatter={(value: number) => `${value.toFixed(value >= 10 ? 0 : 1)}x`}
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#718391", fontSize: 11 }}
              width={52}
            />
            <Tooltip
              cursor={{ stroke: "rgba(255,255,255,0.28)", strokeWidth: 1 }}
              labelFormatter={(value) => formatDate(String(value))}
              formatter={(value) => [`${Number(value).toFixed(3)}x`, activeSeries.label]}
              contentStyle={{
                background: "#0d1b26",
                border: "1px solid rgba(255,255,255,0.18)",
                borderRadius: 0,
                color: "#ffffff",
                fontSize: 12,
              }}
              labelStyle={{ color: "#9cacba", marginBottom: 4 }}
              itemStyle={{ color: activeSeries.color }}
            />
            <Line
              key={activeSeries.key}
              type="linear"
              dataKey={activeSeries.key}
              name={activeSeries.label}
              stroke={activeSeries.color}
              strokeWidth={2.5}
              dot={false}
              activeDot={{ r: 4, fill: activeSeries.color, stroke: "#07111a", strokeWidth: 2 }}
              isAnimationActive={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <p className="mt-5 max-w-3xl text-[11px] leading-5 text-[#718391]">
        Web reconstruction of the NAV curves published in the Positive Research external presentation, August 2026. Intermediate points are sampled from the published plots; terminal NAV values match the presentation.
      </p>
    </div>
  );
}
