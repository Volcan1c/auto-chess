import { Unit } from './Unit';
import { generateEmptyArrayOfArrays } from '../../utils/functions';

export class Grid {
  public contents: Array<Unit>;
  public fullGrid: Array<Array<Unit | undefined>>;

  public constructor(
    public width: number,
    public height: number
  ) {
    this.contents = [];
    this.fullGrid = generateEmptyArrayOfArrays(width, height);
  }

  public addUnit(unit: Unit): void {
    this.contents.push(unit);
    const coordinates = unit.getCoordinates();
    this.fullGrid[coordinates.x][coordinates.y] = unit;
  }

  public removeUnit(unit: Unit): void {
    this.contents = this.contents.filter(placedUnit => {
      return placedUnit.getId() !==  unit.getId();
    });
    const coordinates = unit.getCoordinates();
    this.fullGrid[coordinates.x][coordinates.y] = undefined;
  }

  public isBlockEmpty(x: number, y: number): boolean {
    return this.fullGrid[x][y] === undefined;
  }
}
