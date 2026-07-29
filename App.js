import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import FitnessWorld from './FitnessWorld'

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
     <FitnessWorld/> 
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
	container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'black',
  },
  section: {
    marginBottom: 20,
  },

 header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#ff7f00', 
  },
  headerbenefit:{
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color:'white'
  },
  text: {
    fontSize: 16,
    marginBottom: 5,
    color: '#fff',
  },
 workoutDescp:{
 textAlign:'center'
  },
})