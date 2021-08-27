/* eslint-disable prettier/prettier */
import React from 'react';
import Katakana from './Katakana.js';
import Hiragana from './Hiragana.js';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

const SelectJapanese = props => {
  const selectAnAlph = chosenAlph => {
    props.setAlphIsPicked(true);
    props.setAlphabet(chosenAlph);
  };

  return (
    <View style={styles.container}>
        <TouchableOpacity
          style={styles.selecterButton}
          onPress={() => selectAnAlph(Hiragana)}>
          <Text style={styles.buttonText}>Hiragana</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.selecterButton}
          onPress={() => selectAnAlph(Katakana)}>
          <Text style={styles.buttonText}>Katakana</Text>
        </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  buttonText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  headingText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
    fontSize: 20,
    marginVertical: 10,
  },
});

export default SelectJapanese;
