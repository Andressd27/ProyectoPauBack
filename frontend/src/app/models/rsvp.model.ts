export interface RsvpForm {
  name: string;
  email: string;
  response: 'yes' | 'no' | 'maybe';
  favoriteTown?: string;
  message?: string;
}

export interface RsvpResponse {
  success: boolean;
  message: string;
  data: RsvpForm & { id: number; createdAt: Date };
}
