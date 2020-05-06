import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

const CurrentlyOpenClose = ({result}) => {
    const changeString = (string) => {
        return string[0] + string[1] + ':' + string[2] + string[3];
    }
    return (
        <View>
            <Text style={styles.ifOpen}>
                {result.hours[0].is_open_now ? 'Currenty Open' : 'Currently Closed'}
            </Text>
            {result.hours[0].is_open_now ? <Text
                style={styles.openCloseTimings}>(Closes {changeString(result.hours[0].open.end)})</Text> : null}
            {!result.hours[0].is_open_now ? <Text
                style={styles.openCloseTimings}>(Opens {changeString(result.hours[0].open[0].start)})</Text> : null}
        </View>
    )
};

const styles = StyleSheet.create({
    ifOpen: {
        marginLeft: 15,
        fontSize: 19,
        color: 'red',
        fontFamily: 'System'
    },
    openCloseTimings: {
        marginLeft: 15,
        fontSize: 18,
        color: 'red',
        fontFamily: 'System',
    },
});

export default CurrentlyOpenClose;