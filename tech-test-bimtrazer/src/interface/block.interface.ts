export interface INewBlock {
  description: string;
  startDate: string;
  endDate: string;
  progress: number;
}

export interface INewBlockError {
  description?: string;
  startDate?: string;
  endDate?: string;
  progress?: number;
}

export interface IBlock {
  _id: string;
  description: string;
  startDate: string;
  endDate: string;
  progress: number;
}
