import React from 'react'
import { TouchableHighlight, View, Text, StyleSheet } from 'react-native';

function Answer(props) {
    return (
        <View 
        // onClick={play}
        >
            <TouchableHighlight 
                style={styles.answerButton}
                underlayColor={'orange'} 
                onPress={() => props.handleAnswerButtonClick(props.latinLetter)}>
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