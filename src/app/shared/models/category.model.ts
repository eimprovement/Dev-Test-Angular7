export class Category {
  id: number;
  name: string;

  constructor(source: any = {}) {
    Object.assign(this, source);
  }
}
