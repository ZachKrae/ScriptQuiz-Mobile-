import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [alphIsPicked, setAlphIsPicked] = useState(false);
	const [alphabet, setAlphabet] = useState(""); 

  return (
    <View className='app'>
    {alphIsPicked ? (
      <View>
        <Text>Play Game</Text>
        {/* <Game
          alphabet={alphabet}
          setAlphIsPicked={setAlphIsPicked}
        /> */}
      </View>
    ) : (
      <View>
        <Text>Select Alphabet</Text>
        {/* <SelectLang
          setAlphabet={setAlphabet}
          setAlphIsPicked={setAlphIsPicked}
        /> */}
      </View>
    )}
    <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
