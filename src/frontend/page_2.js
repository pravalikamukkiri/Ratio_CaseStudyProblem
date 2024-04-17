// Page1.js
import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import styles from './styles'; // Assuming this is the correct path

const Page2 = ({ itemId, handleNextPage, handleSkip }) => {
    const [item, setItem] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        console.log('http://10.0.2.2:3000/items/'+itemId);
        fetch('http://10.0.2.2:3000/items/'+itemId) // Replace with your server URL
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setItem(data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Failed to fetch item:', error);
                setLoading(false);
            });
    }, []);

    return (
    <View style={styles.modalView}>
        <Text style={styles.modalTextHeader2}>{item ? item.heading : "Loading..."}</Text>
        {item && item.content && item.content.map((contentItem, index) => (
            <TouchableOpacity key={index} style={styles.button2} onPress={() => handleNextPage(index + 1)}>
                <Text style={styles.buttonText2}>{contentItem}</Text>
            </TouchableOpacity>
        ))}
      </View>
    );
};
export default Page2;
