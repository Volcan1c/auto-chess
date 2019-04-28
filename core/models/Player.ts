import { Character } from './Character';
import { Item } from './Item';
import { Unit } from './Unit';

export class Player extends Character {
  public pickUpItem(item: Item): void {
    this.inventory.push(item);
  }

  public giveItem(item: Item, target: Unit): void {
    target.inventory.push(item);
    this.inventory = this.inventory.filter(ownedItem => {
      return item.getId() !== ownedItem.getId()
    });
  }
}
