import React, {useMemo, useState} from 'react';
import {Text, View, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import Answer from './Answer';
import ScorePage from './ScorePage';

export default function Game(props) {
  const arrayLength = props.alphabet.length;

  // returns unique values to avoid duplicate answer options
  const uniqueNums = [];
  while (uniqueNums.length < 4) {
    var r = Math.floor(Math.random() * Math.floor(arrayLength - 1));
    if (uniqueNums.indexOf(r) === -1) {
      uniqueNums.push(r);
    }
  }

  const [currentQuestion, setCurrentQuestion] = useState(uniqueNums[0]);
  const [pickedTwo, setPickedTwo] = useState(uniqueNums[1]);
  const [pickedThree, setPickedThree] = useState(uniqueNums[2]);
  const [pickedFour, setPickedFour] = useState(uniqueNums[3]);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [answeredQs, setAnsweredQs] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');

  //set selected answer
  const handleAnswerButtonClick = picked => {
    setSelectedAnswer(picked);
  };

  //end game and show score
  const finishGame = () => {
    setShowScore(true);
  };

  //ends game and returns to selection menu
  const backToMenu = () => {
    props.setAlphIsPicked(false);
    setAnsweredQs(0);
  };

  //restarts game with previously selected writing system
  const restartGame = () => {
    setShowScore(false);
    setCurrentQuestion(0);
    setScore(0);
    setAnsweredQs(0);
    setCurrentQuestion(uniqueNums[0]);
    setPickedTwo(uniqueNums[1]);
    setPickedThree(uniqueNums[2]);
    setPickedFour(uniqueNums[3]);
  };

  //evaluates if selected answer is correct or incorrect
  const evalAnswer = ans => {
    const nextQuestion = Math.floor(Math.random() * props.alphabet.length);
    if (ans === props.alphabet[currentQuestion].latin) {
      // eslint-disable-next-line no-alert
      alert('Correct!');
      setScore(score + 1);
      setCurrentQuestion(nextQuestion);
      setPickedTwo(uniqueNums[1]);
      setPickedThree(uniqueNums[2]);
      setPickedFour(uniqueNums[3]);
      setAnsweredQs(answeredQs + 1);
      setSelectedAnswer('');
    } else {
      setCurrentQuestion(nextQuestion);
      setPickedTwo(uniqueNums[1]);
      setPickedThree(uniqueNums[2]);
      setPickedFour(uniqueNums[3]);
      setAnsweredQs(answeredQs + 1);
      setSelectedAnswer('');
    }
  };

  //shuffles the answers for each question
  var shuffle = require('shuffle-array');
  const shuffledAnswers = useMemo(() => {
    var answerKey = [
      props.alphabet[currentQuestion],
      props.alphabet[pickedTwo],
      props.alphabet[pickedThree],
      props.alphabet[pickedFour],
    ];
    return shuffle(answerKey);
  }, [
    currentQuestion,
    pickedFour,
    pickedThree,
    pickedTwo,
    props.alphabet,
    shuffle,
  ]);

  return (
    <View style={styles.container}>
      {showScore ? (
        <ScorePage
          score={score}
          answeredQs={answeredQs}
          restartGame={restartGame}
          backToMenu={backToMenu}
        />
      ) : (
        <View style={styles.container}>
          <Text style={styles.headingText}>Question {answeredQs + 1}</Text>
          <Text style={styles.headingText}>
            Match the letter with its latin equivalent:
          </Text>
          <Text style={styles.letterSpace}>
            {props.alphabet[currentQuestion].name}
          </Text>
          <View style={styles.positionSpace}>
            {props.alphabet[currentQuestion].position && (
              <Text style={styles.headingText}>
                {props.alphabet[currentQuestion].position} position
              </Text>
            )}
          </View>

          {/* array of possible answers, in grid form */}
          <FlatList
            contentContainerStyle={styles.grid}
            numColumns={2}
            data={shuffledAnswers}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item}) => {
              return (
                <Answer
                  style={styles.item}
                  handleAnswerButtonClick={handleAnswerButtonClick}
                  sound={item.sound}
                  latinLetter={item.latin}
                />
              );
            }}
          />

          <TouchableOpacity
            style={styles.submitButton}
            onPress={() => evalAnswer(selectedAnswer)}>
            <Text style={styles.headingText}>Submit</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.commandButton} onPress={finishGame}>
            <Text style={styles.headingText}>Finish Game</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    textAlign: 'center',
    marginVertical: 2,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#30A6E7',
    color: 'white',
    width: 100,
    margin: 5,
  },
  container: {
    flex: 1,
    height: '50%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 100,
  },
  headingText: {
    fontSize: 16,
    // lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  letterSpace: {
    paddingVertical: 12,
    fontSize: 75,
    fontWeight: 'bold',
    color: 'white',
  },
  grid: {
    marginBottom: 32,
    marginTop: 16,
    height: 120,
    width: '100%',
    alignItems: 'center',
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
  submitButton: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    marginBottom: 100,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#30A6E7',
    color: 'white',
    width: 200,
  },
  positionSpace: {
    height: 20,
  },
});
