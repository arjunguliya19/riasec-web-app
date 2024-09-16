// App.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Dimensions } from 'react-native';
import IntroductionScreen from './IntroductionScreen';
import { BarChart } from 'react-native-chart-kit';



const categoryFullNames = {
  R: "Realistic",
  I: "Investigative",
  A: "Artistic",
  S: "Social",
  E: "Enterprising",
  C: "Conventional"
};


const questions = [
  // Realistic (R)
  { text: "I enjoy working with plants and animals.", category: "R" },
  { text: "I like to work with tools and machines.", category: "R" },
  { text: "I enjoy building or repairing things.", category: "R" },
  { text: "I like outdoor activities and physical work.", category: "R" },
  { text: "I prefer hands-on problem-solving.", category: "R" },
  { text: "I enjoy operating vehicles or machinery.", category: "R" },
  { text: "I like working with my hands to create or fix things.", category: "R" },
  { text: "I enjoy tasks that involve physical strength and coordination.", category: "R" },
  { text: "I prefer practical, hands-on training to theoretical learning.", category: "R" },
  { text: "I like to work with tangible materials like wood, metal, or textiles.", category: "R" },

  // Investigative (I)
  { text: "I like to conduct scientific experiments.", category: "I" },
  { text: "I enjoy solving complex problems.", category: "I" },
  { text: "I like to analyze data and information.", category: "I" },
  { text: "I enjoy reading scientific or technical journals.", category: "I" },
  { text: "I like to explore new ideas and theories.", category: "I" },
  { text: "I enjoy doing research and gathering information.", category: "I" },
  { text: "I like to work independently on intellectual tasks.", category: "I" },
  { text: "I enjoy learning about how things work.", category: "I" },
  { text: "I like to use logic and scientific methods to solve problems.", category: "I" },
  { text: "I enjoy working with abstract ideas and concepts.", category: "I" },

  // Artistic (A)
  { text: "I enjoy creating artwork or designs.", category: "A" },
  { text: "I like to express myself creatively.", category: "A" },
  { text: "I enjoy writing stories or poetry.", category: "A" },
  { text: "I like to perform in front of an audience.", category: "A" },
  { text: "I enjoy playing musical instruments or singing.", category: "A" },
  { text: "I like to think of new ways to do things.", category: "A" },
  { text: "I enjoy designing clothes, interiors, or landscapes.", category: "A" },
  { text: "I like to work in unstructured situations where I can use my imagination.", category: "A" },
  { text: "I enjoy creating visual art like paintings, sculptures, or photographs.", category: "A" },
  { text: "I like to express ideas through various art forms.", category: "A" },

  // Social (S)
  { text: "I like helping and teaching others.", category: "S" },
  { text: "I enjoy working in groups or teams.", category: "S" },
  { text: "I like to help people solve their problems.", category: "S" },
  { text: "I enjoy volunteering for social causes.", category: "S" },
  { text: "I like to work in roles that involve communication and interaction.", category: "S" },
  { text: "I enjoy counseling or providing guidance to others.", category: "S" },
  { text: "I like to participate in community activities.", category: "S" },
  { text: "I enjoy working with children or the elderly.", category: "S" },
  { text: "I like to help people learn new skills.", category: "S" },
  { text: "I enjoy mediating disputes or conflicts between people.", category: "S" },

  // Enterprising (E)
  { text: "I enjoy leading and persuading people.", category: "E" },
  { text: "I like to start and manage my own projects.", category: "E" },
  { text: "I enjoy selling products or promoting ideas.", category: "E" },
  { text: "I like to take risks and face challenges.", category: "E" },
  { text: "I enjoy public speaking and giving presentations.", category: "E" },
  { text: "I like to negotiate and make deals.", category: "E" },
  { text: "I enjoy organizing and managing activities.", category: "E" },
  { text: "I like to influence others' opinions or decisions.", category: "E" },
  { text: "I enjoy competitive activities.", category: "E" },
  { text: "I like to take on leadership roles in groups or organizations.", category: "E" },

  // Conventional (C)
  { text: "I like working with numbers and data.", category: "C" },
  { text: "I enjoy organizing and maintaining records.", category: "C" },
  { text: "I like to follow clear rules and instructions.", category: "C" },
  { text: "I enjoy creating and maintaining schedules.", category: "C" },
  { text: "I like to work with detailed information.", category: "C" },
  { text: "I enjoy using computers for data entry or analysis.", category: "C" },
  { text: "I like to keep things neat and orderly.", category: "C" },
  { text: "I enjoy working in structured environments.", category: "C" },
  { text: "I like to check work for errors and ensure accuracy.", category: "C" },
  { text: "I enjoy creating and following systematic procedures.", category: "C" },
];



const careerSuggestions = {
  R: [
    "Mechanical Engineer",
    "Civil Engineer",
    "Agriculturist",
    "Electrician",
    "Chef",
    "Physiotherapist",
    "Fitness Trainer",
    "Automobile Technician",
    "Textile Designer",
    "Forest Ranger"
  ],
  I: [
    "Data Scientist",
    "Software Engineer",
    "Research Scientist",
    "Biotechnologist",
    "Economist",
    "Pharmacologist",
    "Mathematician",
    "Archaeologist",
    "Robotics Engineer",
    "Environmental Scientist"
  ],
  A: [
    "Graphic Designer",
    "Fashion Designer",
    "Film Director",
    "Advertising Creative",
    "Architect",
    "Dancer/Choreographer",
    "Interior Designer",
    "Music Composer",
    "Content Writer",
    "UI/UX Designer"
  ],
  S: [
    "Teacher",
    "Social Worker",
    "Psychologist",
    "Human Resources Manager",
    "Nurse",
    "Customer Service Representative",
    "Career Counselor",
    "NGO Administrator",
    "Yoga Instructor",
    "Public Relations Specialist"
  ],
  E: [
    "Entrepreneur",
    "Sales Manager",
    "Business Consultant",
    "Marketing Manager",
    "Lawyer",
    "Real Estate Agent",
    "Investment Banker",
    "Hotel Manager",
    "Event Planner",
    "Politician"
  ],
  C: [
    "Accountant",
    "Bank Officer",
    "Financial Analyst",
    "Actuary",
    "Auditor",
    "Librarian",
    "Logistics Coordinator",
    "Quality Assurance Specialist",
    "Legal Secretary",
    "Database Administrator"
  ]
};



const App = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [scores, setScores] = useState({ R: 0, I: 0, A: 0, S: 0, E: 0, C: 0 });
  const [testCompleted, setTestCompleted] = useState(false);
  const [showIntroduction, setShowIntroduction] = useState(true);

  const handleAnswer = (answer) => {
    const category = questions[currentQuestion].category;
    setScores(prevScores => ({
      ...prevScores,
      [category]: prevScores[category] + answer
    }));

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setTestCompleted(true);
    }
  };

  const calculatePercentages = () => {
    const maxScorePerCategory = 40; // 10 questions per category, max score of 4 per question
    const percentages = {};
    for (const category in scores) {
      percentages[category] = (scores[category] / maxScorePerCategory) * 100;
    }
    return Object.entries(percentages)
      .sort((a, b) => b[1] - a[1]) // Sort from highest to lowest
      .reduce((obj, [key, value]) => ({ ...obj, [key]: value }), {});
  };

  const getDescription = (topCategories) => {
    const descriptions = {
      R: "You have a preference for working with objects, machines, and tools. You value practical skills and seeing tangible results from your work.",
      I: "You enjoy analytical, scientific, and intellectual activities. You like to observe, learn, investigate, analyze, evaluate, or solve problems.",
      A: "You have a preference for creative, original, and unsystematic activities that allow self-expression. You value aesthetics and innovation.",
      S: "You enjoy working with people - informing, helping, training, developing, or curing them. You value fostering the personal development of others.",
      E: "You like working with people, but prefer leading or persuading them. You value personal and organizational goal achievement.",
      C: "You prefer systematic, ordered activities that involve following procedures, routines, and standards. You value organizational and business achievement."
    };

    return topCategories.map(([category]) => descriptions[category]).join(" ");
  };

  const getCareerSuggestions = (topCategories) => {
    let suggestions = [];
    topCategories.forEach(([category]) => {
      suggestions = [...suggestions, ...careerSuggestions[category].slice(0, 3)];
    });
    return [...new Set(suggestions)]; // Remove duplicates
  };

  const interpretResults = () => {
    const sortedScores = Object.entries(scores).sort((a, b) => b[1] - a[1]);
    const topThree = sortedScores.slice(0, 3);
    
    const result = {
      topCategories: topThree.map(([category]) => category),
      description: getDescription(topThree),
      careers: getCareerSuggestions(topThree)
    };

    return result;
  };

  const renderResults = () => {
    const percentages = calculatePercentages();
    console.log('Rendering results, percentages:', percentages);
    const results = interpretResults();

    const chartData = {
      labels: Object.keys(percentages).map(key => categoryFullNames[key]),
    datasets: [
      {
        data: Object.values(percentages),
	color: (opacity = 1) => `rgba(33, 150, 243, ${opacity})`,
      }
    ]
  };
    

  return (
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.heading}>Your RIASEC Profile</Text>
        
        <Text style={styles.subheading}>Category Scores:</Text>


	<BarChart
          data={chartData}
          width={Dimensions.get('window').width - 300}
          height={250}
          yAxisLabel=""
          yAxisSuffix="%"
          chartConfig={{
             backgroundColor: `#f6f6f6`,
             backgroundGradientFrom: `#f6f6f6`,
             backgroundGradientTo: `#f6f6f6`,
             decimalPlaces: 0,
             color: (opacity = 1) => `rgba(33, 150, 243, ${opacity})`,
             labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
             style: {
                borderRadius: 16,
             },
             barPercentage: 2.0,
 	     labelColor: () => 'black',
    	     propsForBackgroundLines: {
	        strokeDasharray: ' ',      		
      		stroke: `#e0e0e0`,
	        strokeWidth: 0.75,
    	     },
    	     propsForLabels: {
      		fontSize: 14,
      		fontWeight: 'bold'
	     }          
	  }}
          style={{
             marginVertical: 8,
             borderRadius: 16,
          }}
          showValuesOnTopOfBars={false}
          fromZero={true}
	  withInnerLines={true}
      />



        {Object.entries(percentages).map(([category, percentage]) => (
          <Text key={category} style={styles.scoreText}>
            {categoryFullNames[category]}: {percentage.toFixed(1)}%
          </Text>
        ))}


        
        <Text style={styles.explanation}>
          These percentages represent your interest level in each RIASEC category. 
          Higher percentages indicate stronger interest and alignment with those career types. 
          Your top categories suggest career paths that may be most satisfying for you.
        </Text>

        <Text style={styles.subheading}>Top Categories: {results.topCategories.join(", ")}</Text>
        <Text style={styles.description}>{results.description}</Text>
        <Text style={styles.subheading}>Suggested Careers in India:</Text>
        {results.careers.map((career, index) => (
          <Text key={index} style={styles.career}>{career}</Text>
        ))}
        <Text style={styles.disclaimer}>
          Note: These suggestions are based on your interests. Consider factors like skills, education, and job market demand when making career decisions.
        </Text>
      </ScrollView>
    );
  };

  const renderQuestion = () => {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.questionNumber}>Question {currentQuestion + 1} of {questions.length}</Text>
        <Text style={styles.question}>{questions[currentQuestion].text}</Text>
        <View style={styles.buttonContainer}>
          <Button title="Strongly Disagree" onPress={() => handleAnswer(0)} />
          <Button title="Disagree" onPress={() => handleAnswer(1)} />
          <Button title="Neutral" onPress={() => handleAnswer(2)} />
          <Button title="Agree" onPress={() => handleAnswer(3)} />
          <Button title="Strongly Agree" onPress={() => handleAnswer(4)} />
        </View>
      </ScrollView>
    );
  };

  // Main render logic
  if (showIntroduction) {
    return <IntroductionScreen onStartTest={() => setShowIntroduction(false)} />;
  }

  if (testCompleted) {
    return renderResults();
  }

  return renderQuestion();
};


const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  subheading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 15,
    marginBottom: 10,
  },
  questionNumber: {
    fontSize: 16,
    marginBottom: 10,
  },
  question: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
  },
  buttonContainer: {
    width: '100%',
  },
  scoreText: {
    fontSize: 16,
    marginBottom: 5,
  },
  explanation: {
    fontSize: 14,
    marginTop: 10,
    marginBottom: 10,
    textAlign: 'justify',
    fontStyle: 'italic',
  },
  description: {
    fontSize: 16,
    textAlign: 'justify',
    marginBottom: 15,
  },
  career: {
    fontSize: 16,
    marginBottom: 5,
  },
  disclaimer: {
    fontSize: 14,
    fontStyle: 'italic',
    marginTop: 20,
    textAlign: 'center',
  },

 
});


export default App;
