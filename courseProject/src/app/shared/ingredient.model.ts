export class Ingredient {
  public name: string;
  public quantity: number;

  constructor(name: string, quantity: number) {
    this.name = name;
    this.quantity = quantity;
  }
}

//Can also do this:
// export class Ingredient {
//     constructor(public name: string, public quantity: number) {}
//   }
