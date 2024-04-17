// Page1.js
import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import styles from './styles';

const Page1 = ({ itemId, handleNextPage, handleSkip }) => {
    return (
    <View style={styles.modalView}>
        <Text style={styles.modalTextHeader}>You've matched with Sarah!</Text>
        <Text style={styles.modalTextSub}>Please take a moment to fill out a short three-question survey, helping us identify the best location for a potential first date.</Text>

        <View style={styles.buttonsContainer}>
            <TouchableOpacity style={[styles.button, styles.buttonLeft]} onPress={() => handleNextPage(1)}>
                <Text style={styles.buttonText}>Let's do it!</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, styles.buttonRight]} onPress={handleSkip}>
                <Text style={styles.buttonText}>Maybe later</Text>
            </TouchableOpacity>
        </View>

        <View style={styles.footer}>
            <Text style={styles.modalTextFooter}>Don’t show me this again</Text>
            <TouchableOpacity style={styles.exitButton} onPress={handleSkip}>

            </TouchableOpacity>
        </View>
        <View style={styles.footer2}>
            <Text style={styles.modalTextFooter2}>You can always change your preference in the settings</Text>
        </View>

      </View>
    );
};
export default Page1;
