import React from "react";
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, Linking } from "react-native";


import { SafeAreaView } from 'react-native-safe-area-context'

import Head from "../Head";
import { DataOfScl } from "../../../theme";

export default function About() {
var URLweb = DataOfScl.School_DATA.About.URL; 
var imgurl = DataOfScl.School_DATA.About.IMG_url;
    return (
        <View className="flex-1 bg-white">
            <SafeAreaView className="flex" >
                <View style={{ marginHorizontal: 20, marginTop: 10, marginBottom: 20 }} className="justify-end">

                    <Head />
                </View>


                <View style={{ alignSelf: "center" }}>
                    <View style={styles.profileImage}>
                        <Image source={{uri:imgurl}} style={{ height: 128, width: 128 }} />
                    </View>
                </View>
                <View style={styles.infoContainer}>
                    <Text className='mb-5  mx-2 text-center' style={[styles.text, { fontWeight: "500", fontSize: 30, color: 'black' }]}>{DataOfScl.School_DATA.About.School_Name}</Text>

                    <View className="flex-row items-center bg-slate-100 p-3 rounded-3xl shadow-3xl mb-3 mx-2 space-x-7">
                        <View>
                        <Image className="rounded-3xl" style={{ height: 90, width: 90 }} source={require('../../../img/studentcount.png')} />
                        <Text className="text-center font-extrabold text-xl">{DataOfScl.School_DATA.About.Number_of_Student}</Text>
                        </View>
                        <View>
                        <Image className="rounded-3xl" style={{ height: 90, width: 90 }} source={require('../../../img/EXPERIENCE.png')} />
                        <Text className="text-center font-extrabold text-xl">{DataOfScl.School_DATA.About.Number_of_Years_experience}</Text>
                        </View>
                        <View>
                        <Image className="rounded-3xl" style={{ height: 90, width: 90 }} source={require('../../../img/teachers2.png')} />
                        <Text className="text-center font-extrabold text-xl ">{DataOfScl.School_DATA.About.Number_of_Staff}</Text>
                        </View>
                    </View>

                    
                </View>

            </SafeAreaView>
            <ScrollView>
            <Text className='mb-1 mt-2  mx-2 text-center' style={[styles.text, { fontWeight: "500", fontSize: 20, color: 'black' }]}>VISIT</Text>
                    <TouchableOpacity onPress={() => { Linking.openURL(URLweb) }}>
                    <Text className='mb-5  mx-2 text-center' style={[styles.text, { fontWeight: "200", fontSize: 18, color: 'black' }]}>{DataOfScl.School_DATA.About.URL}</Text>
                    </TouchableOpacity>
                <View >

                    <View
                        style={{ borderTopLeftRadius: 10, borderTopRightRadius: 10 }}
                        className="flex-1 bg-white px-8 pt-1">

                        <Text className="text-2xl mt-2 font-extrabold items-center text-center pb-5 mx-3">ABOUT US </Text>
                        <Text className="text-xl mt-2 mb-2 font-normal items-center pb-5 mx-2 text-justify">{DataOfScl.School_DATA.About.About_us}</Text>




                    </View>
                </View>
            </ScrollView>
        </View>

    )
}











const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFF"
    },
    text: {
        color: "#52575D"
    },

    titleBar: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 24,
        marginHorizontal: 16
    },
    subText: {
        fontSize: 12,
        color: "#AEB5BC",
        textTransform: "uppercase",
        fontWeight: "500"
    },
    profileImage: {
        width: 128,
        height: 128,
        borderRadius: 100,
        overflow: "hidden"
    },
    dm: {
        backgroundColor: "#41444B",
        position: "absolute",
        top: 20,
        width: 40,
        height: 40,
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center"
    },
    active: {
        backgroundColor: "#34FFB9",
        position: "absolute",
        bottom: 28,
        left: 10,
        padding: 4,
        height: 20,
        width: 20,
        borderRadius: 10
    },
    add: {
        backgroundColor: "#41444B",
        position: "absolute",
        bottom: 0,
        right: 0,
        width: 60,
        height: 60,
        borderRadius: 30,
        alignItems: "center",
        justifyContent: "center"
    },
    infoContainer: {
        alignSelf: "center",
        alignItems: "center",
        marginTop: 16
    },
    statsContainer: {
        flexDirection: "row",
        alignSelf: "center",
        marginTop: 32
    },
    statsBox: {
        alignItems: "center",
        flex: 1
    },
    mediaImageContainer: {
        width: 180,
        height: 200,
        borderRadius: 12,
        overflow: "hidden",
        marginHorizontal: 10
    },
    mediaCount: {
        backgroundColor: "#41444B",
        position: "absolute",
        top: "50%",
        marginTop: -50,
        marginLeft: 30,
        width: 100,
        height: 100,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 12,
        shadowColor: "rgba(0, 0, 0, 0.38)",
        shadowOffset: { width: 0, height: 10 },
        shadowRadius: 20,
        shadowOpacity: 1
    },
    recent: {
        marginLeft: 78,
        marginTop: 32,
        marginBottom: 6,
        fontSize: 10
    },
    recentItem: {
        flexDirection: "row",
        alignItems: "flex-start",
        marginBottom: 16
    },
    activityIndicator: {
        backgroundColor: "#CABFAB",
        padding: 4,
        height: 12,
        width: 12,
        borderRadius: 6,
        marginTop: 3,
        marginRight: 20
    }
});