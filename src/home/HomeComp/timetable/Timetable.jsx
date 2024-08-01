import { View, Text, Image, Dimensions, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import Head from '../Head';
const { width, height } = Dimensions.get('window');

import  { useState } from 'react'

import { SafeAreaView } from 'react-native-safe-area-context'


export default function Timetable({ item }) {

    const Navigation = useNavigation()


    
    const mon = [
        {
            id: 'bd7acbea-c1b1-46cs2-aed5-3ad53abb28ba',
            title: 'First Item',
            count:1
        },
        {
            id: '3ac68afc-c605-48dd3-a4f8-fbd91aa97f63',
            title: 'Second Item',
            count:2
        },
        {
            id: '58694ta0f-3da1-471df-bd96-145571e29d72',
            title: 'Third Item',
            count:3
        },
        {
            id: 'bd7acbea-c1b1-46c2-daed5-3ad53abb28ba',
            title: 'First Item',
            count:4
        },
        {
            id: '3ac68afc-c605-48d3d-a4f8-fbd91aa97f63',
            title: 'Second Item',
            count:5
        },
        {
            id: '5869f4a0f-3da1-471f-dbd96-145571e29d72',
            title: 'Third Item',
            count:6
        },
        {
            id: '3ac68afc-c605-d48dd3-a4f8-fbd91aa97f63',
            title: 'Second Item',
            count:7
        },
        {
            id: '5869l4a0f-3dan1-47d1df-bd96-145571e29d72',
            title: 'Third Item',
            count:8
        }
    ];
    
    const tue = [
        {
            id: 'bd7acbea-c1b1-46cs2-aed5-3ad53abb28ba',
            title: 'Eng',
            count:1
        },
        {
            id: '3ac68afc-c605-48dd3-a4f8-fbd91aa97f63',
            title: 'phy',
            count:2
        },
        {
            id: '58694ta0f-3da1-471df-bd96-145571e29d72',
            title: 'mat',
            count:3
        },
        {
            id: 'bd7acbea-c1b1-46c2-daed5-3ad53abb28ba',
            title: 'PT',
            count:4
        },
        {
            id: '3ac68afc-c605-48d3d-a4f8-fbd91aa97f63',
            title: 'tamil',
            count:5
        },
        {
            id: '5869f4a0f-3da1-471f-dbd96-145571e29d72',
            title: 'Tamil',
            count:6
        },
        {
            id: '3ac68afc-c605-d48dd3-a4f8-fbd91aa97f63',
            title: 'Computer',
            count:7
        },
        {
            id: '5869l4a0f-3dan1-47d1df-bd96-145571e29d72',
            title: 'Third Item',
            count:8
        }
    ];
    
    
  



    function Work({count , sub}) {
        
        return (
            <View>
                <Text className=" text-xl font-bold mt-2">PERIOD - {count} : <Text className="text-xl font-extrabold to-blue-500">  {sub}</Text> </Text>
                <Text className="text-center">_________________________________________________</Text>
            </View>
        )
    }
    
    

    return (
        <>
            <View className="flex-1 bg-white" >
                <SafeAreaView className="flex " style={{ marginHorizontal: 20, marginTop: 10, marginBottom: 20 }}>


                    <Head />


                    <View className="flex-row items-center bg-white p-3 rounded-3xl shadow-2xl mb-3 mx-2 justify-evenly">
                        <TouchableOpacity >

                            <Image className="" style={{ height: 90, width: 50 }} borderRadius={100} source={require('./days/mon.png')} />
                        </TouchableOpacity>
                        <TouchableOpacity  >

                            <Image className="" style={{ height: 90, width: 50 }} borderRadius={100} source={require('./days/tue.png')} />
                        </TouchableOpacity>
                        <TouchableOpacity>

                            <Image className="" style={{ height: 90, width: 50 }} borderRadius={100} source={require('./days/wed.png')} />
                        </TouchableOpacity>
                        <TouchableOpacity>

                            <Image className="" style={{ height: 90, width: 50 }} borderRadius={100} source={require('./days/thu.png')} />
                        </TouchableOpacity>
                        <TouchableOpacity>

                            <Image className="" style={{ height: 90, width: 50 }} borderRadius={100} source={require('./days/fri.png')} />
                        </TouchableOpacity>
                        <TouchableOpacity>

                            <Image className="" style={{ height: 90, width: 50 }} borderRadius={100} source={require('./days/sat.png')} />
                        </TouchableOpacity>
                    </View>


                    <View className="pl-3">
                        <Text className="text-2xl font-bold text-center mt-3 mb-3">MONDAY - HOMEWORK</Text>

                    </View>

                    
        <FlatList showsVerticalScrollIndicator={false}
                        data={mon}
                        renderItem={({ item }) => <Work sub={item.title} count={item.count}/>}
                        keyExtractor={item => item.id}
                        style={{ height: '46%' }}
                    />
    



                </SafeAreaView>
            </View>
        </>
    )
}













