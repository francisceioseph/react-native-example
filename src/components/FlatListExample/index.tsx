import React from 'react';
import {Alert, Button, FlatList, StyleSheet, Text, View} from 'react-native';
import posts from '../../data/posts.json';

const FlatListExample = () => {
  const handleLike = (post: any) => {
    Alert.alert(`You liked "${post.title}"`);
  };

  const handleDislike = (post: any) => {
    Alert.alert(`You disliked "${post.title}"`);
  };

  return (
    <FlatList
      data={posts}
      keyExtractor={item => `${item.id}`}
      renderItem={({item: post}) => {
        return (
          <View style={styles.itemContent}>
            <Text style={styles.itemTitle}>{post.title}</Text>
            <Text style={styles.itemBody}>{post.body}</Text>
            <View style={styles.buttons}>
              <Button title="Like" onPress={() => handleLike(post)} />
              <Button
                title="Dislike"
                color="#E4572E"
                onPress={() => handleDislike(post)}
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
    padding: 8,
  },
  itemTitle: {
    textTransform: 'capitalize',
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 16,
    color: '#282828',
  },
  itemBody: {
    paddingLeft: 8,
    paddingRight: 24,
    fontSize: 16,
    textAlign: 'justify',
  },
  separator: {
    height: 1,
    backgroundColor: '#E2E2E2',
    margin: 8,
  },
  buttons: {
    marginTop: 16,
    marginRight: 16,
    flexDirection: 'row',
  },
});

export default FlatListExample;
