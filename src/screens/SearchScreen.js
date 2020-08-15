import React, {useState} from 'react';
import {Text, ScrollView, View} from 'react-native';
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import ResultsList from "../components/ResultsList";
import ActivityIndicatorExample from "../components/ActivityIndicator";

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
            <View style={{backgroundColor: 'white', flex: 1}}>

                <ActivityIndicatorExample/>
                <SearchBar
                    term={term}
                    onTermChange={setTerm}
                    onTermSubmit={() => searchApi(term)}
                />
                {errorMessage ? <Text>{errorMessage} </Text> : null}
                <ScrollView>
                    <ResultsList results={filterResultsByPrice('$')} title={"Cost Effective"}/>
                    <ResultsList results={filterResultsByPrice('$$')} title={"Bit Pricier"}/>
                    <ResultsList results={filterResultsByPrice('$$$')} title={"Big Spender!"}/>
                    <ResultsList results={filterResultsByPrice('$$$$')} title={"Very Big Spender!"}/>
                </ScrollView>
            </View>
        </>
    )
};

export default SearchScreen;
