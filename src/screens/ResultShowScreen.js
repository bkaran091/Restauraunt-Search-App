import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, FlatList, Image, ActivityIndicator} from 'react-native';
import yelp from "../api/yelp";

const ResultsShowScreen = ({navigation}) => {
    const [result, setResult] = useState(null);
    const [loading, setLoading] = useState(false);

    const id = navigation.getParam('id');

    const getResult = async (id) => {
        setLoading(true);
        const response = await yelp.get(`/${id}`);
        setResult(response.data);
        setLoading(false);

    };
    useEffect(() => {
        getResult(id);
    }, []);

    if (!result) {
        return null;
    }

    return (

        <>
            {loading && <ActivityIndicator
                color='#bc2b78'
                size="large"

            />
            }
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
        }
        });

            export default ResultsShowScreen;