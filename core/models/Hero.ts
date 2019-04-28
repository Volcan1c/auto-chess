import { Unit } from './Unit';
import { Grid } from './Grid';
import { UnitPropertiesInterface } from '../interfaces/UnitPropertiesInterface';
import { HeroPropertiesInterface } from '../interfaces/HeroPropertiesInterface';

export class Hero extends Unit {
  private mana: number;
  private manaPerAttack: number;
  private manaPerHit: number;
  public hitPoints: number;

  public constructor(properties: HeroPropertiesInterface) {
    super(
      properties.x,
      properties.y,
      properties.grid,
      properties.range,
      properties.damage,
      properties.armor
    );
    this.hitPoints = properties.hitPoints;
    this.mana = properties.mana;
    this.manaPerAttack = properties.manaPerAttack;
    this.manaPerHit = properties.manaPerHit;
  }
}
