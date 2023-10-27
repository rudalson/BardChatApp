import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import ChatFaceData from '../services/ChatFaceData';

const HomeScreen = () => {
  const chatFaceData = ChatFaceData;
  const [selectedChatFaceData, setSelectedChatFaceData] = useState();

  useEffect(() => {
    console.log(chatFaceData[0]);
    setSelectedChatFaceData(chatFaceData[0]);
  }, []);

  return (
    <View style={{ alignItems: 'center', paddingTop: 90 }}>
      <Text style={[{ color: selectedChatFaceData.primary }, { fontSize: 30 }]}>
        Hello
      </Text>
      <Text
        style={[
          { color: selectedChatFaceData.primary },
          { fontSize: 30, fontWeight: 'bold' },
        ]}
      >
        I am {selectedChatFaceData?.name}
      </Text>
    </View>
  );
};

export default HomeScreen;
