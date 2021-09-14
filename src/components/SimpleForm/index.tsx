import {yupResolver} from '@hookform/resolvers/yup';
import React, {useEffect} from 'react';
import {useForm} from 'react-hook-form';
import {Alert, Button, StyleSheet, View} from 'react-native';
import * as yup from 'yup';
import TextField from '../TextField';

const SimpleForm = () => {
  const formSchema = yup.object().shape({
    name: yup
      .string()
      .required('Name field cannot be blank')
      .min(3, 'Name must have at least 3 characters'),
    age: yup
      .string()
      .required('Age cannot be blank')
      .matches(/^\d+$/, 'Must be a integer number'),
    weight: yup
      .string()
      .required('Weight cannot be blank')
      .matches(/^\d+$/, 'Must be a integer number'),
  });

  const {
    register,
    setValue,
    handleSubmit,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  useEffect(() => {
    register('name');
    register('age');
    register('weight');
  }, [register]);

  const handleSubmitButtonPress = () => {
    Alert.alert('Submitted!!!');
  };

  return (
    <View style={styles.container}>
      <TextField
        label="Nome"
        error={errors.name?.message}
        onChangeText={text => setValue('name', text)}
      />
      <TextField
        label="Idade"
        keyboardType="numeric"
        error={errors.age?.message}
        onChangeText={text => setValue('age', text)}
      />
      <TextField
        label="Peso"
        keyboardType="numeric"
        error={errors.weight?.message}
        onChangeText={text => setValue('weight', text)}
      />
      <View style={styles.button}>
        <Button
          title="Submit"
          onPress={handleSubmit(handleSubmitButtonPress)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },

  button: {
    width: '100%',
    padding: 16,
    justifyContent: 'center',
  },
});

export default SimpleForm;
