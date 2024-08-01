import { View, Text, Image,  Dimensions ,TouchableOpacity} from 'react-native'
import React from 'react'
const {width, height} = Dimensions.get('window');
import { useNavigation } from '@react-navigation/native'


export default function Homeworkcard({item}) {
    const Navigation = useNavigation();
    return (
        <TouchableOpacity onPress={()=> Navigation.navigate('Workcard')}>

                <View className="flex-row items-center bg-white p-3 rounded-3xl shadow-2xl mb-3 mx-2 space-x-7">
                    <Image className="" style={{height: 90, width: 90}} borderRadius={100} source={require('../../../img/homeworkbook.png')}/>
                    <View className="flex flex-1 space-y-3">
                        <View className="pl-3">
                            <Text className="text-2xl">HomeWork</Text>  
                            
                            <Text className="text-m text-green-500">12/08/2023</Text>  
                        </View>
                       
                    </View>
                </View>
            </TouchableOpacity>
        
      )
}