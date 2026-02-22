"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import { MonthlyData } from "@/data/kpidata";

interface Props {
  data: MonthlyData[];
}

export default function KPIChart({ data }: Props) {
  const formattedData = data.map((item) => ({
    ...item,
    profit: item.revenue - item.cost,
  }));

  return (
    <div className="bg-slate-900 p-6 rounded-xl border border-slate-800 mt-10">
      <h3 className="text-blue-400 mb-4 font-semibold">
        Revenue & Profit Trend
      </h3>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={formattedData}>
          <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
          <XAxis dataKey="month" stroke="#94a3b8" />
          <YAxis stroke="#94a3b8" />
          <Tooltip
            contentStyle={{
              backgroundColor: "#0f172a",
              border: "1px solid #334155",
              color: "#fff",
            }}
          />
          <Line
            type="monotone"
            dataKey="revenue"
            stroke="#3b82f6"
            strokeWidth={3}
          />
          <Line
            type="monotone"
            dataKey="profit"
            stroke="#22c55e"
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}