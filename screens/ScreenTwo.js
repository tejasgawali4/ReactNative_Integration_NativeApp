import { StyleSheet, Text, View } from "react-native";
import React from "react";

const ScreenTwo = () => {
  const navigateToMainScreen = () => {
    console.log('clicked Screen two..');
  };

  return (
    <View>
      <Text>ScreenTwo</Text>
      <Button
        onPress={navigateToMainScreen}
        title="Navigate To Native Screen 2"
      />
    </View>
  );
};

export default ScreenTwo;

const styles = StyleSheet.create({});
