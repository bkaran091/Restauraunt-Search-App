import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import ResultDetail from "./ResultDetail";

const ResultsList = ({title, results}) => {
    return <View>
        <Text style={styles.title}>{title}</Text>
        <FlatList
            horizontal
            data={results}
            keyExtractor={(result) => {
                return result.id;
            }}
            renderItem={({item}) => {
                return <ResultDetail result={item}/>;
            }}
        />
    </View>
};

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    }
});

export default ResultsList;