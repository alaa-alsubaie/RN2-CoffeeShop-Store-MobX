import { decorate, observable, computed } from "mobx";

class CartStore {
  constructor() {
    this.items = [
      {
        drink: "Latte",
        option: "Small",
        quantity: 2
      },
      {
        drink: "Espresso",
        option: "Large",
        quantity: 1
      }
    ];
  }
}
decorate(CartStore, {
  items: observable
});

const cartStore = new CartStore();
export default cartStore;
