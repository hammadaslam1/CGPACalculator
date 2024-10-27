import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  ScrollView,
  StyleSheet,
  Alert,
} from 'react-native';
import SaveResults from './SaveFile';
const Calculate = () => {
  const [students, setStudents] = useState([]);
  const [currentStudent, setCurrentStudent] = useState({
    name: '',
    eng: 0,
    urdu: 0,
    maths: 0,
    subject: '',
    pst: 0,
    isl: 0,
    alq: 0,
    phy: 0,
    chem: 0,
    totalMarks: 0,
    percentage: 0,
    grade: '',
  });

  const calculateGrade = percentage => {
    if (percentage >= 90) {
      return 'A+';
    }
    if (percentage >= 80) {
      return 'A';
    }
    if (percentage >= 70) {
      return 'B+';
    }
    if (percentage >= 60) {
      return 'B';
    }
    if (percentage >= 50) {
      return 'C';
    }
    if (percentage >= 40) {
      return 'D';
    }
    return 'F';
  };

  const handleInputChange = (field, value) => {
    setCurrentStudent({
      ...currentStudent,
      [field]: value,
    });
  };

  const handleSubmit = () => {
    const totalMarks =
      parseInt(currentStudent.eng, 10) +
      parseInt(currentStudent.urdu, 10) +
      parseInt(currentStudent.maths, 10) +
      parseInt(currentStudent.pst, 10) +
      parseInt(currentStudent.isl, 10) +
      parseInt(currentStudent.alq, 10) +
      parseInt(currentStudent.phy, 10) +
      parseInt(currentStudent.chem, 10);

    const percentage = (totalMarks / 545) * 100;
    const grade = calculateGrade(percentage);

    const newStudent = {
      ...currentStudent,
      totalMarks,
      percentage,
      grade,
    };

    setStudents([...students, newStudent]);
    setCurrentStudent({
      name: '',
      eng: 0,
      urdu: 0,
      maths: 0,
      subject: '',
      pst: 0,
      isl: 0,
      alq: 0,
      phy: 0,
      chem: 0,
      totalMarks: 0,
      percentage: 0,
      grade: '',
    });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Student Result System</Text>
      <View style={styles.inputContainer}>
        <Text>Name:</Text>
        <TextInput
          style={styles.input}
          value={currentStudent.name}
          onChangeText={text => handleInputChange('name', text)}
          placeholder="Enter student name"
        />
      </View>
      <View style={styles.inputContainer}>
        <Text>English Marks (out of 75):</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={currentStudent.eng.toString()}
          onChangeText={text => handleInputChange('eng', text)}
          placeholder="Enter marks"
        />
      </View>
      <View style={styles.inputContainer}>
        <Text>Urdu Marks (out of 75):</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={currentStudent.urdu.toString()}
          onChangeText={text => handleInputChange('urdu', text)}
          placeholder="Enter marks"
        />
      </View>
      <View style={styles.inputContainer}>
        <Text>Maths Marks (out of 75):</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={currentStudent.maths.toString()}
          onChangeText={text => handleInputChange('maths', text)}
          placeholder="Enter marks"
        />
      </View>
      <View style={styles.inputContainer}>
        <Text>Computer/Biology Marks (out of 50/60):</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={currentStudent.subject.toString()}
          onChangeText={text => handleInputChange('subject', text)}
          placeholder="Enter marks"
        />
      </View>
      <View style={styles.inputContainer}>
        <Text>PST Marks (out of 50):</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={currentStudent.pst.toString()}
          onChangeText={text => handleInputChange('pst', text)}
          placeholder="Enter marks"
        />
      </View>
      <View style={styles.inputContainer}>
        <Text>Islamiat Marks (out of 50):</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={currentStudent.isl.toString()}
          onChangeText={text => handleInputChange('isl', text)}
          placeholder="Enter marks"
        />
      </View>
      <View style={styles.inputContainer}>
        <Text>Al-Quran Marks (out of 50):</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={currentStudent.alq.toString()}
          onChangeText={text => handleInputChange('alq', text)}
          placeholder="Enter marks"
        />
      </View>
      <View style={styles.inputContainer}>
        <Text>Physics Marks (out of 60):</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={currentStudent.phy.toString()}
          onChangeText={text => handleInputChange('phy', text)}
          placeholder="Enter marks"
        />
      </View>
      <View style={styles.inputContainer}>
        <Text>Chemistry Marks (out of 60):</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={currentStudent.chem.toString()}
          onChangeText={text => handleInputChange('chem', text)}
          placeholder="Enter marks"
        />
      </View>
      <Button style={styles.button} title="Calculate" onPress={handleSubmit} />

      <Text style={styles.subtitle}>Student Results:</Text>
      {students.map((student, index) => (
        <View key={index} style={styles.result}>
          <Text>
            {student.name} - Total Marks: {student.totalMarks}
          </Text>
          <Text>
            Percentage: {student.percentage.toFixed(2)}%, Grade: {student.grade}
          </Text>
        </View>
      ))}

      <SaveResults studentData={students} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f8f8f8',
    marginBottom: 25,
    borderRadius: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputContainer: {
    marginBottom: 15,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    marginTop: 5,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
  },
  result: {
    marginTop: 10,
    padding: 10,
    backgroundColor: '#e0e0e0',
    borderRadius: 5,
  },
  button: {
    backgroundColor: '#00ddee',
    color: '#fff',
  },
});

export default Calculate;
