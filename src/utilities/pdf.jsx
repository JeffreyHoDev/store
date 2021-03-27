import React from 'react';
import { Page, Text, View, Document, StyleSheet, Image } from '@react-pdf/renderer';
import Logo from './logo.jpg'
import './pdf.scss'

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#E4E4E4'
  },
  section: {
    margin: 10,
    padding: 10
  },
  image: {
    width: '50%',
    padding: 10,
    alignSelf: "center"
  }
});

// Create Document Component
const MyDocument = ({ requestDetail }) => (
  <Document className="document">
      {
          requestDetail?
            <Page size="A4" style={styles.page}>
            <View style={styles.section}>
                <Image style={styles.image} src={Logo} />
            </View>
            <View style={styles.section}>
                <Text>Request ID: {requestDetail[0]["request_id"]}</Text>
            </View>
            <View style={styles.section}>
                <Text>Project: {requestDetail[0]["project_name"]}</Text>
            </View>
            <View style={styles.section}>
            {
                requestDetail[0]["item_details"].map((item, index) => {
                    return <Text key={"item" + index}>{index}. {item.name} - {item.quantity}</Text>
                })
            }
            </View>
            <View style={styles.section}>
                <Text>Collection Date: {requestDetail[0]["collection_date"]}</Text>
            </View>
            <View style={styles.section}>
                <Text>Requestor: {requestDetail[0]["requestor"]}</Text>
            </View>
            </Page>
        : null
      }
  </Document>
);



export default MyDocument