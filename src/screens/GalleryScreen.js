import React, {useState, useEffect} from "react";
import {FlatList, Image, StyleSheet, View} from "react-native";
import yelp from "../api/yelp";
import Loader from "../components/Loader";


const GalleryScreen = ({id}) => {
    const [result, setResult] = useState(null);
    const getResult = async (id) => {
        const response = await yelp.get(`/${id}`);
        setResult(response.data);
    };
    useEffect(() => {
        getResult(id);
    }, []);
    if (!result || !result.photos) {
        return null;
    }
    return (
        <View style={styles.centeredView}>
            <Loader/>
            <FlatList
                data={result.photos}
                showsVerticalScrollIndicator={false}
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
    );
};

const styles = StyleSheet.create({
    image: {
        height: 200,
        width: 300,
        borderRadius: 20,
        marginBottom: 30,
        borderWidth: 3
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'white',
        paddingTop: 20,
    },
});

export default GalleryScreen;
