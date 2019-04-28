import { Character } from './Character';
import { Grid } from './Grid';

export class Unit extends Character {
  public constructor(
    x: number,
    y: number,
    private grid: Grid,
    public range: number,
    public damage: number,
    public armor: number
  ) {
    super(x, y);
  }

  public move(x: number, y: number): void {
    this.x = x;
    this.y = y;
  }
}
