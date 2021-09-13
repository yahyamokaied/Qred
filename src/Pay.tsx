import React, { useState } from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity, FlatList, Alert } from 'react-native';


const Pay = (step: any, setStep: any) => {

    const [selectedId, setSelectedId] = useState(null);

    const [selectedPaymentType, setSelectedPaymentType] = useState(null);
    const [selectedPaymentAmount, setSelectedPaymentAmount] = useState(null);

    const DATA = [
        {
            id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
            type: "Pay Now",
            amount: '19 157 kr',
        },
        {
            id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
            type: "Pay in 30 days",
            amount: '19 444 kr',
        },
        {
            id: "58694a0f-3da1-471f-bd96-145571e29d72",
            type: "Pay in 12 months",
            amount: '1620 kr per month',
        },
    ];

    const Item = ({ type, amount, onPress, item }: any) => (
        <TouchableOpacity
            onPress={() => { onPress() }}
            style={styles.itemRow
            }>
            {item.id === selectedId ?

                <Image
                    style={styles.icon}
                    source={require('../assets/checked.png')}
                />
                :
                <Image
                    style={styles.icon}
                    source={require('../assets/unchecked.png')}
                />
            }
            <View style={styles.itemColumn}>
                <Text style={styles.txt}>{type}</Text>
                <Text style={styles.smallTXT}>{amount}</Text>

            </View>
        </TouchableOpacity>

    );

    const renderItem = ({ item }: any) => (
        <Item
            item={item}
            type={item.type}
            amount={item.amount}
            onPress={() => {
                setSelectedId(item.id)
                setSelectedPaymentType(item.type);
                setSelectedPaymentAmount(item.amount);
            }}
        />
    );

    const Confirm = () => {
        Alert.alert(
            "Confirm Payment",
            `Are you sure that you selected: \n${selectedPaymentAmount} - ${selectedPaymentType} ?`,
            [
                {
                    text: "Yes(Pay)", onPress: () => {
                        Alert.alert('Your Payment Has Been Successfully Received.');
                        step.setStep(0)
                    }
                },
                {
                    text: "No(Edit)",
                    onPress: () => step.setStep(2),
                },

                {
                    text: "Cancel",
                    onPress: () => {
                        Alert.alert('Your Payment Has Been canceled.');
                        step.setStep(0)
                    },
                    style: "cancel"
                }
            ]
        );


    }

    if (step.step == 1)
        return (
            <View style={styles.Container}>
                <View style={styles.row}>
                    <Text style={styles.txt}>Invoice</Text>
                    <Image
                        style={styles.img}
                        source={require('../assets/edit.png')}
                    />
                </View>
                <View style={styles.column}>
                    <Text style={styles.txt}>Receiver : Tele2 AB</Text>
                    <Text style={styles.txt}>Amount: 19 157 kr</Text>
                    <Text style={styles.txt}>Due data: 2020-06-06</Text>
                </View>
                <TouchableOpacity style={styles.btn}
                    onPress={() => {
                        step.setStep(2)
                    }}>
                    <Text style={styles.btnTXT}>NEXT</Text>
                </TouchableOpacity>

            </View >
        );

    if (step.step == 2)
        return (
            <View style={styles.Container}>
                <View style={styles.row}>
                    <Text style={styles.txt}>When do you want to pay?</Text>
                </View>
                <FlatList
                    data={DATA}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                    extraData={selectedId}
                />
                <TouchableOpacity style={styles.btn}
                    onPress={() => {
                        selectedPaymentType === null ?
                            Alert.alert('Please choose Payment type!')
                            :
                            step.setStep(3)
                    }}>
                    <Text style={styles.btnTXT}>NEXT</Text>
                </TouchableOpacity>

            </View>
        );


    if (step.step == 3) return (
        <View style={styles.Container}>
            <View style={styles.row}>
            </View>
            <View style={styles.column}>
                <Image
                    style={styles.logo}
                    source={require('../assets/bankid.png')}
                />
            </View>
            <TouchableOpacity style={styles.btn}
                onPress={() => { Confirm() }}>
                <Text style={styles.btnTXT}>CONFIRM</Text>
            </TouchableOpacity>
        </View>
    );

    return null;

};


const styles = StyleSheet.create({
    Container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    row: {
        width: '100%',
        height: '25%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        padding: 40,
    },
    itemColumn: {
        width: '80%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    itemRow: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-start',
        marginVertical: 20
    },
    column: {
        width: '100%',
        height: '20%',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        paddingHorizontal: 40,
    },
    icon: {
        width: 25,
        height: 25,
        resizeMode: 'cover',
        margin: 10
    },
    img: {
        width: 75,
        height: 75,
        resizeMode: 'cover',
    },
    logo: {
        width: 300,
        height: 300,
        alignSelf: 'center',
        resizeMode: 'cover',
    },
    btn: {
        width: '90%',
        height: 70,
        borderRadius: 20,
        backgroundColor: '#81f542',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 50
    },
    btnTXT: {
        fontSize: 28,
        fontWeight: 'bold',
        color: 'white'
    },
    txt: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'black'
    },
    smallTXT: {
        fontSize: 24,
        color: 'black'
    }
});

export default Pay;