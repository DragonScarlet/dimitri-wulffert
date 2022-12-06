export class Skill {

  public level: number = 1;

  constructor(public name: string, public icon: string, public color: string, public type: string, public rating: number) {
  }

  levelUp(time) {
    this.level += this.level + time;
  }
}
