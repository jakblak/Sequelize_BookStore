export interface User {
  id?: number;
  name: string;
  Reading?: {
    title: string;
    author: string;
    year: number;
  };
  Favorite?: {
    title: string;
  };
}
