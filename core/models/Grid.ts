import { Unit } from './Unit';

export class Grid {
  private contents: Array<Unit>;

  public constructor(
    public width: number,
    public height: number
  ) {
    this.contents = [];
  }

  public addUnit(unit: Unit): void {
    this.contents.push(unit);
  }

  public removeUnit(unit: Unit): void {
    this.contents = this.contents.filter(placedUnit => {
      return placedUnit.getId() !==  unit.getId();
    });
  }
}
