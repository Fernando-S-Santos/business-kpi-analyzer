"use client";

import { kpiData } from "@/data/kpidata";
import KPIChart from "@/components/KPIChart";

export default function Home() {
  const lastMonth = kpiData[kpiData.length - 1];
  const previousMonth = kpiData[kpiData.length - 2];

  const profit = lastMonth.revenue - lastMonth.cost;

  const growth =
    ((lastMonth.revenue - previousMonth.revenue) /
      previousMonth.revenue) *
    100;

  const margin = (profit / lastMonth.revenue) * 100;

  let insight = "";

    if (growth > 0) {
      insight = `Revenue increased ${growth.toFixed(
        2
      )}% compared to last month.`;
    } else {
      insight = `Revenue decreased ${Math.abs(growth).toFixed(
        2
      )}% compared to last month.`;
    }

    if (margin > 30) {
      insight += " Profit margin is strong and indicates efficient cost control.";
    } else if (margin > 15) {
      insight += " Profit margin is moderate, with room for optimization.";
    } else {
      insight += " Profit margin is low and may require cost reduction strategies.";
    }

    if (growth > 8 && margin > 30) {
      insight += " Overall performance is excellent.";
    }

  return (
    <main className="min-h-screen bg-slate-950 text-white p-10">
      <h1 className="text-3xl font-bold text-blue-500 mb-6">
        Business KPI Analyzer
      </h1>

      <div className="grid md:grid-cols-3 gap-6">

        <div className="bg-slate-900 p-6 rounded-xl border border-slate-800">
          <h3 className="text-slate-400 text-sm">Revenue (Last Month)</h3>
          <p className="text-2xl font-bold text-blue-400 mt-2">
            ${lastMonth.revenue.toLocaleString()}
          </p>
        </div>

        <div className="bg-slate-900 p-6 rounded-xl border border-slate-800">
          <h3 className="text-slate-400 text-sm">Profit</h3>
          <p className="text-2xl font-bold text-green-400 mt-2">
            ${profit.toLocaleString()}
          </p>
        </div>

        <div className="bg-slate-900 p-6 rounded-xl border border-slate-800">
          <h3 className="text-slate-400 text-sm">Growth</h3>
          <p
            className={`text-2xl font-bold mt-2 ${
              growth >= 0 ? "text-green-400" : "text-red-400"
            }`}
          >
            {growth.toFixed(2)}%
          </p>
        </div>

      </div>

      <div className="mt-10 bg-slate-900 p-6 rounded-xl border border-slate-800">
        <h3 className="text-slate-400 text-sm">Profit Margin</h3>
        <p className="text-2xl font-bold text-red-400 mt-2">
          {margin.toFixed(2)}%
        </p>
      </div>

      <div className="mt-8 bg-blue-600/10 border border-blue-500/30 p-6 rounded-xl">
        <h3 className="text-blue-400 font-semibold mb-2">
          Business Insight
        </h3>
        <p className="text-slate-300">
          {insight}
        </p>
      </div>
      <KPIChart data={kpiData} />
    </main>
  );
}