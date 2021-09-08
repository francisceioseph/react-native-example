import React from 'react';
import {Alert, Button, FlatList, StyleSheet, Text, View} from 'react-native';
import posts from '../../data/contacts.json';

type TContact = {
  name: string;
  email: string;
  telephone: string;
};

const TelephoneListExample = () => {
  const handleCall = (contact: TContact) => {
    Alert.alert(`Calling "${contact.telephone}"...`);
  };

  return (
    <FlatList
      data={posts}
      keyExtractor={contact => contact.telephone}
      renderItem={({item: contact}) => {
        return (
          <View style={styles.itemContent}>
            <View>
              <Text style={styles.name}>{contact.name}</Text>
              <Text style={styles.email}>{contact.email}</Text>
              <Text style={styles.telephone}>{contact.telephone}</Text>
            </View>
            <View style={styles.buttons}>
              <Button
                title="Call Me"
                color="#E4572E"
                onPress={() => handleCall(contact)}
              />
            </View>
          </View>
        );
      }}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
    />
  );
};

const styles = StyleSheet.create({
  itemContent: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'stretch',
    justifyContent: 'space-between',
    padding: 8,
    paddingHorizontal: 16,
  },
  name: {
    textTransform: 'capitalize',
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 16,
    color: '#282828',
  },
  email: {
    fontSize: 16,
    marginBottom: 8,
    color: 'blue',
  },
  telephone: {
    fontSize: 16,
    marginBottom: 8,
    color: '#282828',
  },
  separator: {
    height: 1,
    backgroundColor: '#E2E2E2',
    margin: 8,
  },
  buttons: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default TelephoneListExample;
