import React, { Component } from "react";
import {
  CircleButton,
  ButtonSeguir,
  ButtonImagens,
  ButtonVideos,
} from "../../../components/Button";
import { assets } from "../../../../constants";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

const profileAsh = ({ navigation }) => {
  return (
    <View>
      <View>
        <Image
          source={assets.backgroundAsh}
          style={styles.backgroundImg}
        />
      </View>

      <View style={styles.circleButton}>
        <CircleButton
          imgUrl={assets.next}
          onPress={() => navigation.goBack()}
        />
      </View>

      <View>
        <TouchableOpacity
          onPress={() => navigation.navigate("MessagesScreenAsh")}
          style={styles.buttonMessage}
        >
          <Text style={styles.textMessage}>Mensagem</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.containerProfile}>
        <Image
          source={assets.imgAsh}
          style={{ borderRadius: 50, width: 95, height: 95, marginTop: 60 }}
        />
        <Text style={styles.textUsername}>Ash</Text>
        <Text style={styles.textName}>Ashley Pereira</Text>
      </View>

      <View style={{width: '100%', height: 90, marginLeft: 70, marginTop: 15, flexDirection: 'row', paddingVertical: 5}}>
              <Text style={{marginLeft: -19, fontSize: 15, color: '#898989'}}>Seguidores</Text>
              <Text style={{paddingHorizontal: 50, fontSize: 15, color: '#898989'}}>Posts</Text>
              <Text style={{ fontSize: 15, color: '#898989'}}>Seguindo</Text>
                <View style={{flexDirection: 'row', paddingTop: 20}}>
                    <Text style={{paddingHorizontal: 10, right: 271, fontSize: 17, fontWeight: '600'}}>50</Text>
                    <Text style={{right: 175, fontSize: 17, fontWeight: '600'}}>3</Text>
                    <Text style={{paddingHorizontal: 10, right: 100, fontSize: 17, fontWeight: '600'}}>70</Text>
                </View>
          </View>

      <ButtonSeguir />

      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "row",
          marginTop: 20,
        }}
      >
        <ButtonImagens onPress={() => navigation.navigate("#")} />
        <ButtonVideos onPress={() => navigation.navigate("ProfileVideoAsh")} />
      </View>

      <View>
        <TouchableOpacity onPress={() => navigation.navigate("feedPostAsh")}>
          <Image
            source={assets.postAsh01}
            style={{ marginTop: 10, marginLeft: 25 }}
          />

          <Image
            source={assets.postAsh02}
            style={{ marginLeft: 260, marginTop: -172 }}
          />

          <Image
            source={assets.postAsh03}
            style={{ marginLeft: 260, marginTop: 9 }}
          />

        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  circleButton: {
    marginTop: -160,
    right: 330,
    transform: [{ rotate: "180deg" }],
  },
  backgroundImg: {
    width: 395,
    marginTop: 28,
  },
  buttonMessage: {
    width: 95,
    backgroundColor: "#ACD3FC",
    padding: 8,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 290,
    marginTop: -45,
  },
  textMessage: {
    fontWeight: "600",
    fontSize: 15,
  },
  containerProfile: {
    alignItems: "center",
    justifyContent: "center",
  },
  textUsername: {
    fontSize: 22,
    fontWeight: "450",
  },
  textName: {
    fontSize: 17,
    color: "#7D7979",
  },
});

export default profileAsh;
