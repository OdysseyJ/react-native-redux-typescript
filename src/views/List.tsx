import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {Button} from 'react-native';
import {Text, View} from 'react-native';
import {RootStackParamList} from '../navigation/StackNavigator';

type ListScreenNavigationProp = StackNavigationProp<RootStackParamList, 'List'>;

type Props = {
  navigation: ListScreenNavigationProp;
};

const List: React.FC<Props> = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Details Screen</Text>
      <Button title="go Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
};

export default List;
