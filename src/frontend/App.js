import React, { useState, useEffect } from 'react';
import { Modal, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import styles from './styles.js';
import Page1 from './page_1.js';
import Page2 from './page_2.js';
import LastPage from './last_page.js';

const App = () => {
  const [modalVisible, setModalVisible] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemId, setItemId] = useState("1");
  const [itemReady, setItemReady] = useState(false);

  useEffect(() => {
      setItemReady(true);
    }, [itemId]);

  const handleNextPage = async (buttonId) => {
      console.log("Button ID:", buttonId);
      try {
        // Sending a POST request to your Node.js server
        const response = await fetch('http://10.0.2.2:3000/nextPage', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ currentPage, buttonId, itemId })
        });
        const jsonResponse = await response.json();
        console.log(currentPage);
        console.log("ressss");
        console.log(jsonResponse);
        if (jsonResponse.nextPage) {
          setCurrentPage(jsonResponse.nextPage);
          setItemReady(false); // Before updating itemId, mark item as not ready
        }
        if (jsonResponse.itemId) {
          setItemId(jsonResponse.itemId);
        }

      } catch (error) {
        console.error('Failed to fetch:', error);
        Alert.alert("Error", "Unable to connect to server."); // Show an error alert if the fetch fails
      }
    };


  const handleSkip = () => {
    setModalVisible(false);
  };



  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        {currentPage === 1 && <Page1 itemId={itemId} handleNextPage={handleNextPage} />}
        {currentPage === 2 && <Page2 itemId={itemId} handleNextPage={handleNextPage} />}
        {itemReady && currentPage === 3 && <Page2 itemId={itemId} handleNextPage={handleNextPage} />}
        {itemReady && currentPage === 4 && <Page2 itemId={itemId} handleNextPage={handleNextPage} />}
        {currentPage === 5 && <LastPage handleNextPage={handleNextPage} />}

      </Modal>
    </View>
  );
};

export default App;
