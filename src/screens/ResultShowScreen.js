import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, FlatList, Image, ActivityIndicator} from 'react-native';
import yelp from "../api/yelp";
import ActivityIndicatorExample from "../components/ActivityIndicator";
import {FontAwesome} from '@expo/vector-icons';
import RatingBar from "../components/RatingBar";
import ResultShowImageShow from "../components/ResultShowImageShow";


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
    };

    const AddressComponent = () => {
        return (
            <View>
                {result.location.address1 ? <Text>{result.location.address1}, </Text> : null}
                {result.location.address2 ? <Text>{result.location.address2}, </Text> : null}
                {result.location.address3 ? <Text>{result.location.address3} , </Text> : null}
                {result.location.city ? <Text>{result.location.city} ,</Text> : null}
                {result.location.state ? <Text>{result.location.state} , {result.location.zip_code}</Text> : null}
            </View>
        );
    }
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

    return (
        <>
            <ActivityIndicatorExample/>

            <ResultShowImageShow result={result}/>

            <View style={styles.detailsContainer}>
                <View style={styles.info}>
                    <Text style={styles.title}>{result.name}</Text>
                    <Text style={styles.infoText}>
                        {<CategoryComponent/>}
                    </Text>
                </View>
                <RatingBar result={result}/>
            </View>

            <View style={styles.downContainer}>
                <View style={{flex: 2}}>
                    <Text style={styles.ifOpen}>
                        {result.hours[0].is_open_now ? 'Currenty Open' : 'Currently Closed'}
                    </Text>
                </View>
                <View style={styles.contactSection}>
                    <FontAwesome name="address-book" style={{fontSize: 40, textAlign: 'center'}}/>
                    <AddressComponent/>
                </View>
            </View>


        </>

    )
}

const styles = StyleSheet.create({
    detailsContainer: {
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
    ifOpen: {
        marginLeft: 15,
        fontSize: 19,
        color: 'red',
        fontFamily: 'System'
    },

    downContainer: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 15
    },
    contactSection: {
        flex: 1,
        backgroundColor: '#d32c64',
        marginRight: 15,
        height: 145,
        width: 40,
        padding: 15,
        borderRadius: 20,
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