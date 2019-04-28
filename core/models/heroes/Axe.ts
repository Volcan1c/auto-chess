import { Hero } from '../Hero';
import { Grid } from '../Grid';
import { AxeConfig } from './config';

export class Axe extends Hero {
  public constructor(
    grid: Grid,
  ) {
    super(
      {
        grid,
        x: AxeConfig.initialX,
        y: AxeConfig.initialY,
        range: AxeConfig.range,
        armor: AxeConfig.armor,
        damage: AxeConfig.damage,
        mana: AxeConfig.initialMana,
        hitPoints: AxeConfig.hitPoints,
        manaPerHit: AxeConfig.manaPerHit,
        manaPerAttack: AxeConfig.manaPerAttack
      }
    )
  }

}