export interface MonthlyData {
  month: string;
  revenue: number;
  cost: number;
}

export const kpiData: MonthlyData[] = [
  { month: "Jan", revenue: 120000, cost: 80000 },
  { month: "Feb", revenue: 135000, cost: 90000 },
  { month: "Mar", revenue: 150000, cost: 95000 },
  { month: "Apr", revenue: 165000, cost: 110000 },
  { month: "May", revenue: 178000, cost: 120000 },
  { month: "Jun", revenue: 195000, cost: 130000 },
];