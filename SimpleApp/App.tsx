/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { StatusBar, StyleSheet, useColorScheme, View, Text } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { HybridTest1, HybridTest2View } from 'simple-lib';


function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <AppContent />
    </SafeAreaProvider>
  );
}

function AppContent() {
  return (
    <View style={styles.container}>
      <Text>HybridTest1</Text>
      <Text>1 + 2 = {HybridTest1.add(1, 2)} </Text>
      <Text>HybridTest2</Text>
      <HybridTest2View enableFlash={true} style={styles.test2} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  test2: {
    width: 100,
    height: 100,
  },
});

export default App;
