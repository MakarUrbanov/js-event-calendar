import React from 'react';
import { View, Text } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const App = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <View>
          <Text>
            Hello
          </Text>
        </View>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
};

export default App;
