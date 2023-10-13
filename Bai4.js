import { View, Text, FlatList, Button } from "react-native";

import React from "react";
import Inputs from "./dubai4";

const Bai4 = ({ navigation}) => {
  return (
    <View>
      <Text
        style={{ fontSize: 50, textAlign: "center", justifyContent: "center" }}
      >
        Bai4
      </Text>
      <Inputs/>
      {/* <Button
        title="Chuyển màn hình"
        onPress={() => {
          navigation.navigate("Home");
        }}
      /> */}
    </View>
  );
};

export default Bai4;
