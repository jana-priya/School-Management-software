import { View, Text, Image,  Dimensions ,TouchableOpacity} from 'react-native'
import React from 'react'
const {width, height} = Dimensions.get('window');
import { useNavigation } from '@react-navigation/native'


export default function NotificationCard({item}) {
    const Navigation = useNavigation();
    
    return (
        <TouchableOpacity>

                <View className="flex-row items-center bg-white p-3 rounded-3xl shadow-2xl mb-3 mx-2 space-x-7">
                    <Image className="" style={{height: 90, width: 90}} borderRadius={100} source={require('../../../img/notif.png')}/>
                    <View className="flex flex-1 space-y-3">
                        <View className="pl-3">
                            <Text className="text-xl">{item[0].Name}</Text>  
                            
                            <Text className="text-sm text-green-500">{item[0].Who}</Text>  
                        </View>
                        <View>
                            <Text className="text-base">{item[0].Content}</Text>
                            <Text className="text-sm mt-2 text-green-500">{item[0].Date}</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        
      )
}