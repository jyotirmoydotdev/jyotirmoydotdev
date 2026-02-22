import React from 'react';
import { Page, Text, View, Document, StyleSheet, Link } from '@react-pdf/renderer';
import { Resume } from '@/resume';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#ffffff',
    padding: 37.8,
  },
  headerSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 4
  },
  section: {
  }
});


const ResumePage = () => (
  <Document title='Resume'>
    <Page size="A4" style={styles.page}>
      <View style={styles.headerSection}>
        <View style={styles.section}>
          <Text style={{ fontSize: 30, paddingBottom: 4, color: '#2A4CD0' }}>{Resume.title}</Text>
          <Text style={{ fontSize: 9 }}>{Resume.role} / {Resume.subTitle}</Text>
        </View>
        <View>
          {
            Resume.resumeLinks.map((data, index) => (
              <View key={index} style={{ paddingBottom: 2 }}>
                <Text style={{ fontSize: 9, color: '#5E5E5E' }}>
                  {data.title}: <Link href={data.link} style={{ textDecoration: 'none' }}>{data.label}</Link>
                </Text>
              </View>
            ))
          }
        </View>
      </View>
      <View style={styles.section}>
        <Text>
          {/* {Resume.summary} */}
        </Text>
      </View>
      <View style={styles.section}>
        {/* <Text>Section #2</Text> */}
      </View>

    </Page>
  </Document>
);

export default ResumePage;
