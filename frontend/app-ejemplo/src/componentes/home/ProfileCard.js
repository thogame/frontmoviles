import React from "react";
import {View, Text, StyleSheet, Image, Linking,TouchableWithoutFeedback} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";

const blogger = <Icon name={'blogger'} size={80} color={'black'}/>
const twitch = <Icon name={'twitch'} size={80} color={'black'}/>
const youtube = <Icon name={'youtube'} size={80} color={'black'}/>
const pinterest = <Icon name={'pinterest'} size={80} color={'black'}/>
const whatsapp = <Icon name={'whatsapp'} size={80} color={'black'}/>
const ProfileCard = () => {
    const user = {
        avatar: "https://wallpapercave.com/wp/wp7158365.jpg",
        coverPhoto: "http://elearningmasters.galileo.edu/wp-content/uploads/2017/12/redes-sociales-en-la-educacion.jpg",
        name: "Velez Jose",
    }
    return (
        
        <View style={styles.container}>
            
            <Image source={{uri: user.coverPhoto}} style={styles.coverPhoto}/>
            <View style={styles.avatarContainer}>
                <Image source={{uri: user.avatar}} style={styles.avatar}/>
                <Text style={styles.name}>
                    {user.name}
                </Text>
            </View>
            <View style={styles.buttonContainer}>

                <TouchableWithoutFeedback style={{color: 'blue'}} onPress={() => {
                    Linking.openURL('https://www.twitch.tv/thogame46')
                }}>
                    {twitch}
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback style={{color: 'blue'}} onPress={() => {
                    Linking.openURL('https://www.blogger.com/profile/05012671436170461951')
                }}>
                    {blogger}
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback style={{color: 'blue'}} onPress={() => {
                    Linking.openURL('https://www.youtube.com/channel/UCWvo7SafNwod0LGRW2nLgzg')
                }}>
                    {youtube}
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={()=>Linking.openURL('https://www.pinterest.com/antonio461997/')}>
                    {pinterest}
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={()=>Linking.openURL('https://web.whatsapp.com/')}>
                    {whatsapp}
                </TouchableWithoutFeedback>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        alignItems: 'center' //flex y grid
    },
    coverPhoto: {
        width: '100%',
        height: 400,
        resizeMode: 'cover'

    },
    avatarContainer: {
        alignItems: 'center',
        marginTop: -75
    },
    avatar: {
        width: 200,
        height: 200,
        borderRadius: 100,
        borderWidth: 10,
        borderColor: 'white'
    },
    name: {
        marginTop: 15,
        fontSize: 50,
        fontWeight: 'bold',
        color: 'blue',
        fontFamily: 'Algerian'
    },
    buttonContainer: {
        flexDirection: 'row',
        marginTop: 20,
        width: '90%',
        justifyContent: 'space-between'
    }
});
export default ProfileCard