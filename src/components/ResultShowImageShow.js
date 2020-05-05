import React from 'react';
import {StyleSheet, View, Text, FlatList, Image} from 'react-native';

const ResultShowImageShow = ({result}) => {
    return (
        <View>
            <FlatList
                data={result.photos}
                horizontal
                keyExtractor={(photo) => photo}
                renderItem={({item}) => {
                    return (
                        <View style={styles.FlatListContainer}>
                            <Image source={{uri: item}} style={styles.image}/>
                        </View>
                    )
                }}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    FlatListContainer: {
        alignItems: 'center',
    },
    image: {
        height: 200,
        width: 300,
        margin: 15,
        borderRadius: 2,
    },
});

export default ResultShowImageShow;