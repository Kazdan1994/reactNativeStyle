import React from 'react';
import {Text} from 'react-native';
import styles from '../../App.scss';

const PrimaryButton = ({children}) => {
  return <Text className={styles.text}>{children}</Text>;
};

export default PrimaryButton;
