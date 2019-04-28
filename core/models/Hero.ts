import { Unit } from './Unit';
import { Grid } from './Grid';
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
      properties.armor,
      properties.damage
    );
    this.mana = properties.mana;
    this.hitPoints = properties.hitPoints;
    this.manaPerHit = properties.manaPerHit;
    this.manaPerAttack = properties.manaPerAttack;
  }
}
