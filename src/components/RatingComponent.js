import React, {useState} from 'react';
import {Image, Text, View, StyleSheet, TouchableOpacity, Modal, TouchableHighlight, ToastAndroid} from 'react-native';
import StarRating from "react-native-star-rating";

const RatingComponent = ({result}) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [addRating, setAddRating] = useState(0);
    const showToastWithGravityAndOffset = () => {
        ToastAndroid.showWithGravityAndOffset(
            "Your rating is Submitted",
            ToastAndroid.SHORT,
            ToastAndroid.BOTTOM,
            25,
            50
        );
    };

    const ShowRestaurantRating = () => {
        return (
            <View style={{width: '30%'}}>
                <StarRating disabled={true} maxStars={5} rating={result.rating} starSize={22}
                            halfStarEnabled={true} fullStarColor={'rgb(237,90,107)'} halfStarColor={'rgb(237,90,107)'}/>
                <View>
                    <Text>{result.review_count} REVIEWS</Text>
                </View>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <ShowRestaurantRating/>

            <View style={{marginLeft: 100, alignItems: 'center', flexDirection: 'row'}}>
                <Image source={require('../../assets/addRating.png')}
                       style={{height: 25, width: 25, tintColor: 'rgb(237,90,107)'}}/>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <StarRating disabled={false} maxStars={5} starSize={25} rating={addRating}
                                        halfStarEnabled={true} fullStarColor={'rgb(237,90,107)'}
                                        halfStarColor={'rgb(237,90,107)'} selectedStar={(rating) => {
                                setAddRating(rating)
                            }}/>

                            <TouchableHighlight
                                style={styles.openButton}
                                onPress={() => {
                                    setModalVisible(false);
                                    showToastWithGravityAndOffset();
                                }}
                            >
                                <Text style={styles.textStyle}>Submit</Text>
                            </TouchableHighlight>
                        </View>
                    </View>
                </Modal>
                <TouchableOpacity onPress={() => {
                    setModalVisible(true);
                }}>
                    <Text style={{
                        fontSize: 16, marginLeft: 10, color: 'rgb(237,90,107)', textDecorationLine: 'underline',
                    }}>Add Rating</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        margin: 20,
        flexDirection: 'row'
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    openButton: {
        backgroundColor: "#2196F3",
        borderRadius: 20,
        padding: 10,
        elevation: 2,
        marginTop: 20
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
})

export default RatingComponent;
