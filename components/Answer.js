import React, { useState } from 'react'
import { TouchableHighlight, View, Text, StyleSheet } from 'react-native';
// import useSound from "react-native-use-sound";
        
function Answer(props) {
    // const [play] = useSound(props.sound);

    const doTheClick = () => {
        props.handleAnswerButtonClick(props.latinLetter)
        // play();
    }

    return (
        <View>
            <TouchableHighlight 
                style={styles.answerButton}
                underlayColor={'orange'} 
                onPress={() => doTheClick()}>
                <Text style={styles.buttonText}>{props.latinLetter}</Text>
            </TouchableHighlight>
        </View>
    )
}

const styles = StyleSheet.create({
	answerButton: {
		alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        margin: 6,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: '#30A6E7',
        color: 'white',
		width: 100,
	},
    buttonText: {
		fontSize: 16,
		fontWeight: 'bold',
		letterSpacing: 0.25,
		color: 'white',
		},
  });  

export default Answer