import axios from "axios";
import { decorate, observable, computed } from "mobx";

class CoffeeStore {
  constructor() {
    this.coffeeshops = null;
    this.coffeeshop = null;
    this.loading = true;
  }

  fetchAllCoffeeShops() {
    axios
      .get("http://coffee.q8fawazo.me/api/?format=json")
      .then(res => res.data)
      .then(data => {
        this.coffeeshops = data;
        this.loading = false;
      })
      .catch(err => console.error(err.response.data));
  }
}

decorate(CoffeeStore, {
  coffeeshops: observable,
  coffeeshop: observable,
  loading: observable
});

const coffeeStore = new CoffeeStore();
coffeeStore.fetchAllCoffeeShops();

export default coffeeStore;
