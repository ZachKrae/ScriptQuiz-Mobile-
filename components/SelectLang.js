import React from 'react';
import Arabic from './Arabic.js';
import Armenian from './Armenian.js';
import Georgian from './Georgian.js';
import Greek from './Greek.js';
import Persian from './Persian.js';
import RusCyrillic from './RusCyrillic.js';
import Katakana from './Katakana.js';
import Hiragana from './Hiragana.js';
import Hebrew from './Hebrew.js';
import Tibetan from './Tibetan.js';
import Tifinagh from './Tifinagh.js';
import Devanagari from './Devanagari.js';
import Korean from './Korean.js';
import Cherokee from './Cherokee.js';
import Thai from './Thai.js';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

const SelectLang = props => {
  const selectAnAlph = chosenAlph => {
    props.setAlphIsPicked(true);
    props.setAlphabet(chosenAlph);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headingText}>Select a Script to Practice:</Text>
      <ScrollView>
        <TouchableOpacity
          style={styles.selecterButton}
          onPress={() => selectAnAlph(Arabic)}>
          <Text style={styles.buttonText}>Arabic</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.selecterButton}
          onPress={() => selectAnAlph(Armenian)}>
          <Text style={styles.buttonText}>Armenian</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.selecterButton}
          onPress={() => selectAnAlph(Cherokee)}>
          <Text style={styles.buttonText}>Cherokee</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.selecterButton}
          onPress={() => selectAnAlph(Devanagari)}>
          <Text style={styles.buttonText}>Devanagari</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.selecterButton}
          onPress={() => selectAnAlph(Georgian)}>
          <Text style={styles.buttonText}>Georgian (Mkhedruli)</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.selecterButton}
          onPress={() => selectAnAlph(Greek)}>
          <Text style={styles.buttonText}>Greek</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.selecterButton}
          onPress={() => selectAnAlph(Hebrew)}>
          <Text style={styles.buttonText}>Hebrew</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.selecterButton}
          onPress={() => selectAnAlph(Hiragana)}>
          <Text style={styles.buttonText}>Japanese (Hiragana)</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.selecterButton}
          onPress={() => selectAnAlph(Katakana)}>
          <Text style={styles.buttonText}>Japanese (Katakana)</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.selecterButton}
          onPress={() => selectAnAlph(Korean)}>
          <Text style={styles.buttonText}>Korean</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.selecterButton}
          onPress={() => selectAnAlph(Persian)}>
          <Text style={styles.buttonText}>Persian</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.selecterButton}
          onPress={() => selectAnAlph(RusCyrillic)}>
          <Text style={styles.buttonText}>Cyrillic (Russian)</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.selecterButton}
          onPress={() => selectAnAlph(Thai)}>
          <Text style={styles.buttonText}>Thai</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.selecterButton}
          onPress={() => selectAnAlph(Tibetan)}>
          <Text style={styles.buttonText}>Tibetan (Wylie)</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.selecterButton}
          onPress={() => selectAnAlph(Tifinagh)}>
          <Text style={styles.buttonText}>Tifinagh</Text>
        </TouchableOpacity>
      </ScrollView>
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

export default SelectLang;
