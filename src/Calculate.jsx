/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {
  ScrollView,
  Text,
  TextInput,
  View,
  Button,
  StyleSheet,
} from 'react-native';
import SaveResults from './SaveFile';
// import styles from './styles'; // Adjust the import path for your styles

const StudentResultSystem = () => {
  const [topStudents, setTopStudents] = useState([]);
  const [currentStudent, setCurrentStudent] = useState({
    name: '',
    english: 0,
    urdu: 0,
    maths: 0,
    pakstudies: 0,
    islamiat: 0,
    alquran: 0,
    physics: 0,
    chemistry: 0,
    biology: 0,
    totalMarks: 0,
    average: 0,
    cgpa: 0,
    rank: 0,
    // Add more subjects as needed
  });
  const allInputs = [
    {
      label: 'Full Name',
      placeholder: 'Enter Full Name',
      marks: false,
      onClick: handleNameChange,
      field: 'name',
      value: currentStudent.name,
    },
    {
      label: 'English',
      placeholder: 'Enter English Marks',
      marks: 75,
      onClick: handleInputChange,
      field: 'english',
      value: currentStudent.english,
    },
    {
      label: 'Urdu',
      placeholder: 'Enter Urdu Marks',
      marks: 75,
      onClick: handleInputChange,
      field: 'urdu',
      value: currentStudent.urdu,
    },
    {
      label: 'Mathematics',
      placeholder: 'Enter Mathematics Marks',
      marks: 75,
      onClick: handleInputChange,
      field: 'maths',
      value: currentStudent.maths,
    },
    {
      label: 'Pak Studies',
      placeholder: 'Enter Pak Studies Marks',
      marks: 50,
      onClick: handleInputChange,
      field: 'pakstudies',
      value: currentStudent.pakstudies,
    },
    {
      label: 'Islamiat',
      placeholder: 'Enter Islamiat Marks',
      marks: 50,
      onClick: handleInputChange,
      field: 'islamiat',
      value: currentStudent.islamiat,
    },
    {
      label: 'Al-Quran',
      placeholder: 'Enter Al-Quran Marks',
      marks: 50,
      onClick: handleInputChange,
      field: 'alquran',
      value: currentStudent.alquran,
    },
    {
      label: 'Physics',
      placeholder: 'Enter Physics Marks',
      marks: 60,
      onClick: handleInputChange,
      field: 'physics',
      value: currentStudent.physics,
    },
    {
      label: 'Chemistry',
      placeholder: 'Enter Chemistry Marks',
      marks: 60,
      onClick: handleInputChange,
      field: 'chemistry',
      value: currentStudent.chemistry,
    },
    {
      label: 'Biology',
      placeholder: 'Enter Biology Marks',
      marks: 60,
      onClick: handleInputChange,
      field: 'biology',
      value: currentStudent.biology,
    },
  ];

  const [students, setStudents] = useState([]);

  const handleInputChange = (field, value) => {
    setCurrentStudent({
      ...currentStudent,
      [field]: Number(value),
    });
  };
  const handleNameChange = (field, value) => {
    setCurrentStudent({
      ...currentStudent,
      [field]: value,
    });
  };

  const calculateCGPA = percentage => {
    if (percentage < 50) return 0;
    let cgpa = 2.0 + Math.floor((percentage - 50) / 2) * 0.1;
    if (cgpa > 4.0) cgpa = 4.0;
    return cgpa; // 0 for fail
  };

  const handleSubmit = () => {
    const {
      english, //75
      urdu, //75
      maths, //75
      pakstudies, //50
      islamiat, //50
      alquran, //50
      physics, //60
      chemistry, //60
      biology, //60
      name, //name
    } = currentStudent;
    let totalMarks =
      Number(english) +
      Number(urdu) +
      Number(maths) +
      Number(pakstudies) +
      Number(islamiat) +
      Number(alquran) +
      Number(physics) +
      Number(biology) +
      Number(chemistry);
    let percentage = (totalMarks / 555.0) * 100.0;
    let grade = '';

    if (percentage >= 90) {
      grade = 'A+';
    } else if (percentage >= 80) {
      grade = 'A';
    } else if (percentage >= 70) {
      grade = 'B+';
    } else if (percentage >= 60) {
      grade = 'B';
    } else if (percentage >= 50) {
      grade = 'C';
    } else if (percentage >= 40) {
      grade = 'D';
    } else {
      grade = 'F';
    }

    const cgpa = calculateCGPA(percentage);

    const newStudent = {
      name,
      totalMarks,
      percentage,
      grade,
      cgpa,
    };

    setStudents([...students, newStudent]);
    setCurrentStudent({
      name: '',
      english: 0,
      urdu: 0,
      maths: 0,
      pakstudies: 0,
      islamiat: 0,
      alquran: 0,
      physics: 0,
      chemistry: 0,
      biology: 0,
    });
  };
  const getTopStudents = () => {
    // Sort students by percentage in descending order and slice the top 3
    return students
      .slice()
      .sort((a, b) => b.percentage - a.percentage)
      .slice(0, 3);
  };
  useEffect(() => {
    setTopStudents(getTopStudents());
  }, [students]);
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Student Result System</Text>
      {allInputs.map((data, i) => (
        <View key={i} style={styles.inputContainer}>
          <Text>{data.label}:</Text>
          <TextInput
            style={styles.input}
            keyboardType={data.field == 'name' ? '' : 'numeric'}
            value={data.value}
            onChangeText={text => {
              setCurrentStudent({
                ...currentStudent,
                [data.field]: text,
              });
            }}
            placeholder={data.placeholder}
          />
        </View>
      ))}
      <Button style={styles.button} title="Calculate" onPress={handleSubmit} />
      {/* <SaveResults studentData={students} /> */}

      <Text style={styles.subtitle}>Student Results:</Text>
      {students.map((student, index) => (
        <View key={index} style={styles.result}>
          <Text>
            {student.name} - Total Marks: {student.totalMarks}
          </Text>
          <Text>
            Percentage: {student.percentage.toFixed(2)}%, Grade: {student.grade}
            , CGPA: {student.cgpa.toFixed(2)}
          </Text>
        </View>
      ))}
      <Text style={styles.subtitle}>Top 3 Students:</Text>
      {topStudents.length > 0 ? (
        topStudents.map((student, index) => (
          <View key={index} style={styles.result}>
            <Text>
              {student.name} - Total Marks: {student.totalMarks}, Percentage:{' '}
              {student.percentage.toFixed(2)}%
            </Text>
          </View>
        ))
      ) : (
        <Text>No students available.</Text>
      )}
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
    color: '#000',
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
export default StudentResultSystem;
