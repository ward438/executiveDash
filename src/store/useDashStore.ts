import { create } from 'zustand';
import type { Account, SummaryTotals, CostRecord, DashState } from '../types';
import summaryRaw from '../data/summary.json';
import costsRaw from '../data/costs.json';

export const useDashStore = create<DashState>(() => ({
  accounts: summaryRaw.accounts as Account[],
  totals: summaryRaw.totals as SummaryTotals,
  costs: costsRaw as CostRecord[],
}));
