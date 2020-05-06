import React from 'react';
import {Text , StyleSheet , View} from 'react-native';
import {FontAwesome} from "@expo/vector-icons";

const AddressDetail = ({result}) => {
    const AddressComponent = () => {
        return (
            <View>
                {result.location.address1 ? <Text style={styles.text}>{result.location.address1}, </Text> : null}
                {result.location.address2 ? <Text style={styles.text}>{result.location.address2}, </Text> : null}
                {result.location.address3 ? <Text style={styles.text}>{result.location.address3} , </Text> : null}
                {result.location.city ? <Text style={styles.text}>{result.location.city} ,</Text> : null}
                {result.location.state ? <Text style={styles.text}>{result.location.state} , {result.location.zip_code}</Text> : null}
            </View>
        );
    }
    return (
        <View style={styles.contactSection}>
            <FontAwesome name="address-book" style={{fontSize: 40, textAlign: 'center' , color:'white', marginBottom:5}}/>
            <AddressComponent/>
        </View>
    )
};

const styles = StyleSheet.create({
    contactSection: {
        flex: 1,
        backgroundColor: '#d32c64',
        marginRight: 15,
        height: 145,
        width: 40,
        padding: 15,
        borderRadius: 20,
    },
    text:{
      color:'white',
        fontWeight:'bold',
    },
});

export default AddressDetail;