import React from 'react';
import {StyleSheet, View} from 'react-native';
import AddressDetail from "./AdressDetails";
import CurrentlyOpenClose from "./CurrentlyOpenClose";
import PhoneNumber from "./PhoneNumber";

const DownContainer = ({result}) => {
    if (!result) {
        return null;
    }
    return (
        <View style={styles.downContainer}>
            <View style={{flex: 2}}>
                <CurrentlyOpenClose result={result}/>

                <PhoneNumber result={result}/>
            </View>
            <AddressDetail result={result}/>
        </View>
    )
};

const styles = StyleSheet.create({
    downContainer: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 15
    },
});

export default DownContainer;