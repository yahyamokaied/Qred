import React, { useState, useEffect } from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native';

const FetchData = () => {

    const [fetchedData, setFetchedData] = useState();


    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        try {
            let res = await fetch('https://c20zuamcv7.execute-api.eu-north-1.amazonaws.com/default/CaseStudy_Dummy_Endpoint');
            let data = await res.json();
            setFetchedData(data);
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    };


    return (
        <View style={styles.row}>
            <Text style={styles.btnTXT}>{fetchedData}</Text>
        </View>


    )
};

const styles = StyleSheet.create({
    row: {
        flex: 1,
        flexDirection: 'row',
        margin: 4
    },
    btnTXT: {
        fontSize: 14,
        fontWeight: 'bold',
        color: 'grey'
    }
});

export default FetchData;