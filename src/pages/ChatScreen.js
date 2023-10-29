import { useRoute } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { View, Text } from 'react-native';

const ChatScreen = () => {
  const param = useRoute().params;

  useEffect(() => {
    console.log(param);
  });

  return (
    <View>
      <Text>ChatScreen</Text>
    </View>
  );
};

export default ChatScreen;
