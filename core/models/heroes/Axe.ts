import { Hero } from '../Hero';
import { Grid } from '../Grid';
import { AxeConfig } from './config';

export class Axe extends Hero {
  public constructor(
    grid: Grid,
  ) {
    super(
      {
        x: AxeConfig.initialX,
        y: AxeConfig.initialY,
        grid,
        range: AxeConfig.range,
        damage: AxeConfig.damage,
        armor: AxeConfig.armor,
        hitPoints: AxeConfig.hitPoints,
        mana: AxeConfig.initialMana,
        manaPerAttack: AxeConfig.manaPerAttack,
        manaPerHit: AxeConfig.manaPerHit
      }
    )
  }

}