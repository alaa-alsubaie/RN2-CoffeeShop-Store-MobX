import React, { Component } from "react";

// NativeBase Components
import { Text, List, Button } from "native-base";
// Component
import CartItem from "./CartItem";

//my imports:
import cartStore from "../Stores/cartStore";
import { observer } from "mobx-react";

class CoffeeCart extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    let coffeeshops = cartStore.items;
    let content;
    if (coffeeshops) {
      content = coffeeshops.map((item, index) => (
        <CartItem item={item} key={index} />
      ));
    }

    return (
      <List>
        {content}
        <Button full danger>
          <Text>Checkout</Text>
        </Button>
      </List>
    );
  }
}

export default observer(CoffeeCart);
