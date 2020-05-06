import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {FontAwesome} from "@expo/vector-icons";

const RatingBar = ({result}) => {
    return (
        <View style={styles.ratingSideBar}>
            <View style={styles.rating}>
                <View style={{flexDirection: 'row'}}>
                    <FontAwesome name={'star'} style={styles.star}/>
                    <Text style={styles.ratingText}>{result.rating}</Text>
                </View>
            </View>
            <View style={styles.review}>
                <Text style={{fontWeight: 'bold', fontSize: 15}}>{result.review_count} </Text>
                <Text style={{fontWeight: 'bold', fontSize: 15}}>Reviews </Text>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    ratingSideBar: {
        flex: 1,
        backgroundColor: 'yellow',
        flexDirection: 'column',
        height: 90,
        width: 80,
        borderRadius: 2,
        borderColor: 'black',
        borderWidth: 2,
        marginRight: 15,

    },
    rating: {
        flex: 1,
        backgroundColor: 'green',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 5,
    },
    star: {
        fontSize: 30,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 4,
        color: 'white'
    },
    ratingText: {
        fontSize: 30,
        color: 'white',

    },
    review: {
        flex: 1,
        backgroundColor: 'lightblue',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default RatingBar;