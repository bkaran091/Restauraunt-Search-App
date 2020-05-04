import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, FlatList, Image, ActivityIndicator} from 'react-native';
import yelp from "../api/yelp";
import ActivityIndicatorExample from "../components/ActivityIndicator";

const ResultsShowScreen = ({navigation}) => {
    const [result, setResult] = useState(null);
    const id = navigation.getParam('id');

    const getResult = async (id) => {
        const response = await yelp.get(`/${id}`);
        setResult(response.data);
    };

    useEffect(() => {
        getResult(id);
    }, []);

    if (!result) {
        return null;
    }

    return (
        <>
            <ActivityIndicatorExample/>
            <Text style={styles.title}>{result.name}</Text>
            <FlatList
                data={result.photos}
                keyExtractor={(photo) => photo}
                renderItem={({item}) => {
                    return (
                        <View style={styles.container}>
                            <Image source={{uri: item}} style={styles.image}/>
                        </View>
                    )
                }}
            />
        </>
    )
}

const styles = StyleSheet.create({
    image: {
        height: 200,
        width: 300,
        margin: 15,
        borderRadius: 2,
        borderWidth: 3
    },
    title: {
        fontSize: 17,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    container: {
        alignItems: 'center',
    },
    activityIndicatorContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 70
    },
    activityIndicator: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: 80
    }
});

export default ResultsShowScreen;