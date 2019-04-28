import { Character } from './Character';

export class Unit extends Character {
  public move(x: number, y: number): void {
    this.x = x;
    this.y = y;
  }
}
