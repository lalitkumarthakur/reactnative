import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {StrictMode} from 'react';

function App() {
  return (
    <StrictMode>
      <SafeAreaView className="bg-red-300">
        <View style={styles.sectionContainer}>
          <Text style={{fontSize: 20, fontWeight: 600}}> Hello World </Text>
        </View>
      </SafeAreaView>
    </StrictMode>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    margin: 10,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
