import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const leaderboard = [
  { name: "Ana", score: 120 },
  { name: "Luis", score: 95 },
  { name: "Marta", score: 85 }
];

const Leaderboard = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tabla de Líderes</Text>
      {leaderboard.map((player, index) => (
        <Text key={index}>{player.name} - {player.score} puntos</Text>
      ))}
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

export default Leaderboard;
