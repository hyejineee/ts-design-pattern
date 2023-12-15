import Animal from "./Animal";

export default class Tiger {
  private _name: string | null;

  set name(v: string) {
    this._name = v;
  }

  get name() {
    return this._name;
  }

  roar(): string {
    return "어흥";
  }
}
