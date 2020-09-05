import React from 'react';
import {Text, StyleSheet, View, Linking, Platform, Image, TouchableOpacity} from 'react-native';

const AddressComponent = ({result}) => {
    const openGps = (lat, lng) => {
        let scheme = Platform.OS === 'ios' ? 'maps:' : 'geo:';
        let url = scheme + `${lat},${lng}`;
        Linking.openURL(url);
    }
    const AddressDetail = () => {
        return (
            <View style={styles.info}>
                <Text style={styles.addressText}>A D D R E S S</Text>
                <View style={{flexDirection: 'row'}}>
                    {result.location.address1 ? <Text style={styles.text}>{result.location.address1},</Text> : null}
                    {result.location.address2 ? <Text style={styles.text}>{result.location.address2},</Text> : null}
                </View>
                <View style={{flexDirection: 'row'}}>
                    {result.location.address3 ? <Text style={styles.text}>{result.location.address3},</Text> : null}
                    {result.location.city ? <Text style={styles.text}>{result.location.city},</Text> : null}
                    {result.location.state ? <Text style={styles.text}>{result.location.state},</Text> : null}
                </View>
                {result.location.state ? <Text style={styles.text}>{result.location.zip_code}</Text> : null}
            </View>
        )
    }
    const GetDirections = () => {
        return (
            <TouchableOpacity style={styles.getDirectionContainer}
                              onPress={() => openGps(result.coordinates.latitude, result.coordinates.longitude)}>
                <Image source={require('../../assets/directions.png')}
                       style={styles.getDirectionIcon}/>
                <Text style={{textAlign: 'center'}}>Get Directions</Text>
            </TouchableOpacity>
        )
    }

    return (
        <View style={styles.container}>
            <AddressDetail/>
            <GetDirections/>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
        marginTop: 12,
    },
    text: {
        color: 'grey',
    },
    addressText: {
        fontSize: 20,
        fontWeight: '500',
        marginBottom: 10
    },
    info: {
        flex: 4,
        marginLeft: 15,
        padding: 5,
        alignContent: 'center',
    },
    getDirectionContainer: {
        flex: 2,
        marginTop: 20,
        marginLeft: 50
    },
    getDirectionIcon: {
        height: 30,
        width: 30,
        alignSelf: 'center'
    }
});

export default AddressComponent;
