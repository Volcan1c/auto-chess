import { Unit } from './Unit';
import { Grid } from './Grid';
import { HeroPropertiesInterface } from '../interfaces/HeroPropertiesInterface';

export class Hero extends Unit {
  private mana: number;
  private manaPerAttack: number;
  private manaPerHit: number;

  public constructor(properties: HeroPropertiesInterface) {
    super({
      x: properties.x,
      y: properties.y,
      grid: properties.grid,
      range: properties.range,
      armor: properties.armor,
      damage: properties.damage,
      boardStatus: properties.boardStatus,
      statusCondition: properties.statusCondition,
      hitPoints: properties.hitPoints,
      playerId: properties.playerId
    });
    this.mana = properties.mana;
    this.manaPerHit = properties.manaPerHit;
    this.manaPerAttack = properties.manaPerAttack;
  }
}
