import { Character } from './Character';
import { Grid } from './Grid';

export class Unit extends Character {
  public constructor(
    x: number,
    y: number,
    private grid: Grid,
    public range: number,
    public damage: number,
    public armor: number,
    public status: StatusEnum
  ) {
    super(x, y);
  }

  public move(x: number, y: number): void {
    this.x = x;
    this.y = y;
  }

  public getClosestEnemy(): Unit | undefined {
    if (this.grid.contents.length <= 1) {
      return undefined;
    }

    let closest = {
      distance: Infinity,
      unit: undefined
    }
  }

  public calculateDistance(unit1: Unit, unit2: Unit): number | undefined {
    if (unit1.status === StatusEnum.Bench || unit2.status === StatusEnum.Bench) {
      return undefined;
    }
  }
}
