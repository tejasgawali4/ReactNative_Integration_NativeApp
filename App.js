import React, { useEffect } from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import constantStrings from './constants/constantStrings';
import TestConnectNative from './rn-bridge/TestConnectNative';
// export let rootTag = 1;

const App = props => {
  const isDarkMode = useColorScheme() === 'dark';
  console.log('This is Message From Native:', props.message_from_native);
  const {rootTag} = props;

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const onClick = () => {
    console.log('clicked..');
    TestConnectNative.exitRN(rootTag);
  }

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? "light-content" : "dark-content"}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={[styles.scroll, backgroundStyle]}
      >
        <View style={styles.container}>
          <Text style={{fontSize:15, fontWeight: 'bold', padding: 20}}> This is React Native Screen 1</Text>
          <Text> message_from_native : {props.message_from_native} </Text>
          <Button style={{marginTop: 50}} onPress={onClick} title="Navigate to Native"/>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 100,
  },
  scroll: {
    height: '100%',
    margin: 20,
  }
});

export default App;
