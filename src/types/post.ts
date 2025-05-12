export interface PostType {
  _id?: string;
  title: string;
  content: string;
  image: string | File;
  category: 'educator' | 'youth' | 'digcomp' | 'other';
  bool: boolean;
  createdAt?: string;
}
