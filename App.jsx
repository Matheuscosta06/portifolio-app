import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, Image, ScrollView } from 'react-native';

export default function Portfolio() {
  const arrproject = [{
    id: 9,
    img: require("./src/img/games.jpg"),
    name: "GamesOC",
    descricao: "feito em grupo, um site de jogos que apresenta uma lista de jogos e suas informações",
  },
  {
    id: 6,
    img: require("./src/img/royale.jpg"),
    name: "RoyaleOC",
    descricao: "feito em grupo, um site do jogo CLASH ROYALE que apresenta informações sobre o jogo",
  }];
  
  return (
    <View className="flex-1 bg-black p-8">
      <View>
        <Image className="rounded-full ring-2 h-52 w-52 mx-auto" source={require("./src/img/ftdopai.jpeg")} />
        <Text className="text-white mx-auto p-2 font-bold text-xl">Matheus Zambon Da Costa</Text>
        <Text className="text-white text-center font-bold">Aluno de Desenvolvimento de Sistemas no SENAI cursando 3°semestre</Text>
        <Text className="text-white mx-auto p-2 font-bold">Sou Matheus, uma pessoa determinada e curiosa, apaixonada por desafios. Valorizo relacionamentos, sou leal e comprometido.</Text>
      </View>
      <ScrollView>
        <Text className="text-white mx-auto p-12 font-bold text-3xl">Projetos:</Text>
        {arrproject.map((item) => (
          <View key={item.id} className="bg-white m-4 p-4 rounded-2xl">
            <Image className="h-52 w-52 mx-auto" source={item.img} />
            <Text className="text-black mx-auto p-2 font-bold text-xl">{item.name}</Text>
            <Text className="text-black mx-auto p-2 font-bold">{item.descricao}</Text>
          </View>
        ))}
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}