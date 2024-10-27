import React from 'react';
import { View, Button, Alert } from 'react-native';
import RNFS from 'react-native-fs'; // For file system handling
import * as XLSX from 'xlsx'; // For Excel file creation
import { json2csv } from 'json2csv'; // For CSV generation

const SaveResults = ({ studentData }) => {

  // Function to generate CSV and save it
  const saveAsCSV = async () => {
    try {
      // Convert JSON data to CSV format
      const csv = json2csv.parse(studentData);
      
      // File path to save CSV
      const filePath = `${RNFS.DocumentDirectoryPath}/student_records.csv`;
      
      // Write CSV file to the device
      await RNFS.writeFile(filePath, csv, 'utf8');
      
      Alert.alert('Success', `CSV saved to: ${filePath}`);
    } catch (error) {
      console.error('Error saving CSV file:', error);
    }
  };

  // Function to generate Excel file and save it
  const saveAsExcel = async () => {
    try {
      // Convert data to Excel sheet format
      const ws = XLSX.utils.json_to_sheet(studentData);
      const wb = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, ws, 'Students');

      // Create binary string for the Excel file
      const wbout = XLSX.write(wb, { type: 'binary', bookType: 'xlsx' });
      
      // File path to save Excel
      const filePath = `${RNFS.DocumentDirectoryPath}/student_records.xlsx`;
      
      // Write Excel file
      await RNFS.writeFile(filePath, wbout, 'ascii');

      Alert.alert('Success', `Excel file saved to: ${filePath}`);
    } catch (error) {
      console.error('Error saving Excel file:', error);
    }
  };

  return (
    <View>
      <Button title="Save as CSV" onPress={saveAsCSV} />
      <Button title="Save as Excel" onPress={saveAsExcel} />
    </View>
  );
};

export default SaveResults;
