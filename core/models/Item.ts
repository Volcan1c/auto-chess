import {v4 as uuid} from 'uuid';

export class Item {
  private id: string;

  public constructor() {
    this.id = uuid();
  }

  public getId(): string {
    return this.id;
  }
}
