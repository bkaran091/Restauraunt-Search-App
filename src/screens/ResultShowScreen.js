import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Clipboard, ScrollView , Button} from 'react-native';
import yelp from "../api/yelp";
import ActivityIndicatorExample from "../components/ActivityIndicator";
import {Entypo} from '@expo/vector-icons';
import ResultShowImageShow from "../components/ResultShowImageShow";
import ResultShowHeaderDetail from "../components/ResultShowHeaderDetail";
import AddressDetail from "../components/AdressDetails";
import OpenDays from "../components/OpenDays";
import Review from "../components/Review";
import Gallery from "../components/Gallery";

const ResultsShowScreen = ({navigation}) => {
    const [result, setResult] = useState(null);
    const [review, setReview] = useState(null);
    const id = navigation.getParam('id');
    const [copiedText, setCopiedText] = useState('')


    const getResult = async (id) => {
        const response = await yelp.get(`/${id}`);
        setResult(response.data);
    };

    useEffect(() => {
        getResult(id);
    }, []);
    const getReview = async (id) => {
        const response = await yelp.get(`/${id}/reviews`);
        setReview(response.data);
    };

    useEffect(() => {
        getReview(id);
    }, []);

    if (!result) {
        return null;
    }
    if (!review) {
        return null;
    }
    const copyToClipboard = () => {
        Clipboard.setString(result.display_phone)
    }

    const setClipboardTest = () => {
        Clipboard.setString(result.display_phone)
        alert('Copied To Clipboard');
    }

    const changeString = (string) => {
        return string[0] + string[1] + ':' + string[2] + string[3];
    }
    return (
        <>
            <ScrollView>
                <ActivityIndicatorExample/>

                <ResultShowImageShow result={result}/>

                <ResultShowHeaderDetail result={result}/>

                <View style={styles.downContainer}>
                    <View style={{flex: 2}}>
                        <Text style={styles.ifOpen}>
                            {result.hours[0].is_open_now ? 'Currenty Open' : 'Currently Closed'}
                        </Text>
                        {result.hours[0].is_open_now ? <Text
                            style={styles.openCloseTimings}>(Closes {changeString(result.hours[0].open.end)})</Text> : null}
                        {!result.hours[0].is_open_now ? <Text
                            style={styles.openCloseTimings}>(Opens {changeString(result.hours[0].open[0].start)})</Text> : null}

                        <View style={styles.phoneContainer}>
                            <TouchableOpacity onPress={() => {
                                setClipboardTest();
                            }
                            }>
                                <Text style={styles.phone}>
                                    <Entypo name='phone' style={styles.phoneIcon}/> {result.display_phone}
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <AddressDetail result={result}/>
                </View>


                <OpenDays result={result}/>
                <Review data={review}/>
                {/*<View style={styles.openButton}>*/}
                {/*    <Button color={'white'} title={'Show Gallery'} onPress={()=>{}} />*/}
                {/*</View>*/}
                <Gallery result={result}/>
            </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({
    openButton: {
        backgroundColor: "#F194FF",
        borderRadius: 20,
        elevation: 2,
        color:'white',
        width:150,
        alignSelf:'center',
        height:35,
        padding :0,
        margin:5,

    },
    ifOpen: {
        marginLeft: 15,
        fontSize: 19,
        color: 'red',
        fontFamily: 'System'
    },
    openCloseTimings: {
        marginLeft: 15,
        fontSize: 18,
        color: 'red',
        fontFamily: 'System',
    },
    phoneContainer: {
        height: 50,
        margin: 15,
        width: '90%',

        marginRight:15,
        marginTop: 10,
        backgroundColor: '#1babe4',
        textAlign: 'center',
        justifyContent: 'center',
        padding: 5,
    },

    phoneIcon: {
        fontSize: 25,
    },
    phone: {
        fontSize: 22,
    },
    downContainer: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 15
    },
});

export default ResultsShowScreen;