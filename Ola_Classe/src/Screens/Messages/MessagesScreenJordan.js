import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, Image, Text } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';
import { assets } from '../../../constants';
import { useNavigation } from '@react-navigation/native';

export default class MessagesScreenAsh extends Component {
  state = {
    messages: [],
  };
  componentWillMount() {
    if(!this.state.messages.length) {
      this.setState({ messages:  [
        {
         _id: Math.round(Math.random() * 1000000),
         text: '0 message',
         createdAt: new Date(),
         system: true
      }]})
    }
    this.setState({ messages:  [
      {
        _id: Math.round(Math.random() * 1000000),
        text: 'Qual e o comando pra criar a pasta do expo?',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'Jordan',
          avatar: 'https://raw.githubusercontent.com/Alexxmfs/App_Ola_Classe/logoOlaClasse/imgJordan.png'
        },
        sent: true,
        received: true
      },
      {
        _id: Math.round(Math.random() * 1000000),
        text: "You are officially rocking GiftedChat.",
        createdAt: new Date(),
        system: true,
      },
    ]});
  }

  onSend(messages = []) {
    this.setState((previousState) => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }));
  }

  //  https://stackoverflow.com/a/54550286/1458375
  render() {
    return (
      <>
      <View>
        <BackScreen />
      </View>
      {this.state.messages.length === 0 && (
        <View style={[
          StyleSheet.absoluteFill,
          {
            backgroundColor: 'white',
            justifyContent: 'center',
            alignItems: 'center',
            bottom: 50
          }]}>
          <Image 
            source={{ uri: 'https://i.stack.imgur.com/qLdPt.png' }}
            style={{
              ...StyleSheet.absoluteFillObject,
              resizeMode: 'contain'
            }}
          />
      </View>
      )}
      <GiftedChat
       messages={this.state.messages}
       onSend={(messages) => this.onSend(messages)}
       renderCustomView={this.renderCustomView}
       user={{
         _id: 1,
       }}
       parsePatterns={linkStyle => [
          {
            pattern: /#(\w+)/,
            style: { ...linkStyle, color: 'lightgreen' },
            onPress: props => alert(`press on ${props}`),
          },
        ]}
     />
     </>
    );
  }
}

export const BackScreen = () => {
  const navigation = useNavigation();
  return(
      <View>
            <View>
                    <View>
                        <TouchableOpacity onPress={() => navigation.goBack()}>

                            <Image 
                            source={assets.arrowBackChat}
                            style={{top: 50, marginLeft: 5}}
                            />
                         </TouchableOpacity>

                    </View>
                    
                        <View style={{flexDirection: 'row'}}>
                            <Image 
                            source={assets.imgJordan}
                            style={{width: 55, height: 55, marginLeft: 50, top: 5}}
                            />

                            <Text style={{
                                    fontWeight: '700',
                                    fontSize: 21,
                                    marginLeft: 20,
                                    marginTop: 12}}>
                                      Jordan
                            </Text>

                        </View>
          </View>
          
          <View style={{paddingTop: 10}}>
            <Image 
            source={assets.headerLine}
            style={{width: 395, alignItems: 'center', justifyContent: 'center'}}
            />
          </View>
    </View>
  );
}

const styles = StyleSheet.create({
    circleButton: {

  },
});