import React from 'react';
import {Text, StyleSheet, View, Button, Linking, Platform, Image, TouchableOpacity} from 'react-native';

const AddressDetail = ({result}) => {

    const openGps = (lat, lng) => {
        let scheme = Platform.OS === 'ios' ? 'maps:' : 'geo:';
        let url = scheme + `${lat},${lng}`;
        Linking.openURL(url);
    }

    const AddressComponent = () => {
        return (
            <View style={{flexDirection: 'row', justifyContent: 'space-around', flexWrap: 'wrap'}}>
                <View style={styles.info}>
                    <Text style={{fontSize: 20, fontWeight: '500', marginBottom: 10}}>A D D R E S S</Text>
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
                <View style={{flex: 2, marginTop: 20, marginLeft: 50}}>
                    <Image source={require('../../assets/directions.png')} style={{height: 30, width: 30, alignSelf:'center'}}/>
                    <Text style={{textAlign: 'center'}}>Get Directions</Text>
                </View>
            </View>
        )
    }
    return (
        <AddressComponent/>
    )
};

const styles = StyleSheet.create({
    contactSection: {
        flex: 1,
        marginRight: 15,
        height: 145,
        padding: 15,
        borderRadius: 20,
    },
    text: {
        color: 'grey',
    },
    info: {
        flex: 4,
        marginLeft: 15,
        padding: 5,
        alignContent: 'center',
    }
});

export default AddressDetail;
