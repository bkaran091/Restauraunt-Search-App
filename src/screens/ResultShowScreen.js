import React, {useState, useEffect} from 'react';
import {ScrollView, View, Text, Image, Button, Clipboard} from 'react-native';
import StarRating from 'react-native-star-rating';
import yelp from "../api/yelp";
import ActivityIndicatorExample from "../components/ActivityIndicator";
import ResultShowImageShow from "../components/ResultShowImageShow";
import ResultShowHeaderDetail from "../components/ResultShowHeaderDetail";
import OpenDays from "../components/OpenDays";
import Review from "../components/Review";
import CurrentlyOpenClose from "../components/CurrentlyOpenClose";
import AddressDetail from "../components/AdressDetails";


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



    const RatingComponent = () => {
        return (
            <View style={{margin: 20, flexDirection: 'row'}}>
                <View style={{width: '30%'}}>
                    <StarRating disabled={true} maxStars={5} rating={result.rating} starSize={22}
                                halfStarEnabled={true}/>
                    <View>
                        <Text>{result.review_count} REVIEWS</Text>
                    </View>
                </View>
                <View style={{marginLeft: 100, alignItems: 'center'}}>
                    {/*<Text style={{fontSize:16}}>Add a Review</Text>*/}
                    <Image source={require('../../assets/addRating.png')} style={{height: 30, width: 30}}/>
                </View>
            </View>
        );
    }


    return (
        <>
            <ScrollView style={{backgroundColor: 'white', flex: 1}}>
                {/*<ActivityIndicatorExample/>*/}
                <ResultShowImageShow result={result}/>
                <RatingComponent/>
                <ResultShowHeaderDetail result={result}/>
                <AddressDetail result={result}/>
                <CurrentlyOpenClose result={result}/>
                <OpenDays result={result}/>
                <Review data={review}/>
            </ScrollView>
        </>
    )
}

export default ResultsShowScreen;
