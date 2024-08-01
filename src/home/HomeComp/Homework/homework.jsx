import { View, Text, Image, Dimensions, TouchableOpacity,FlatList } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import Head from '../Head';
const { width, height } = Dimensions.get('window');
import Homeworkcard from "./homeworkcard"

import { SafeAreaView } from 'react-native-safe-area-context'


export default function Homework({ item }) {

    const Navigation = useNavigation()



    const DATA = [
        {
            id: 'bd7acbea-c1b1-46cs2-aed5-3ad53abb28ba',
            title: 'First Item',
        }
    ];




    return (
        <>
            <View className="flex-1 bg-white" >
                <SafeAreaView className="flex " style={{ marginHorizontal: 20, marginTop: 10, marginBottom: 20 }}>


                    <Head />


                    <FlatList showsVerticalScrollIndicator={false}
                        data={DATA}
                        renderItem={({ item }) => <Homeworkcard />}
                        keyExtractor={item => item.id}
                        style={{height:'95%'}}
                    />
                    
                </SafeAreaView>
            </View>
        </>
    )
}