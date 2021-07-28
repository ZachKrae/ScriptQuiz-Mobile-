import React from 'react'
import { View, Text, StyleSheet } from 'react-native';

function ResultFaces(props) {

    if (props.myTrunc == 100 ) {
        return (
            <View>
                <View style={styles.face}>
                    <View style={styles.eyeRow}>
                        <View style={styles.wow}></View>
                        <View style={styles.wow}></View>
                    </View>
                    <View style={styles.wow}></View>
                </View>
                <Text style={styles.judgementText}>PERFECT!</Text>
            </View>
        )
    } else if (props.myTrunc < 100 && props.myTrunc > 65 ) {
        return (
            <View>
                <View style={styles.face}>
                    <View style={styles.eyeRow}>
                        <View style={styles.eye}></View>
                        <View style={styles.eye}></View>
                    </View>
                    <View style={styles.smile}></View>
                </View>
                <Text style={styles.judgementText}>Not bad!</Text>
            </View>
        )
    }else if (props.myTrunc < 65 && props.myTrunc > 25 ) {
        return (
            <View>
                <View style={styles.face}>
                    <View style={styles.eyeRow}>
                        <View style={styles.eye}></View>
                        <View style={styles.eye}></View>
                    </View>
                    <View style={styles.frown}></View>
                </View>
                <Text style={styles.judgementText}>Not good</Text>
            </View>
        )
    }
    return (
        <View>
            <View style={styles.angryFace}>
                <View style={styles.eyeRow}>
                    <View style={styles.angryEyeLeft}></View>
                    <View style={styles.angryEyeRight}></View>
                </View>
                <View style={styles.angryMouth}></View>
            </View>
            <Text style={styles.judgementText}>Awful!</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    face: {
        alignSelf: 'center',
        paddingVertical: 25,
        borderRadius: 75,
        backgroundColor: 'white',
        width: 120,
        height: 120,
    },
    angryFace: {
        alignSelf: 'center',
        paddingVertical: 25,
        borderRadius: 75,
        backgroundColor: '#DA0000',
        width: 120,
        height: 120,
    },
    eye: {
        alignSelf: 'center',
        borderRadius: 75,
        backgroundColor: '#252d4a',
        paddingHorizontal: 2,
        width: 25,
        height: 25,
    },
    eyeRow: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
      },
    smile: {
        alignSelf: 'center',
        borderTopStartRadius: 0,
        borderBottomEndRadius: 75,
        borderBottomStartRadius: 75,
        backgroundColor: '#252d4a',
        width: 50,
        height: 20,
    },
    frown: {
        alignSelf: 'center',
        borderTopStartRadius: 75,
        borderTopEndRadius: 75,
        borderBottomEndRadius: 0,
        borderBottomStartRadius: 0,
        backgroundColor: '#252d4a',
        width: 50,
        height: 20,
    },
    judgementText: {
        justifyContent: 'center',
        textAlign: 'center',
		fontSize: 40,
        paddingVertical: 10,
		fontWeight: 'bold',
		letterSpacing: 0.25,
		color: 'white',
		},
    angryEyeLeft: {
        width: 20,
        height: 20,
        backgroundColor: "transparent",
        borderStyle: "solid",
        borderRightWidth: 20,
        borderTopWidth: 20,
        borderRightColor: "transparent",
        borderTopColor: '#252d4a',
        transform: [{ rotate: "270deg" }],
    },
    angryEyeRight: {
        width: 20,
        height: 20,
        backgroundColor: "transparent",
        borderStyle: "solid",
        borderRightWidth: 20,
        borderTopWidth: 20,
        borderRightColor: "transparent",
        borderTopColor: '#252d4a',
        transform: [{ rotate: "180deg" }],
    },
    angryMouth: {
        alignSelf: 'center',
        borderTopStartRadius: 75,
        borderTopEndRadius: 75,
        borderBottomEndRadius: 75,
        borderBottomStartRadius: 75,
        backgroundColor: '#252d4a',
        width: 50,
        height: 20,
    },
    wow: {
        alignSelf: 'center',
        borderTopStartRadius: 100,
        borderTopEndRadius: 100,
        borderBottomEndRadius: 100,
        borderBottomStartRadius: 100,
        backgroundColor: '#252d4a',
        width: 35,
        height: 35,
    },
  }); 

export default ResultFaces