import React, { Component } from "react";

// NativeBase Components
import { List, Content } from "native-base";

// Store
//import coffeeshops from "./list";

// Component
import CoffeeItem from "./CoffeeItem";

//my imports
import coffeeStore from "../Stores/coffeeStore";
import { observer } from "mobx-react";

class CoffeeList extends Component {
  render() {
    let ListItems;
    if (coffeeStore.coffeeshops) {
      ListItems = coffeeStore.coffeeshops.map(coffeeShop => (
        <CoffeeItem coffeeShop={coffeeShop} key={coffeeShop.id} />
      ));
    }
    return (
      <Content>
        <List>{ListItems}</List>
      </Content>
    );
  }
}

export default observer(CoffeeList);
