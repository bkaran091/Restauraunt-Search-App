import React, {useState} from 'react';
import {Text, ScrollView, View, StyleSheet} from 'react-native';
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import ResultsList from "../components/ResultsList";

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [searchApi, results, errorMessage] = useResults();

    const filterResultsByPrice = (price) => {
        //price === '$' || '$$' || '$$$' || '$$$$'
        return results.filter(result => {
            return result.price === price;
        });
    };

    return (
        <>
            <View style={styles.container}>
                <SearchBar
                    term={term}
                    onTermChange={setTerm}
                    onTermSubmit={() => searchApi(term)}
                />
                {errorMessage ? <Text>{errorMessage} </Text> : null}
                <ScrollView showsVerticalScrollIndicator={false}>
                    <ResultsList results={filterResultsByPrice('$')} title={"Cost Effective"}/>
                    <ResultsList results={filterResultsByPrice('$$')} title={"Bit Pricier"}/>
                    <ResultsList results={filterResultsByPrice('$$$')} title={"Big Spender!"}/>
                    <ResultsList results={filterResultsByPrice('$$$$')} title={"Very Big Spender!"}/>
                </ScrollView>
            </View>
        </>
    )
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1
    }
})

export default SearchScreen;
