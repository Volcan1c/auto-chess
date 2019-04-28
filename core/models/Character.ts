import { Item } from './Item';
import {v4 as uuid} from 'uuid';

export class Character {
  public inventory: Array<Item>;
  protected id: string;

  public constructor(
    protected x: number,
    protected y: number
  ) {
    this.inventory = [];
    this.id = uuid();
  }

  public getId(): string {
    return this.id;
  }
}
