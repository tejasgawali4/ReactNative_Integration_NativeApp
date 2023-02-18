import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";

const ScreenOne = () => {
  const navigateToMainScreen = () => {
    console.log('clicked Screen One..');
  };

  return (
    <View>
      <Text>Screen One</Text>
      <Button
        onPress={navigateToMainScreen}
        title="Navigate To Native Screen 1"
      />
    </View>
  );
};

export default ScreenOne;

const styles = StyleSheet.create({});
