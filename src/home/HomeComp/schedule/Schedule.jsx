import { View, Text, Image, Dimensions, TouchableOpacity,FlatList } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import Head from '../Head';
const { width, height } = Dimensions.get('window');
import NotificationCard from "./NotificationCard"

import { SafeAreaView } from 'react-native-safe-area-context'
import { DataOfScl } from '../../../theme';


export default function Schedule({ item }) {

    const Navigation = useNavigation()


    const DATA = [DataOfScl.School_DATA.Classes.Class11th.Schedule];

    



    return (
        <>
            <View className="flex-1 bg-white" >
                <SafeAreaView className="flex " style={{ marginHorizontal: 20, marginTop: 10, marginBottom: 20 }}>


                    <Head />


                    <FlatList showsVerticalScrollIndicator={false}
                        data={DATA}
                        renderItem={({ item }) => <NotificationCard item={DATA}/>}
                        keyExtractor={item => item.id}
                        style={{height:'95%'}}
                    />
                    
                </SafeAreaView>
            </View>
        </>
    )
}