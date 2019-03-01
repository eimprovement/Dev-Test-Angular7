import { Category } from './category.model';

export class Pet {
  id: string;
  name: string;
  category: Category;
  photoUrls: string[];
  tags: string[];
  status: number;
}
