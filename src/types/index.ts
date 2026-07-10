export type { EChartsOption } from 'echarts';

export interface Account {
  account_name: string;
  account_id: string;
  owner: string;
  total_cost: number;
  total_budget: number;
  variance: number;
  utilization_pct: number;
}

export interface SummaryTotals {
  total_cost: number;
  total_budget: number;
  total_variance: number;
  account_count: number;
}

export interface SummaryData {
  accounts: Account[];
  totals: SummaryTotals;
}

export interface CostRecord {
  date: string;
  account_name: string;
  account_id: string;
  service: string;
  region: string;
  owner: string | null;
  cost: number | null;
  budget: number;
}
