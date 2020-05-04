import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, FlatList, Image, ActivityIndicator} from 'react-native';
import yelp from "../api/yelp";
import ActivityIndicatorExample from "../components/ActivityIndicator";
import {FontAwesome} from '@expo/vector-icons';

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
            <View style={styles.detailsContainer}>
                <View style={styles.info}>
                    <Text style={styles.title}>{result.name}</Text>
                </View>
                <View style={styles.ratingSideBar}>
                    <View style={styles.rating}>
                        <FontAwesome name={'star'}/>
                        <Text style={styles.ratingText}>{result.rating}</Text>
                    </View>
                    <View style={styles.review}>
                        <Text>{result.review_count} Reviews</Text>
                    </View>
                </View>
            </View>
            <Text>get lost</Text>
        </>

    )
}

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
    detailsContainer: {
        display: 'flex',
        flexDirection: 'row'
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
    },
    info: {
        flex: 4,
        // backgroundColor:'grey',
    },
    ratingSideBar: {
        flex: 1,
        backgroundColor: 'yellow',
        flexDirection: 'column',
        height: 90,
        width: 50,
        borderRadius: 2,
        borderColor: 'black',
        borderWidth:2,
        marginRight: 15,
    },
    rating: {
        flex: 1,
        backgroundColor: 'green',
        alignItems: 'center',
        justifyContent: 'center'
    },
    ratingText:{
      fontSize: 18,
        color:'white'
    },
    review: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center'
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