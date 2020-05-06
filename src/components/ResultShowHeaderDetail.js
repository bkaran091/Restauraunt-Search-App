import React from 'react';
import {Text, StyleSheet, View} from 'react-native';
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
            <Text>{dummy}</Text>
        )
    }

    return (
        <View style={styles.headerDetailsContainer}>
            <View style={styles.info}>
                <Text style={styles.title}>{result.name}</Text>
                <Text style={styles.infoText}>
                    {<CategoryComponent/>}
                </Text>
            </View>
            <RatingBar result={result}/>
        </View>
    )
};

const styles = StyleSheet.create({
    headerDetailsContainer: {
        display: 'flex',
        flexDirection: 'row',
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
    },
    info: {
        flex: 4,
        marginLeft: 15,
        backgroundColor: '#ffd0fd',
        padding: 5,
        alignContent: 'center'
    },
    infoText: {
        fontSize: 16,
    },
});

export default ResultShowHeaderDetail;