import { View, Text, Image, Dimensions, TouchableOpacity,FlatList } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import Head from '../Head';
const { width, height } = Dimensions.get('window');


import { SafeAreaView } from 'react-native-safe-area-context'
import Imgcard from './TechCard';
import { DataOfScl } from "../../../theme";

export default function Teachers({ item }) {

    const Navigation = useNavigation()



    // const DATA = [
    //     {
    //         id: 'bd7acbea-c1b1-46cs2-aed5-3ad53abb28ba',
    //         title: 'First Item',
    //     },
    //     {
    //         id: '3ac68afc-c605-48dd3-a4f8-fbd91aa97f63',
    //         title: 'Second Item',
    //     },
    //     {
    //         id: '58694ta0f-3da1-471df-bd96-145571e29d72',
    //         title: 'Third Item',
    //     },
    //     {
    //         id: 'bd7acbea-c1b1-46c2-daed5-3ad53abb28ba',
    //         title: 'First Item',
    //     },
    //     {
    //         id: '3ac68afc-c605-48d3d-a4f8-fbd91aa97f63',
    //         title: 'Second Item',
    //     },
    //     {
    //         id: '5869f4a0f-3da1-471f-dbd96-145571e29d72',
    //         title: 'Third Item',
    //     },
    //     {
    //         id: '3ac68afc-c605-d48dd3-a4f8-fbd91aa97f63',
    //         title: 'Second Item',
    //     },
    //     {
    //         id: '5869l4a0f-3dan1-47d1df-bd96-145571e29d72',
    //         title: 'Third Item',
    //     },
    //     {
    //         id: 'bd7acbea-c1b1-46cd2-aed5-3ad53abb28ba',
    //         title: 'First Item',
    //     },
    //     {
    //         id: '3ac68afc-c605-48d3-da4f8-fbd91aa97f63',
    //         title: 'Second Item',
    //     },
    //     {
    //         id: '58694a0f-3da1-471f-dbd96-145571e29d72',
    //         title: 'Third Item',
    //     },

    // ];

    const DATA = [DataOfScl.School_DATA.Gallery]




    return (
        <>
            <View className="flex-1 bg-white" >
                <SafeAreaView className="flex " style={{ marginHorizontal: 20, marginTop: 10, marginBottom: 20 }}>


                    <Head />


                    <FlatList showsVerticalScrollIndicator={false}
                        data={DATA}
                        renderItem={({ item }) => <Imgcard item={DATA} />}
                        keyExtractor={item => item.id}
                        style={{height:'95%'}}
                    />
                    
                </SafeAreaView>
            </View>
        </>
    )
}