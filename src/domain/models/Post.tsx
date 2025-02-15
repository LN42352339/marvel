export interface Post {
  id: string;
  name: string;
  description: string;
  image: string;
  category: string;
  idUser: string;
  likes?: string[];
}
