import React from 'react';
import {Text, StyleSheet} from 'react-native';
import styled from 'styled-components/native';
import styles from "./App.scss";

const StyledView = styled.View`
  background-color: papayawhip;
`;

const StyledText = styled.Text`
  color: palevioletred;
`;

const App = () => {
  return (
    <StyledView>
      <StyledText>Hello World!</StyledText>
      <Text style={stylesheet.text}>I'm style with style property</Text>
      <Text style={styles.text}>I'm style with scss</Text>
      <Text className={styles.text}>I'm style with scss className</Text>
    </StyledView>
  );
};

const stylesheet = StyleSheet.create({
  text: {
    backgroundColor: 'blue',
  },
});

export default App;
