import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Game = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Crucigrama del Día</Text>
      <Text>El juego de crucigramas estará aquí.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    width: '100%',
    marginBottom: 20
  },
  title: {
    fontSize: 24,
    color: '#333'
  }
});

export default Game;
