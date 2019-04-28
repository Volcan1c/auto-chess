import { UnitPropertiesInterface } from './UnitPropertiesInterface';

export interface HeroPropertiesInterface extends UnitPropertiesInterface {
  mana: number,
  manaPerAttack: number,
  manaPerHit: number
}