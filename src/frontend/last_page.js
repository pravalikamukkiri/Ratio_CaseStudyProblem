
import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import styles from './styles'; // Assuming this is the correct path

const LastPage = ({ handleNextPage, handleSkip }) => {
    return (
    <View style={styles.modalView}>
        <Text style={styles.modalTextHeader}>Thanks! We have enough to provide you three potential places for you to consider.</Text>

        <View style={styles.buttonsContainer}>
            <TouchableOpacity style={[styles.button, styles.buttonLeft]} onPress={() => handleNextPage(1)}>
                <Text style={styles.buttonText}>Back to Matching</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, styles.buttonRight]} onPress={handleSkip}>
                <Text style={styles.buttonText}>Head to conversation</Text>
            </TouchableOpacity>
        </View>
      </View>
    );
};
export default LastPage;
