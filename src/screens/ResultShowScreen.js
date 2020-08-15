import React, {useState, useEffect} from 'react';
import {ScrollView} from 'react-native';
import yelp from "../api/yelp";
import ActivityIndicatorExample from "../components/ActivityIndicator";
import ResultShowImageShow from "../components/ResultShowImageShow";
import ResultShowHeaderDetail from "../components/ResultShowHeaderDetail";
import OpenDays from "../components/OpenDays";
import Review from "../components/Review";
import Gallery from "../components/Gallery";
import DownContainer from "../components/DownContainer";

const ResultsShowScreen = ({navigation}) => {
    const [result, setResult] = useState(null);
    const [review, setReview] = useState(null);
    const id = navigation.getParam('id');
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
    return (
        <>
            <ScrollView style={{backgroundColor:'white', flex:1}}>
                <ActivityIndicatorExample/>
                <ResultShowImageShow result={result}/>
                <ResultShowHeaderDetail result={result}/>
                <DownContainer result={result}/>
                <OpenDays result={result}/>
                <Review data={review}/>
                <Gallery result={result}/>
            </ScrollView>
        </>
    )
}

export default ResultsShowScreen;
