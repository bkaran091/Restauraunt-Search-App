import React, {useState, useEffect} from "react";
import {
    Alert, FlatList, Image,
    Modal,
    StyleSheet,
    Text,
    TouchableHighlight,
    View
} from "react-native";
import yelp from "../api/yelp";
import ActivityIndicatorExample from "../components/ActivityIndicator";


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
            {/*<ActivityIndicatorExample/>*/}
            <FlatList
                data={result.photos}
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
        elevation: 5,
    },
    openButton: {
        backgroundColor: "#F194FF",
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center",
        fontSize: 20,
    }
});

export default GalleryScreen;
