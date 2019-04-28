import { Grid } from '../models/Grid';
import { StatusEnum } from '../enums/StatusEnum';

export interface UnitPropertiesInterface {
  x: number,
  y: number,
  grid: Grid,
  range: number,
  damage: number,
  armor: number,
  hitPoints: number,
  playerId: string,
  status: StatusEnum
}