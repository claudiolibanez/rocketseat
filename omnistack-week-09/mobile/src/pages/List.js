import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import { Alert, SafeAreaView, ScrollView, StyleSheet, AsyncStorage, Image, Platform, TouchableOpacity } from 'react-native';

import SpotList from '../components/SpotList';

import logo from '../assets/logo.png';

export default function List({ navigation }) {
    const [techs, setTechs] = useState([]);

    useEffect(() => {
        AsyncStorage.getItem('user')
            .then(user_id => {
                const socket = io('http://localhost:3333', {
                    query: { user_id }
                });

                socket.on('booking_response', booking => {
                    Alert.alert('Mensagem de Alerta!',`Sua reserva em ${booking.spot.company} em ${booking.date} foi ${booking.approved ? 'APROVADA' : 'REJEITADA'}`);
                });
        });
    },[]);

    useEffect(() => {
        AsyncStorage.getItem('techs')
            .then(storagedTechs => {
                const techsArray = storagedTechs.split(',').map( tech => tech.trim());

                setTechs(techsArray);
            });
    },[]);

    async function handleLogout() {
        await AsyncStorage.removeItem('user');
        
        navigation.navigate('Login');
    }

    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity onPress={handleLogout}>
                <Image style={styles.logo} source={logo} />
            </TouchableOpacity>

            <ScrollView>
                {techs.map(tech => <SpotList key={tech} tech={tech} />)}
            </ScrollView>
            
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? 25 : 0
    },

    logo: {
        height: 32,
        resizeMode: 'contain',
        alignSelf: 'center',
        marginTop: 10

    }
});