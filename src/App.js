import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Game from './components/Game';
import Leaderboard from './components/Leaderboard';
import Subscription from './components/Subscription';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <Text style={styles.title}>Crucigramas Diarios</Text>
        <Game />
        <Leaderboard />
        <Subscription />
        <StatusBar style="auto" />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f9'
  },
  scrollView: {
    alignItems: 'center',
    padding: 20
  },
  title: {
    fontSize: 30,
    color: '#6200ea',
    marginBottom: 20
  }
});
