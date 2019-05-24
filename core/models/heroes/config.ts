import { StatusConditionEnum } from '../../enums/StatusConditionEnum';
import { BoardStatusEnum } from '../../enums/BoardStatusEnum';

interface HeroConfig {
  initialX: number,
  initialY: number,
  damage: number,
  range: number,
  armor: number,
  hitPoints: number,
  initialMana: number,
  manaPerAttack: number,
  manaPerHit: number,
  initialBoardStatus: BoardStatusEnum,
  initialStatusCondition: StatusConditionEnum
}

export const AxeConfig: HeroConfig = {
  initialX: -1,
  initialY: -1,
  damage: 15,
  range: 1,
  armor: 20,
  hitPoints: 750,
  initialMana: 0,
  manaPerAttack: 15,
  manaPerHit: 15,
  initialBoardStatus: BoardStatusEnum.Bench,
  initialStatusCondition: StatusConditionEnum.Active
};
