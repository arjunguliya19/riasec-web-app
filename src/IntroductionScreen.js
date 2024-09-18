import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';

const IntroductionScreen = ({ onStartTest }) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Welcome to the Career Identifier Test by CyberSharp</Text>
      
      <Text style={styles.subtitle}>About the Test</Text>
      <Text style={styles.text}>
        The test uses RIASEC model, which is a theory of careers and vocational choice 
        based upon personality types. It includes six categories:
      </Text>
      <Text style={styles.list}>
        • Realistic (R) • Investigative (I) • Artistic (A){"\n"}
        • Social (S) • Enterprising (E) • Conventional (C)
      </Text>
      
      <Text style={styles.subtitle}>How It Helps</Text>
      <Text style={styles.text}>
        This test helps you identify your predominant personality types, which can guide you 
        towards career paths that align with your interests and strengths. It can assist in:
      </Text>
      <Text style={styles.list}>
        • Choosing a career{"\n"}
        • Selecting educational programs{"\n"}
        • Understanding your work preferences{"\n"}
        • Identifying potential job satisfaction areas
      </Text>
      
      <Text style={styles.subtitle}>How to Answer the Questions</Text>
      <Text style={styles.text}>
        • Read each statement carefully{"\n"}
        • Respond based on your genuine interests, not what you think you should like{"\n"}
        • Choose the option that best represents your level of agreement{"\n"}
        • Don't overthink – your first instinct is often the most accurate{"\n"}
        • Answer all questions for the most accurate results
      </Text>
      
      <TouchableOpacity style={styles.button} onPress={onStartTest}>
        <Text style={styles.buttonText}>Start the Test</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#FFFFFF',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#000',
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 15,
    marginBottom: 10,
    color: '#000',
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
    color: '#000',
  },
  list: {
    fontSize: 16,
    marginLeft: 10,
    marginBottom: 10,
    color: '#000',
  },
  button: {
    backgroundColor: '#956A64',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default IntroductionScreen;
