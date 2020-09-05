import React, {useState, useEffect} from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';
import yelp from "../api/yelp";
import StarRating from "react-native-star-rating";
import Loader from "../components/Loader";

const ReviewScreen = ({id}) => {
    const [review, setReview] = useState(null);
    const getReview = async (id) => {
        const response = await yelp.get(`/${id}/reviews`);
        setReview(response.data);
    };
    useEffect(() => {
        getReview(id);
    }, []);

    if (!review)
        return null;


    const SingleReview = ({id}) => {
        return (
            <View style={styles.container}>
                <View style={styles.headerWrapper}>
                    <View style={styles.imageWrapper}>
                        {review.reviews[id].user.image_url ?
                            <Image source={{uri: `${review.reviews[0].user.image_url}`}}
                                   style={{height: '100%', width: '100%', borderRadius: 50}}/>
                            : <Image source={require('../../assets/user.png')}
                                     style={{height: '100%', width: '100%', borderRadius: 50}}/>
                        }
                    </View>
                    <View style={styles.nameWrapper}>
                        <Text style={styles.nameText}>
                            {review.reviews[id].user.name}
                        </Text>
                        <StarRating disabled={true} maxStars={5} rating={review.reviews[0].rating} starSize={20}
                                    halfStarEnabled={true} fullStarColor={'rgb(237,90,107)'}
                                    halfStarColor={'rgb(237,90,107)'}/>
                    </View>
                </View>
                <View style={styles.reviewDetailContainer}>
                    <Text style={styles.reviewDetailText}>{review.reviews[id].text}</Text>
                </View>
            </View>
        )
    }

    return (
        <>
            <Loader/>
            <View style={{backgroundColor: 'white', flex: 1}}>
                <SingleReview id={0}/>
                <SingleReview id={1}/>
                <SingleReview id={2}/>
            </View>
        </>
    )
};

const styles = StyleSheet.create({
    container: {
        paddingVertical: 10,
    },
    headerWrapper: {
        flexDirection: 'row',
        padding: 12,
    },
    imageWrapper: {
        height: 50,
        width: 50
    },
    nameWrapper: {
        marginLeft: 12,
    },
    nameText: {
        fontSize: 18,
        marginBottom: 4,
    },
    reviewDetailContainer: {
        paddingHorizontal: 20,
    },
    reviewDetailText: {
        fontSize: 18
    }

});

export default ReviewScreen;

