import React from 'react';
import {Text, StyleSheet, View, Image, TouchableOpacity, Platform, Linking, Alert, Clipboard} from 'react-native';

const ResultShowHeaderDetail = ({result}) => {
    const CategoryComponent = () => {
        let dummy = "";
        result ?
        result.categories.forEach(function (cat, index) {
            dummy += cat.title;
            if (index !== result.categories.length - 1) {
                dummy += " - ";
            }
        }) : null;

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
        <View style={styles.container}>
            <View style={styles.info}>
                <Text style={styles.title}>{result.name}</Text>
                <Text style={styles.infoText}>
                    {<CategoryComponent/>}
                </Text>
                <Text>
                    {result.location.city}, {result.location.state}
                </Text>
            </View>
            <TouchableOpacity onPress={() => {
                calling(result.display_phone)
            }} style={styles.phoneIconContainer}>
                <Image source={require('../../assets/phone.png')} style={styles.phoneIcon}/>
            </TouchableOpacity>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        flexWrap: 'wrap'
    },
    title: {
        fontSize: 25,
        fontWeight: '500',
        marginBottom: 8,
    },
    info: {
        paddingBottom: 16,
        flex: 4,
        marginLeft: 15,
        padding: 5,
        alignContent: 'center',
        borderBottomWidth: 2,
        borderColor: 'black',
    },
    infoText: {
        fontSize: 16,
    },
    phoneIconContainer: {
        flex: 1,
        marginTop: 20,
        marginLeft: 50
    },
    phoneIcon: {
        height: 28,
        width: 28
    }
});

export default ResultShowHeaderDetail;
