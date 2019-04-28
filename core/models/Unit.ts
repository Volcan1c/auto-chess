import { Character } from './Character';
import { Grid } from './Grid';
import { StatusEnum } from '../enums/StatusEnum';
import { UnitPropertiesInterface } from '../interfaces/UnitPropertiesInterface';

export class Unit extends Character {
  public grid: Grid;
  public playerId: string;
  public range: number;
  public hitPoints: number;
  public armor: number;
  public damage: number;
  public status: StatusEnum;

  public constructor(properties: UnitPropertiesInterface) {
    super(properties.x, properties.y);
    this.grid = properties.grid;
    this.playerId = properties.playerId;
    this.range = properties.range;
    this.hitPoints = properties.hitPoints;
    this.damage = properties.damage;
    this.armor = properties.armor;
    this.status = properties.status;
  }

  public move(x: number, y: number): void {
    this.x = x;
    this.y = y;
  }

  public getClosestEnemy(): Unit | undefined {
    if (this.grid.contents.length <= 1) {
      return undefined;
    }

    let closest: any = {
      distance: Infinity,
      unit: undefined
    }

    this.grid.contents.forEach((unit: Unit) => {
      if (unit.playerId !== this.playerId) {
        const distance = this.calculateDistance(this, unit);
        if (distance < closest.distance) {
          closest.distance = distance;
          closest.unit = unit;
        }
      }
    });

    return closest.unit;
  }

  public calculateDistance(unit1: Unit, unit2: Unit): number {
    if (unit1.status === StatusEnum.Bench || unit2.status === StatusEnum.Bench) {
      return -1;
    }

    return Number(
      Math.sqrt(
        (unit1.x - unit2.x)**2 + (unit1.y - unit2.y)**2
      ).toFixed(1)
    )
  }
}
