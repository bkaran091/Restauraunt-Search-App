import React from 'react';
import {Text, StyleSheet, View, Image, TouchableOpacity, Platform, Linking, Alert, Clipboard} from 'react-native';
import RatingBar from "./RatingBar";




const ResultShowHeaderDetail = ({result}) => {
    const CategoryComponent = () => {
        let dummy = "";
        result.categories.forEach(function (cat, index) {
            dummy += cat.title;
            if (index !== result.categories.length - 1) {
                dummy += " - ";
            }
        })
        return (
            <Text style={{color: 'grey'}}>{dummy}</Text>
        )
    }
    const setClipboardText = () => {
        Clipboard.setString(result.display_phone)
    }
    const calling = ({phone}) => {
        let phoneNumber = phone;
        if (Platform.OS !== 'android') {
            phoneNumber = `telprompt:${phone}`;
        } else {
            phoneNumber = `tel:${phone}`;
        }
        Linking.canOpenURL(phoneNumber)
            .then(supported => {
                if (!supported) {
                    Alert.alert('Number copied to clipborad');
                } else {
                    return Linking.openURL(phoneNumber);
                }
            })
            .catch(err => console.log(err));
        setClipboardText();
    };

    return (
        <View style={{flexDirection: 'row', justifyContent:'space-around', flexWrap:'wrap'}}>
            <View style={styles.info}>
                <Text style={styles.title}>{result.name}</Text>
                <Text style={styles.infoText}>
                    {<CategoryComponent/>}
                </Text>
                <Text>
                    {result.location.city}, {result.location.state}
                </Text>
            </View>
            <TouchableOpacity onPress={() => {calling(result.display_phone)}} style={{ flex:1,marginTop: 20,marginLeft: 50}}>
                <Image source={require('../../assets/phone.png')} style={{height: 28, width: 28}}/>
            </TouchableOpacity>
        </View>
    )
};

const styles = StyleSheet.create({
    title: {
        fontSize: 25,
        fontWeight: '500',
        marginBottom: 8,
    },
    info: {
        flex:4,
        marginLeft: 15,
        padding: 5,
        alignContent: 'center'
        , borderBottomWidth: 2, borderColor: 'black',

    },
    infoText: {
        fontSize: 16,
    },
});

export default ResultShowHeaderDetail;
