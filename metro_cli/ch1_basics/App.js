import React from 'react';
import {Text, View} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

function App() {
  return (
    <View style={{margin: 20, background: '#ac3973', alignSelf: 'center'}}>
      <View style={{backgroundColor: '#260d0d', padding: 25, borderRadius: 15}}>
        <Text style={{fontSize: 25, color: '#ff9900', fontWeight: 500}}>
          Welcome to React native !
        </Text>
      </View>
      <View
        style={{
          marginTop: 25,
          backgroundColor: '#f2d9d9',
          padding: 25,
          borderRadius: 15,
        }}>
        <Text
          style={{
            fontSize: 25,
            color: '#9933ff',
            fontWeight: 500,
          }}>
          This is chapter 1 of React native which teaches basic file structure,
          which files to edit, how to add inline css, add content (text) etc.
          Also this is my very first React native Mobile app in my life.
        </Text>
        <Text
          style={{
            marginTop: 20,
            fontSize: 25,
            color: '#9933ff',
            fontWeight: 500,
          }}>
          I am very exicited to build next nevel react natives apps. Let's see
          how it goes and what I can learn and build.
        </Text>
      </View>
    </View>
  );
}

// const styles = StyleSheet.create({
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//   },
//   highlight: {
//     fontWeight: '700',
//   },
// });

export default App;
