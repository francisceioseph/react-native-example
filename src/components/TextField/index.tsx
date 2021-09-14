import React from 'react';
import {StyleSheet, Text, TextInput, TextInputProps, View} from 'react-native';

interface TextFieldProps extends TextInputProps {
  label: string;
  error?: string;
}

const TextField = ({label, error, ...inputProps}: TextFieldProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput {...inputProps} style={styles.input} />
      <Text style={styles.error}>{error}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '90%',
    marginHorizontal: 16,
    marginVertical: 14,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333333',
  },
  input: {
    padding: 8,
    fontSize: 20,
    borderColor: '#CCCCCC',
    borderWidth: 1,
    borderRadius: 8,
  },
  error: {
    fontSize: 14,
    marginTop: 8,
    color: 'red',
  },
});

export default TextField;
