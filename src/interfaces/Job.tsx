import { Company } from "./Company";

export type Job = {
  roleName: string;
  description: string;
  company: Company;
  startDate: string;
  endDate?: string;
  tecnologies?: Array<string>;
  hashtags?: Array<string>;
};
