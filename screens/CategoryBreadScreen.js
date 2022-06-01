import React, { useEffect } from "react";
import { StyleSheet, FlatList } from "react-native";
import { BREADS } from "../data/breads";
import BreadItem from "../components/BreadItem";

import { useSelector, useDispatch } from "react-redux";
import {
  filteredBread,
  getBread,
  selectBread,
} from "../store/actions/bread.action";

function CategoryBreadScreen({ navigation }) {
  const dispatch = useDispatch();
  const categoryBreads = useSelector((state) => state.breads.filteredBread);
  const category = useSelector((state) => state.categories.selected);

  useEffect(() => {
    console.log("Screen: " + category.id);
    dispatch(getBread()).then(() => dispatch(filteredBread(category.id)));
  }, []);

  const handleSelect = (item) => {
    dispatch(selectBread(item.id));
    navigation.navigate("Detail", {
      bread: item,
    });
  };

  const renderItemBread = ({ item }) => (
    <BreadItem item={item} onSelected={handleSelect} />
  );

  return (
    <FlatList
      data={categoryBreads}
      keyExtractor={(item) => item.id}
      renderItem={renderItemBread}
    />
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default CategoryBreadScreen;
