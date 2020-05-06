import React from 'react';
import {Text, StyleSheet, View, TouchableOpacity, Clipboard} from 'react-native';
import {Entypo} from "@expo/vector-icons";

const PhoneNumber = ({result}) => {
    const setClipboardTest = () => {
        Clipboard.setString(result.display_phone)
        alert('Copied To Clipboard');
    }
    return (
        <View style={styles.phoneContainer}>
            <TouchableOpacity onPress={() => {
                setClipboardTest();
            }
            }>
                <Text style={styles.phone}>
                    <Entypo name='phone' style={styles.phoneIcon}/> {result.display_phone}
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    phoneContainer: {
        height: 50,
        margin: 15,
        width: '90%',
        marginRight: 15,
        marginTop: 10,
        backgroundColor: '#1babe4',
        textAlign: 'center',
        justifyContent: 'center',
        padding: 5,
    },
    phoneIcon: {
        fontSize: 25,
    },
    phone: {
        fontSize: 22,
    },
})

export default PhoneNumber;