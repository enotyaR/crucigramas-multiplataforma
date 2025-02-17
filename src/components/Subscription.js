import React from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

const Subscription = () => {
  const handleSubscribe = () => {
    Alert.alert('¡Gracias por suscribirte!');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Suscríbete para recibir actualizaciones</Text>
      <TextInput
        style={styles.input}
        placeholder="Tu correo electrónico"
        keyboardType="email-address"
      />
      <Button title="Suscribirse" onPress={handleSubscribe} color="#6200ea" />
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
    color: '#333',
    marginBottom: 10
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10
  }
});

export default Subscription;
