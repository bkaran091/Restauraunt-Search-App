import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, FlatList, Image, ActivityIndicator} from 'react-native';
import yelp from "../api/yelp";
import ActivityIndicatorExample from "../components/ActivityIndicator";
import {FontAwesome} from '@expo/vector-icons';
import RatingBar from "../components/RatingBar";


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

    console.log(result.categories.length)
    const CstegoryComp = () => {
        let dummy = "";
        result.categories.forEach(function (cat, index) {
            dummy += cat.title;
            if(index!==result.categories.length-1){
                dummy += " - ";
            }
        })

        return (
            <Text> {dummy}</Text>
        )
        // return (
        //     // <Text> Hi</Text>
        //     <View>
        //         {/*<Text>  {result.categories[0].title}</Text>*/}
        //         {/*<Text>  {result.categories[1].title}</Text>*/}
        //         {/*<Text>  {result.categories[2].title}</Text>*/}
        //         {/*<Text>  {result.categories[3].title}</Text>*/}
        //
        //
        //         {/*<Text> Huff</Text>*/}
        //
        //         {result.categories.map( category =>  {
        //             return <Text> {category.title} </Text>;
        //         })}
        //         </View>
        // )
    };



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
                <View>
                    { <CstegoryComp/>}
                </View>

                <RatingBar result={result}/>
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
        // fontFamily: 'System',

    },
    info: {
        flex: 4,
        // backgroundColor:'grey',
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