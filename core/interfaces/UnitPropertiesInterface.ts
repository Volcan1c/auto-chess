import { Grid } from '../models/Grid';

export interface UnitPropertiesInterface {
  x: number,
  y: number,
  grid: Grid,
  range: number,
  damage: number,
  armor: number,
  hitPoints: number
}