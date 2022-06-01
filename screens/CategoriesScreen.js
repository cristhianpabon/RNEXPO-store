import React, { useEffect } from "react";
import { FlatList } from "react-native";
import GridItem from "../components/GridItem";

import { useSelector, useDispatch } from "react-redux";

import { selectCategory, getCategory } from "../store/actions/category.action";

function CategoriesScreen({ navigation }) {
  const categories = useSelector((state) => state.categories.categories);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("getting categories..");
    dispatch(getCategory());
  }, []);

  const handledSelectedCategory = (item) => {
    dispatch(selectCategory(item.id));
    navigation.navigate("Bread", {
      name: item.title,
    });
  };

  const renderGridItem = ({ item }) => (
    <GridItem item={item} onSelected={handledSelectedCategory} />
  );

  return (
    <FlatList
      data={categories}
      keyExtractor={(item) => item.id}
      renderItem={renderGridItem}
      numColumns={2}
    />
  );
}

export default CategoriesScreen;
