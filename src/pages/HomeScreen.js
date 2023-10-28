import React, { useEffect, useState } from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import ChatFaceData from '../services/ChatFaceData';

const HomeScreen = () => {
  const [selectedChatFaceData, setSelectedChatFaceData] = useState(
    ChatFaceData[0]
  );

  useEffect(() => {
    console.log(ChatFaceData[0]);
  }, []);

  const onChatFacePress = (id) => {
    setSelectedChatFaceData(ChatFaceData[id]);
  };

  return (
    <View style={{ alignItems: 'center', paddingTop: 90 }}>
      <Text style={[{ color: selectedChatFaceData.primary }, { fontSize: 30 }]}>
        Hello
      </Text>
      <Text
        style={[
          { color: selectedChatFaceData?.primary },
          { fontSize: 30, fontWeight: 'bold' },
        ]}
      >
        I am {selectedChatFaceData?.name}
      </Text>

      <Image
        source={{
          uri: selectedChatFaceData.image,
        }}
        style={{ width: 150, height: 150, marginTop: 20 }}
      />
      <Text style={{ marginTop: 30, fontSize: 25 }}>How Can I help you?</Text>

      <View
        style={{
          marginTop: 20,
          backgroundColor: '#f5f5f5',
          alignItems: 'center',
          height: 110,
          padding: 10,
          borderRadius: 10,
        }}
      >
        <FlatList
          data={ChatFaceData}
          horizontal
          renderItem={({ item }) =>
            selectedChatFaceData.id !== item.id && (
              <TouchableOpacity
                style={{ margin: 15 }}
                onPress={() => {
                  onChatFacePress(item.id);
                }}
              >
                <Image
                  source={{ uri: item.image }}
                  style={{ width: 40, height: 40 }}
                />
              </TouchableOpacity>
            )
          }
        />
        <Text style={{ marginTop: 5, fontSize: 17, color: '#B0B0B0' }}>
          Choose Your Fav ChatBuddy
        </Text>
      </View>
      <TouchableOpacity
        style={[
          { backgroundColor: selectedChatFaceData.primary },
          {
            padding: 17,
            width: Dimensions.get('screen').width * 0.6,
            borderRadius: 100,
            alignItems: 'center',
            marginTop: 30,
          },
        ]}
      >
        <Text style={{ fontSize: 16, color: '#fff' }}>Let's Chat</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
