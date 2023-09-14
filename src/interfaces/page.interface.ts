export enum PageCategory {
  Corses,
  Books,
}
export interface PageModel {
  alias: string;
  title: string;
  _id: string;
  category: string;
  tags: string[];
  description: string;
  hh: HhData;
  advantages: Advantage[];
}

export interface HhData {
  count: number;
  juniorSalary: number;
  middleSalary: number;
  seniorSalary: number;
}

export interface Advantage {
  title: string;
  description: string;
  id: string;
}
