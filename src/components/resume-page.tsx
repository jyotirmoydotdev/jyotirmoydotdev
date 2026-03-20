"use client";

import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Link,
} from "@react-pdf/renderer";
import { Resume } from "@/resume";

const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "#ffffff",
    padding: 37.8,
  },
  headerSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 4,
  },
  mainSection: {
    flexDirection: "row", // IMPORTANT
    marginTop: 10,
  },
  leftSection: {
    flex: 2, // 2/3 width
    paddingRight: 10,
  },
  rightSection: {
    flex: 1, // 1/3 width
    paddingLeft: 10,
  },
});

const ResumePage = () => (
  <Document title="Resume">
    <Page size="A4" style={styles.page}>
      <View style={styles.headerSection}>
        <View>
          <Text style={{ fontSize: 30, paddingBottom: 4, color: "#2A4CD0" }}>
            {Resume.title}
          </Text>
          <Text style={{ fontSize: 9 }}>
            {Resume.role} / {Resume.subTitle}
          </Text>
        </View>
        <View>
          {Resume.resumeLinks.map((data, index) => (
            <View key={index} style={{ paddingBottom: 2 }}>
              <Text style={{ fontSize: 9, color: "#5E5E5E" }}>
                {data.title}:{" "}
                <Link href={data.link} style={{ textDecoration: "none" }}>
                  {data.label}
                </Link>
              </Text>
            </View>
          ))}
        </View>
      </View>

      <View style={styles.mainSection}>
        <View style={styles.leftSection}>
          <Text></Text>
        </View>

        <View style={styles.rightSection}>
          <Text></Text>
        </View>
      </View>
    </Page>
  </Document>
);

export default ResumePage;
