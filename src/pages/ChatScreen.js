import { useRoute } from '@react-navigation/native';
import React, { useEffect, useState, useCallback } from 'react';
import { View, Text } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';

import GlobalApi from '../services/GlobalApi';

const ChatScreen = () => {
  const param = useRoute().params;
  const [messages, setMessages] = useState([]);
  const [selectedChatFace, setSelectedChatFace] = useState([]);

  useEffect(() => {
    console.log(param);
    setSelectedChatFace(param.selectedFace);
    setMessages([
      {
        _id: 1,
        text: 'Hello ' + param.selectedFace?.name,
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: param.selectedFace?.image,
        },
      },
    ]);
  }, []);

  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages)
    );

    if (messages[0].text) {
      getBardResp(messages[0].text);
    }
  }, []);

  const getBardResp = (msg) => {
    GlobalApi.getBardApi(msg).then((resp) => {
      console.log(resp);
    });
  };

  return (
    <View style={{ flex: 1 }}>
      <GiftedChat
        messages={messages}
        onSend={(messages) => onSend(messages)}
        user={{
          _id: 1,
        }}
      />
    </View>
  );
};

export default ChatScreen;
