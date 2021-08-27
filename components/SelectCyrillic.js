/* eslint-disable prettier/prettier */
import React from 'react';
import RusCyrillic from './RusCyrillic.js';
import Ukrainian from './Ukrainian.js';
import Bulgarian from './Bulgarian.js';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

const SelectCyrillic = props => {
  const selectAnAlph = chosenAlph => {
    props.setAlphIsPicked(true);
    props.setAlphabet(chosenAlph);
  };

  return (
    <View style={styles.container}>
        <TouchableOpacity
          style={styles.selecterButton}
          onPress={() => selectAnAlph(Bulgarian)}>
          <Text style={styles.buttonText}>Bulgarian</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.selecterButton}
          onPress={() => selectAnAlph(RusCyrillic)}>
          <Text style={styles.buttonText}>Russian</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.selecterButton}
          onPress={() => selectAnAlph(Ukrainian)}>
          <Text style={styles.buttonText}>Ukrainian</Text>
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

export default SelectCyrillic;
