import { View, Text, Image, Dimensions, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
const { width, height } = Dimensions.get('window');
import { useNavigation } from '@react-navigation/native'

import { SafeAreaView } from 'react-native-safe-area-context'
import Head from '../Head';

export default function Reportcard({ item }) {






  const DATA = [
    {
      id: 'bd7acbea-c1b1-46cs2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48dd3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471df-bd96-145571e29d72',
      title: 'Third Item',
    },
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
  ];





  const Navigation = useNavigation();


  function Work() {
    return (
      <View>
        <Text className=" text-xl font-bold mt-2">English - <Text className="text-xl font-extrabold to-blue-500">96</Text> </Text>
        <Text className="text-center">_________________________________________________</Text>
      </View>
    )
  }



  return (
    <SafeAreaView className="flex " style={{ marginHorizontal: 20, marginTop: 10, marginBottom: 20 }}>



      <Head />




      <View className="flex-row items-center bg-white p-3 rounded-3xl shadow-2xl mb-3 mx-2 space-x-7">
        {/* <Image className="" style={{ height: 90, width: 90 }} borderRadius={100} source={require('../../../img/notif.png')} /> */}
        <View className="flex flex-1 space-y-3">
          <View className="pl-3">
            <Text className="text-xl">1st mid-term test</Text>
            <Text className="text-sm text-green-500">21/05/2023</Text>
          </View>

          <FlatList showsVerticalScrollIndicator={false}
            data={DATA}
            renderItem={({ item }) => <Work />}
            keyExtractor={item => item.id}
            style={{ height: '46%' }}
          />
          <View>
            <Text className=" text-xl font-bold mt-2">Total - <Text className="text-xl font-extrabold text-blue-500">480</Text> </Text>
            <Text className="text-center">_________________________________________________</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>

  )
}