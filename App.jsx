/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Calculate from './src/Calculate';

const Section = () => {
  const isDarkMode = useColorScheme() === 'dark';
  // return (
  //   <View style={styles.sectionContainer}>
  //     <Text
  //       style={[
  //         styles.sectionTitle,
  //         {
  //           color: isDarkMode ? Colors.white : Colors.black,
  //         },
  //       ]}>
  //       {title}
  //     </Text>
  //     <Text
  //       style={[
  //         styles.sectionDescription,
  //         {
  //           color: isDarkMode ? Colors.light : Colors.dark,
  //         },
  //       ]}>
  //       {children}
  //     </Text>
  //   </View>
  // );
  return (
    <View style={styles.sectionContainer}>
      <Calculate />
    </View>
  );
};

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={[backgroundStyle, styles.app]}>
        {/* <Header /> */}
        <Text style={styles.heading}>CGPA Calculator</Text>
        <Section />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  heading: {
    fontSize: 32,
    fontWeight: '600',
    marginTop: 36,
    textAlign: 'center',
    color: '#fff',
  },
  app: {
    backgroundColor: '#0de',
  },
});

export default App;
