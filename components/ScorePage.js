import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import ResultFaces from './ResultFaces'

function ScorePage(props) {
    const [scorePercentage, setScorePercentage] = useState((props.score / props.answeredQs) * 100);
    var myTrunc = Math.trunc( scorePercentage );

    return (
        <View>
            <Text style={styles.headingText}>Final Score: {props.score} out of {props.answeredQs}</Text>
            {/* <Text style={styles.resultSpace}>{myTrunc}%</Text> */}
            <ResultFaces myTrunc={myTrunc} />
            <TouchableOpacity style={styles.commandButton} onPress={props.restartGame}>
                <Text style={styles.headingText}>Restart Game</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.commandButton} onPress={props.backToMenu}>
                <Text style={styles.headingText}>Back to Menu</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
	headingText: {
        textAlign: 'center',
		fontSize: 16,
        paddingBottom: 10,
		fontWeight: 'bold',
		letterSpacing: 0.25,
		color: 'white',
		},
	commandButton: {
		alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        marginVertical: 6,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: '#30A6E7',
        color: 'white',
        width: 200,
	},
    resultSpace: {
        textAlign: 'center',
		paddingVertical: 12,
		fontSize: 75,
		fontWeight: 'bold',
		color: 'white',
        borderColor: 'white',
        borderWidth: 5,
        borderRadius: 25,
	},
  }); 

export default ScorePage