export enum InvocationType {
  StartExecution = 'start_execution',
  StopExecution = 'stop_execution'
}

export interface Invocation {
  id: string;
  timestamp: number;
  user_id: string;
  type: InvocationType;
  data: any;
}

export interface InvocationExecution {
  execution_id: string;
}
