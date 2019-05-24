import { Grid } from '../models/Grid';
import { StatusConditionEnum } from '../enums/StatusConditionEnum';
import { BoardStatusEnum } from '../enums/BoardStatusEnum';

export interface UnitPropertiesInterface {
  x: number,
  y: number,
  grid: Grid,
  range: number,
  damage: number,
  armor: number,
  hitPoints: number,
  playerId: string,
  boardStatus: BoardStatusEnum,
  statusCondition: StatusConditionEnum
}