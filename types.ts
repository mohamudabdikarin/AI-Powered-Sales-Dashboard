
export enum DealStatus {
  CLOSED = 'Closed',
  PENDING = 'Pending',
  LOST = 'Lost'
}

export interface Deal {
  id: string;
  customer: string;
  value: number;
  status: DealStatus;
  date: string;
  representative: string;
}

export interface StatItem {
  label: string;
  value: string;
  change: number;
  icon: string;
}

export interface RevenueData {
  month: string;
  revenue: number;
  target: number;
}

export interface AIInsights {
  leadQuality: number;
  prediction: string;
  reasoning: string;
}
