import React, { useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  FlatList,
  TouchableOpacity,
} from "react-native";
import CartItem from "../components/CartItem";
import { render } from "react-dom";

import { useSelector, useDispatch } from "react-redux";

import { getCart, confirmCart, removeItem } from "../store/actions/cart.action";

function CartScreen() {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("getting cart items..");
    dispatch(getCart());
  }, []);
  const total = 12000;

  const handlerConfirmCart = () => {
    console.log("Confirmar Carrito");
    if (items.length > 0) dispatch(confirmCart(items, total));
    else console.log("No hay elementos en la lista.");
  };
  const handlerDeleteItem = (item) => {
    console.log("Eliminar Elemento: " + item.name);
    dispatch(removeItem(item.id));
  };

  const renderItem = ({ item }) => (
    <CartItem item={item} onDelete={handlerDeleteItem.bind(this, item)} />
  );

  // console.log(items.length);

  return (
    <View style={styles.container}>
      <View style={styles.list}>
        <FlatList
          data={items}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.confirm} onPress={handlerConfirmCart}>
          <Text>Confirmar</Text>
          <View style={styles.total}>
            <Text style={styles.text}>total</Text>
            <Text style={styles.text}>{total}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    backgroundColor: "#fff",
    paddingBottom: 120,
  },
  list: {
    flex: 1,
  },
  footer: {
    padding: 12,
    borderTopColor: "#CCCCCC",
    borderTopWidth: 1,
  },
  confirm: {
    backgroundColor: "#ccc",
    borderRadius: 10,
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  total: {
    flexDirection: "row",
  },
  text: {
    fontSize: 18,
    fontFamily: "OpenSansBold",
    padding: 8,
  },
});

export default CartScreen;
