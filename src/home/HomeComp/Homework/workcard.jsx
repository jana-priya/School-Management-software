import { View, Text, Image, Dimensions, TouchableOpacity,FlatList } from 'react-native'
import React from 'react'
const { width, height } = Dimensions.get('window');
import { useNavigation } from '@react-navigation/native'

import { SafeAreaView } from 'react-native-safe-area-context'
import Head from '../Head';
import { DataOfScl } from '../../../theme';

export default function Workcard({ item }) {
    
    
    
    
    
    
        const DATA = [
          DataOfScl.School_DATA.Classes.Class11th.HomeWork
        
      ];


    
    
    
    const Navigation = useNavigation();


    function Work(item) { 
      return (

            <><View>
            <Text className=" text-xl font-bold mt-2">English</Text>
            <Text className="mt-2 mb-5 text-base text-justify">{item.item[0].English}</Text>
            <Text className="text-center">_________________________________________________</Text>
          </View><View>
              <Text className=" text-xl font-bold mt-2">Tamil</Text>
              <Text className="mt-2 mb-5 text-base text-justify">{item.item[0].Tamil}</Text>
              <Text className="text-center">_________________________________________________</Text>
            </View><View>
              <Text className=" text-xl font-bold mt-2">Maths</Text>
              <Text className="mt-2 mb-5 text-base text-justify">{item.item[0].Maths}</Text>
              <Text className="text-center">_________________________________________________</Text>
            </View><View>
              <Text className=" text-xl font-bold mt-2">English</Text>
              <Text className="mt-2 mb-5 text-base text-justify">{item.item[0].Science}</Text>
              <Text className="text-center">_________________________________________________</Text>
            </View><View>
              <Text className=" text-xl font-bold mt-2">Social</Text>
              <Text className="mt-2 mb-5 text-base text-justify">{item.item[0].Social}</Text>
              <Text className="text-center">_________________________________________________</Text>
            </View></>
        )
    }



    return (
        <SafeAreaView className="flex " style={{ marginHorizontal: 20, marginTop: 10, marginBottom: 20 }}>
            


                <Head />




                <View className="flex-row items-center bg-white p-3 rounded-3xl shadow-2xl mb-3 space-x-7">
                    {/* <Image className="" style={{ height: 90, width: 90 }} borderRadius={100} source={require('../../../img/notif.png')} /> */}
                    <View className="flex flex-1 space-y-3">
                        <View className="pl-3">
                            <Text className="text-xl">HOME WORK</Text>
                            <Text className="text-sm text-green-500">{DATA[0].Date}</Text>
                        </View>
                        
                        <FlatList showsVerticalScrollIndicator={false}
                            data={DATA}
                            renderItem={({ item }) => <Work item={DATA}/>}
                            keyExtractor={item => item.id}
                            style={{ height: '88%' }}
                        />
                    </View>
                </View>
        </SafeAreaView>

    )
}