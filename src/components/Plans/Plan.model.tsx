export interface PlanInt {
  plan: {
    id: number;
    recommended: boolean;
    name: string;
    price: number;
    subject: string;
    planFeatures: string[];
    btn: string;
  }[];
}
