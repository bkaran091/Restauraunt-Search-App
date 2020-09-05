import React, {useState, useEffect} from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import yelp from "../api/yelp";
import Loader from "../components/Loader";
import ResultShowImageShow from "../components/ResultShowImageShow";
import ResultShowHeaderDetail from "../components/ResultShowHeaderDetail";
import AddressComponent from "../components/AdressDetails";
import RatingComponent from "../components/RatingComponent";


const ResultsShowScreen = ({id}) => {
    const [result, setResult] = useState(null);
    const [review, setReview] = useState(null);

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
    if (!result || !review) {
        return null;
    }

    return (
        <>
            <ScrollView style={styles.container}>
                <Loader/>
                <ResultShowImageShow result={result}/>
                <RatingComponent result={result}/>
                <ResultShowHeaderDetail result={result}/>
                <AddressComponent result={result}/>
            </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1
    }
})


export default ResultsShowScreen;
