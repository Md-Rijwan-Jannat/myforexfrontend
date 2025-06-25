import { StaticImageData } from "next/image";
import { ReactNode } from "react";

export interface MetricCardProps {
  title: string;
  value: string;
  icon: ReactNode;
  className?: string;
  length: number;
  index: number;
}

export interface SidebarItemProps {
  icon: ReactNode;
  label: string;
  active?: boolean;
  onClick?: () => void;
}

export interface ActionCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  color?: string;
}

export interface WinRateGaugeProps {
  percentage?: number;
  title?: string;
}

export interface ChartDataPoint {
  month: string;
  equity: number;
  balance: number;
}

export interface DashboardProps {
  title?: string;
  badge?: string;
  description?: string;
  chartData?: ChartDataPoint[];
  showActionCards?: boolean;
  showGetFundedButton?: boolean;
}

export interface SidebarProps {
  logoSrc: string | StaticImageData;
  companyName?: string;
  tagline?: string;
  menuItems: SidebarItemProps[];
  onMenuItemClick?: (item: SidebarItemProps) => void;
}

export interface DashboardHeaderProps {
  title: string;
  subtitle: string;
  showAccountSelector?: boolean;
  showAccountStatus?: boolean;
}
