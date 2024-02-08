export interface Account {
  id: number;
  name: string;
  email: string;
  deniedRequests: number[];
  approvedRequests: number[];
  pendingRequests: number[];
}
