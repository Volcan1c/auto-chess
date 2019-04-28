import { Unit } from '../models/Unit';
import { Grid } from '../models/Grid';
import { StatusEnum } from '../enums/StatusEnum';
import { UnitPropertiesInterface } from '../interfaces/UnitPropertiesInterface';

describe('A Unit', () => {
  let unit: Unit;
  let grid: Grid;
  let initialConfig: UnitPropertiesInterface;

  beforeEach(() => {
    grid = new Grid(8, 8);
    initialConfig = {
      x: 0,
      y: 0,
      grid,
      range: 0,
      damage: 0,
      armor: 0,
      hitPoints: 20,
      playerId: 'playerId',
      status: StatusEnum.Active
    }
    unit = new Unit(initialConfig);
  });

  describe('when calculating the distance from another unit', () => {
    it('should return -1 when one of the two is in the bench', () => {
      const unit2 = new Unit({...initialConfig, status: StatusEnum.Bench});

      expect(unit.calculateDistance(unit, unit2)).toBe(-1);
    });

    it('should return the correct result', () => {
      const unit2 = new Unit({...initialConfig, x: 1, y: 1});
      const unit3 = new Unit({...initialConfig, x: 7, y: 6});

      expect(unit.calculateDistance(unit, unit2)).toBe(1.4);
      expect(unit.calculateDistance(unit, unit3)).toBe(9.2);
      expect(unit.calculateDistance(unit3, unit)).toBe(9.2);
    });
  });

  describe('when finding the closest unit', () => {
    beforeEach(() => {
      grid.addUnit(unit);
    });

    it('should return undefined when there is no other unit on the grid', () => {
      expect(unit.getClosestEnemy()).toBe(undefined);
    });

    it('should return undefined when there are only friendly units on the grid', () => {
      const unit2 = new Unit({...initialConfig, x: 1, y: 1});
      grid.addUnit(unit2);

      expect(unit.getClosestEnemy()).toBe(undefined);
    });

    it('should return the closest of the units on the grid', () => {
      const unit2 = new Unit({...initialConfig, x: 1, y: 1, playerId: 'enemyPlayer'});
      const unit3 = new Unit({...initialConfig, x: 3, y: 4, playerId: 'enemyPlayer'});
      grid.addUnit(unit2);
      grid.addUnit(unit3);

      expect(unit.getClosestEnemy()).toMatchObject(unit2);
    });

    it('should return the enemy unit even even if a friendly unit is closer', () => {
      const unit2 = new Unit({...initialConfig, x: 1, y: 1});
      const unit3 = new Unit({...initialConfig, x: 3, y: 4, playerId: 'enemyPlayer'});
      grid.addUnit(unit2);
      grid.addUnit(unit3);

      expect(unit.getClosestEnemy()).toMatchObject(unit3);
    });
  });

  describe('when it tries to move', () => {
    it('should not be successful when there is another unit there', () => {
      const unit2 = new Unit({...initialConfig, x: 1, y: 1});
      grid.addUnit(unit2)

      unit.move(1, 1);
      const coordinates = unit.getCoordinates();
      expect(coordinates).toMatchObject({x: 0, y: 0});
    });

    it('should be successful when there is no unit there', () => {
      unit.move(1, 1);
      const coordinates = unit.getCoordinates();
      expect(coordinates).toMatchObject({x: 1, y: 1});
      expect(grid.fullGrid[1][1]).toMatchObject(unit);
      expect(grid.fullGrid[0][0]).toBeUndefined();
    });
  });
});
