import React from "react";
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, Linking } from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

import { SafeAreaView } from 'react-native-safe-area-context'

import { themeColors } from '../theme';
import { version } from "../../package.json";
import Head from "../home/Head";

export default function Pro() {


    return (
        <View className="flex-1 bg-white">
            <SafeAreaView className="flex" >
                <View style={{marginHorizontal:20, marginTop:10,marginBottom:20}} className="justify-end">

        <Head headerText={'Profile'} headerIcon={'sign-out'}  />
                </View>


                <View style={{ alignSelf: "center" }}>
                    <View style={styles.profileImage}>
                        <Image source={require("../img/Boyprofile.png")} style={{ height: 128, width: 128 }} />
                    </View>
                </View>
                <View style={styles.infoContainer}>
                    <Text className="" style={[styles.text, { fontWeight: "500", fontSize: 36, color: 'black' }]}>Krishnakumar R</Text>
                    <Text style={[styles.text, { color: "#302e29", fontSize: 18, fontWeight: "500" }]} className='mb-5'>Student</Text>
                </View>

            </SafeAreaView>
            <ScrollView>
                <View >

                    <View
                        style={{ borderTopLeftRadius: 10, borderTopRightRadius: 10 }}
                        className="flex-1 bg-white px-8 pt-1">

                        <Text className="text-2xl mt-2 font-extrabold items-center text-center pb-5 mx-3">Roll No: <Text className="font-light"> 410721104070</Text></Text>
                        <Text className="text-2xl mt-2 font-extrabold items-center text-center pb-5 mx-3">School Name: <Text className="font-light">Snehadeepam Matric hr. sec. school</Text></Text>
                        <Text className="text-2xl mt-2 font-extrabold items-center text-center pb-5 mx-3">Section: <Text className="font-light"> 10th A</Text></Text>
                        <Text className="text-2xl mt-2 font-extrabold items-center text-center pb-5 mx-3">Phone NO: <Text className="font-light"> 7894561235</Text></Text>
                        <Text className="text-2xl mt-2 mb-2 font-extrabold items-center text-center pb-5 mx-3">Father Name: <Text className="font-light"> Tony Stark</Text></Text>


                        <Text className="items-center text-center pb-5 text-3xl font-extrabold">Follow Us</Text>
                        <View className="items-center">
                            <TouchableOpacity onPress={() => { Linking.openURL('https://www.nexcap.net') }}>
                                <Image source={require("../img/qrcode.png")} style={{ height: 200, width: 200 }} />
                            </TouchableOpacity>
                        </View>
                        <View className="items-center flex-row justify-center space-x-5 mt-8">

                            <TouchableOpacity onPress={() => { Linking.openURL('https://twitter.com/nexcap_official') }}>
                                <Image source={require("../img/Twitter.png")} style={{ height: 50, width: 50 }} />
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => { Linking.openURL('https://instagram.com/nexcap_official') }}>
                                <Image source={require("../img/Instagram.png")} style={{ height: 50, width: 50 }} />
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => { Linking.openURL('https://www.facebook.com/profile.php?id=100090683510579&mibextid=ZbWKwL') }}>
                                <Image source={require("../img/Facebook.png")} style={{ height: 50, width: 50 }} />
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => { Linking.openURL('https://www.youtube.com/channel/UCstvTbmeBP2UlxMk172N8bA') }}>
                                <Image source={require("../img/Youtube.png")} style={{ height: 50, width: 50 }} />
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => { Linking.openURL('https://form.jotform.com/231913186387059') }}>
                                <Image source={require("../img/Messenger.png")} style={{ height: 50, width: 50 }} />
                            </TouchableOpacity>
                        </View>
                        <View>
                            <Text className="text-center top-5 text-sm">{version}</Text>
                        </View>
                        <View>
                            <Text className="text-center top-5 text-sm mb-20">Copy Rights ©️ 2023 - Nexcap</Text>
                        </View>
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