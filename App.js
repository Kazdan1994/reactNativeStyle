import React from 'react';
import {Text, StyleSheet} from 'react-native';
import styled from 'styled-components/native';

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
      <Text style={styles.text}>I'm style with style property</Text>
    </StyledView>
  );
};

const styles = StyleSheet.create({
  text: {
    backgroundColor: 'blue',
  },
});

export default App;
