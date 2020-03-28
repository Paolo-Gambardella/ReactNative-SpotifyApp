import { AsyncStorage } from 'react-native';

export const storeData = async (key, data) => {
  await AsyncStorage.setItem(`${key}`, data);
};

export const getData = async (key) => {
  const value = await AsyncStorage.getItem(`${key}`);
  return value;
};
