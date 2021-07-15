import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import SelectLang from './components/SelectLang';
import Game from './components/Game';

export default function App() {
  const [alphIsPicked, setAlphIsPicked] = useState(false);
	const [alphabet, setAlphabet] = useState(""); 

  return (
    <View style={styles.container}>
    {alphIsPicked ? (
      <View>
        <Game
          alphabet={alphabet}
          setAlphIsPicked={setAlphIsPicked}
        />
      </View>
    ) : (
      <View>
        <SelectLang
          setAlphabet={setAlphabet}
          setAlphIsPicked={setAlphIsPicked}
        />
      </View>
    )}
    <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#252d4a',
    alignItems: 'center',
    justifyContent: 'center',
  },
  selecterButton: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    marginVertical: 2,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#30A6E7',
    color: 'white',
    width: '100%',
  },
});
