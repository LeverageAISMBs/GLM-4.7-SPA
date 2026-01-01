import { LucideIcon } from "lucide-react";

export enum SectionId {
  Overview = 'overview',
  Plans = 'plans',
  Cli = 'cli',
  Setup = 'setup',
  Deployment = 'deployment'
}

export interface NavItem {
  id: SectionId;
  label: string;
  icon: LucideIcon;
}

export interface ChartDataPoint {
  subject: string;
  glm: number;
  standard: number;
  fullMark: number;
}

export interface PlanDataPoint {
  name: string;
  cost: number;
  color: string;
}
