import { Grid } from '../models/Grid';
import { StatusEnum } from '../enums/StatusEnum';
import { PositionEnum } from '../enums/PositionEnum';

export interface UnitPropertiesInterface {
  x: number,
  y: number,
  grid: Grid,
  range: number,
  damage: number,
  armor: number,
  hitPoints: number,
  playerId: string,
  position: PositionEnum,
  status: StatusEnum
}