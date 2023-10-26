import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import ChatFaceData from '../services/ChatFaceData';

const HomeScreen = () => {
  const [chatFaceData] = useState(ChatFaceData);
  const [selectedChatFaceData, setSelectedChatFaceData] = useState();

  useEffect(() => {
    console.log(chatFaceData[0]);
    setSelectedChatFaceData(chatFaceData[0]);
  }, []);

  return (
    <View>
      <Text>HomeScreen</Text>
      <Text>I am {selectedChatFaceData.name}</Text>
    </View>
  );
};

export default HomeScreen;
