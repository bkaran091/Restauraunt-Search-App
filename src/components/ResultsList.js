import React from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity, Button} from 'react-native';
import ResultDetail from "./ResultDetail";
import {withNavigation} from "react-navigation";

const ResultsList = ({title, results, navigation}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={results}
                keyExtractor={(result) => {
                    return result.id;
                }}
                renderItem={({item}) => {
                    return (
                        <TouchableOpacity onPress={() => {
                            navigation.navigate('ResultsShow', {id: item.id})
                        }
                        }>
                            <ResultDetail result={item}/>
                        </TouchableOpacity>
                    );
                }}
            />


        </View>
    );
};

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 15,
        marginBottom: 5,
    },
    container: {
        marginBottom: 10,
    }
});

export default withNavigation(ResultsList);