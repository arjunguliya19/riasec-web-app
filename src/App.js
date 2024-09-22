// App.js
import React, { useState, useEffect } from 'react';
import { BarChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Bar } from 'recharts';
import './App.css';



const categoryFullNames = {
  R: "Realistic (Doers)",
  I: "Investigative (Thinkers)",
  A: "Artistic (Creators)",
  S: "Social (Helpers)",
  E: "Enterprising (Persuaders)",
  C: "Conventional (Organizers)"
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
    	"Agriculturist",
	"Architect",
	"Athlete",
	"Biologist",
	"Chef",
	"Chemist",
	"Company Secretary",
	"Defence (Military) Service",
	"Dentist",
	"Engineer",
	"Fashion Designer",
	"Fitness Trainer",
	"Graphic Designer",
	"Information Technology",
	"Model/Actor",
	"Musician",
	"Nurse",
	"Outdoor Recreation",
	"Photographer",
	"Physical Therapist",
	"Sports Medicine",
	"Statistician",
	"Surgeon",
	"Technician",
	"Veterinarian",
	"Web Developer",
	"Zoologist"
  ],

  I: [
    	"Accountant",
	"Actuary",
	"Archaeologist",
	"Auditor",
	"Biologist",
	"Biotechnologist",
	"Chartered Accountant (CA)",
	"Chemist",
	"Community/Public Health Workers",
	"Counselor",
	"Data Scientist",
	"Dietician/Nutritionist ",
	"Doctor (Medical School/Medical Research)",
	"Economist",
	"Engineer",
	"Environmental Scientist",
	"Epidemiologist",
	"Financial Analyst",
	"Information Technology",
	"Investigative Reporter",
	"Lawyer",
	"Librarian",
	"Paralegal",
	"Pharmacologist",
	"Physical Therapist",
	"Physicist",
	"Psychologist",
	"Researcher",
	"Social Worker",
	"Sports Medicine",
	"Surgeon"
  ],

  A: [
    	"Architect",
	"Artist",
	"Author (Fiction)",
	"Broadcast Journalist",
	"Copy Editor",
	"Creative Writers",
	"Culinary Artist",
	"Entrepreneur",
	"Fashion Designer",
	"Film Director",
	"Graphic Designer",
	"Interior Designer",
	"Landscape Artist/Designer",
	"Lyricist",
	"Model/Actor",
	"Musician",
	"Music Composer",
	"Photographer",
	"Poets",
	"Proofreader",
	"Psychologist",
	"Sculpturer",
	"Technical Writer",
	"Translator",
	"UI/UX Designer",
	"Web Developer"
  ],

  S: [
	"Academic Advisors",
	"Aerobics Teacher",
	"Career Counselors",
	"Community/Public Health Workers",
	"Community Organizer",
	"Counselors (various)/Advisers",
	"Customer Service",
	"Dietician/Nutritionist",
	"Doctor (Medical school/Medical research)",
	"Educational Administration",
	"Educational Consultant",
	"Epidemiologist",
	"Financial Planner",
	"Fitness Trainer",
	"Foreign Service/Diplomat",
	"Guide/School Counselor",
	"Human Resources",
	"Lawyer",
	"Librarian",
	"Nurse",
	"Pharmacist",
	"Physical Therapist",
	"Psychologist",
	"Social Advocate",
	"Social Entrepreneur",
	"Social Worker",
	"Sociologist",
	"Sports Medicine",
	"Surgeon",
	"Teacher",
	"Translator",
	"Tutor",
	"Veterinarian",
	"Yoga Instructor"
  ],

  E: [
	"Actuary",
	"Advertising",
	"Aerobics Teacher",
	"Architect",
	"Broadcast Journalism",
	"Broker or Agent",
	"Business Owner",
	"Chartered Accountant (CA)",
	"Community/Public Health Workers",
	"Consultant",
	"Culinary Artist",
	"Customer Service",
	"Dietician/Nutritionist",
	"Educational Administration",
	"Educational Consultant",
	"Entrepreneur",
	"Event Planner",
	"Fashion Designer",
	"Financial Analyst",
	"Financial Planner",
	"Fitness Trainer",
	"Foreign Service/Diplomat",
	"Fundraising Consultant",
	"Graphic Designer",
	"Human Resource Manager",
	"Interior Designer",
	"Investment Banker",
	"Lawyer",
	"Market Research Analyst",
	"Marketing Manager",
	"Model/Actor",
	"Musician",
	"Paralegal",
	"Photographer",
	"Politician",
	"Public Relations/Publicity",
	"Real Estate Agent",
	"Sales Manager",
	"Trainer"
  ],
  
  C: [
	"Accountant",
	"Actuary",
	"Auditor",
	"Bank Officer",
	"Chartered Accountant (CA)",
	"Chemist",
	"Company Secretary",
	"Copy Editor",
	"Customer Service",
	"Educational Administration",
	"Educational Consultant",
	"Engineer",
	"Financial Analyst ",
	"Financial Planner",
	"Human Resources",
	"Information Technology",
	"Librarian",
	"Nurse",
	"Paralegal",
	"Pharmacist",
	"Proofreader",
	"Property Manager",
	"Real Estate Agent",
	"Statistician",
	"Teacher",
	"Technical Writer",
	"Technician",
	"Trainer (business)",
	"Web Developer"
  ]
};


const careerCategories = {

  "Creative and Design Careers": [
	"Architect",
	"Artist",
	"Author (Fiction)",
	"Broadcast Journalism",
	"Chef",
	"Copy Editor",
	"Creative Writers",
	"Culinary Artist",
	"Fashion Designer",
	"Film Director",
	"Graphic Designer",
	"Interior Designer",
	"Investigative Reporter",
	"Landscape Artist/Designer",
	"Lyricists",
	"Model/Actor",
	"Music Composer",
	"Musician",
	"Photographer",
	"Poets",
	"Proofreader",
	"Sculpturer",
	"Technical Writer",
	"UI/UX Designer"
  ],

  "Entrepreneurial and Enterprising Careers": [
	"Broker or Agent",
	"Business Owner",
	"Consultant",
	"Entrepreneur",
	"Event Planner",
	"Foreign Service/Diplomat",
	"Politician",
	"Real Estate Agent"
  ],

  "Finance and Legal Careers": [
	"Accountant",
	"Actuary",
	"Auditor",
	"Bank Officer",
	"Chartered Accountant (CA)",
	"Company Secretary",
	"Economist",
	"Financial Analyst ",
	"Financial Planner",
	"Fundraising Consultant",
	"Investment Banker",
	"Lawyer",
	"Paralegal"
  ],

  "Health, Medicine, and Life Sciences Careers":  [
	"Biologist",
	"Biotechnologist",
	"Chemist",
	"Community/Public Health Workers",
	"Dentist",
	"Dietician/Nutritionist ",
	"Doctor (Medical school/Medical research)",
	"Epidemiologist",
	"Nurse",
	"Pharmacist",
	"Pharmacologist",
	"Physical Therapist",
	"Sports Medicine",
	"Surgeon",
	"Veterinarian",
	"Zoologist"
  ],

  "Physical and Outdoor Careers":  [
	"Aerobics Teacher",
	"Agriculturist",
	"Athlete",
	"Defence (Military) Service",
	"Fitness Trainer",
	"Outdoor Recreation",
	"Yoga Instructor"
  ],

  "Sales, Marketing and HR Careers": [
	"Advertising",
	"Customer Service",
	"Human Resource Manager",
	"Market Research Analyst",
	"Marketing Manager",
	"Public Relations/Publicity",
	"Sales Manager"
  ],

  "Social, Educational, and Counseling Careers": [
	"Academic Advisors",
	"Career Counselors",
	"Community Organizer",
	"Counselor",
	"Counselors (various)/Advisers",
	"Educational Administration",
	"Educational Consultant",
	"Guide/School Counselor",
	"Librarian",
	"Psychologist",
	"Social Advocate",
	"Social Entrepreneur",
	"Social Worker",
	"Sociologist",
	"Teacher",
	"Trainer",
	"Trainer (business)",
	"Translator",
	"Tutor"
  ],

  "Technology, Engineering, and Science Careers": [
	"Archaeologist",
	"Data Scientist",		
	"Engineer",
	"Environmental Scientist",
	"Information Technology",
	"Physicist",
	"Researcher",
	"Statistician",
	"Technician",
	"Web Developer"
  ]

};



const App = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [scores, setScores] = useState({ R: 0, I: 0, A: 0, S: 0, E: 0, C: 0 });
  const [testCompleted, setTestCompleted] = useState(false);
  const [showIntroduction, setShowIntroduction] = useState(true);
const [showAllCareers, setShowAllCareers] = useState(false);
  const [userInfo, setUserInfo] = useState({ name: '', email: '', mobile: '' });

  useEffect(() => {
    console.log('State updated:', { showIntroduction, testCompleted });
  }, [showIntroduction, testCompleted]);

  const handleStartTest = (e) => {
    e.preventDefault();
    console.log('Starting the test with user info:', userInfo);
    setShowIntroduction(false);
    setCurrentQuestion(0);
  };


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
      suggestions = [...suggestions, ...careerSuggestions[category]];
    });
    return [...new Set(suggestions)].sort(); // Remove duplicates
  };


  const categorizeCareerSuggestions = (careers) => {
    const categorized = {};
    Object.entries(careerCategories).forEach(([category, careerList]) => {
      const matchingCareers = careers.filter(career => careerList.includes(career));
      if (matchingCareers.length > 0) {
        categorized[category] = matchingCareers;
      }
    });
    return categorized;
  };


  const interpretResults = () => {
    const sortedScores = Object.entries(scores).sort((a, b) => b[1] - a[1]);
    const topThree = sortedScores.slice(0, 2);
    
    return {
      topCategories: topThree.map(([category]) => category),
      description: getDescription(topThree),
      careers: getCareerSuggestions(topThree)
    };
  };


  const renderIntroductionAndForm = () => {
    return (
      <div className="content">
        <h1 className="title">Welcome to the Career Identifier Test by CyberSharp</h1>
        
        <h2 className="subtitle">How It Helps</h2> 
        <p className="text">
          This test helps you identify your predominant personality types, which can guide you 
          towards career paths that align with your interests and strengths. It can assist in:
        </p>
        <ul className="list">
          <li>Choosing a career</li>
          <li>Selecting educational programs</li>
          <li>Understanding your work preferences</li>
          <li>Identifying potential job satisfaction areas</li>
        </ul>
        
        <h2 className="subtitle">How to Answer the Questions</h2>
        <ul className="list">
          <li>Read each statement carefully</li>
          <li>Respond based on your genuine interests, not what you think you should like</li>
          <li>Choose the option that best represents your level of agreement</li>
          <li>Don't overthink – your first instinct is often the most accurate</li>
          <li>Answer all questions for the most accurate results</li>
        </ul>

        <h2 className="subtitle">Please provide your information to start the test:</h2>
	<p className="text">
          Since we will be emailing you the results of the test, please ensure your contact details are filled correctly.
        </p>

        <form onSubmit={handleStartTest} className="form">
          <input
            type="text"
            placeholder="Name"
            value={userInfo.name}
            onChange={(e) => setUserInfo({...userInfo, name: e.target.value})}
            className="input"
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={userInfo.email}
            onChange={(e) => setUserInfo({...userInfo, email: e.target.value})}
            className="input"
            required
          />
          <input
            type="tel"
            placeholder="Mobile Number"
            value={userInfo.mobile}
            onChange={(e) => setUserInfo({...userInfo, mobile: e.target.value})}
            className="input"
            required
          />
          <button type="submit" className="button start-test">
            Start the Test
          </button>
        </form>
      </div>
    );
  };


  const renderQuestion = () => {
    return (
      <div className="content">
        <p className="question-number">Question {currentQuestion + 1} of {questions.length}</p>
        <p className="question">{questions[currentQuestion].text}</p>
        <div className="button-container">
          {['Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree'].map((label, index) => (
            <button
              key={label}
              onClick={() => handleAnswer(index)}
              className="answer-button"
            >
              {label}
            </button>
          ))}
        </div>
      </div>
    );
  };


  const renderResults = () => {
    const percentages = calculatePercentages();
    const results = interpretResults();
    const chartData = Object.entries(percentages).map(([category, value]) => ({
      name: category,
      fullName: categoryFullNames[category],
      value: parseFloat(value.toFixed(1))
    }));

 const categorizedCareers = categorizeCareerSuggestions(results.careers);

    return (
      <div className="content">
        <h1 className="heading">Your Career Identifier Test Results Interpretation</h1>
        <p className="explanation">
          Let's now understand your predominant personality types, and the career paths that align with your interests and strengths. Research shows that personalities seek out and flourish in career environments they fit and that jobs and career environments are classifiable by the personalities that flourish in them. The personality types are categoried into 6 major categories - Realistic (Doers), Investigative (Thinkers), Artistic (Creators), Social (Helpers), Enterprising (Persuaders), and Conventional (Organizers). The choice of a vocation is an expression of one's personality.
        </p>

        <h2 className="subheading">Category Scores:</h2>

        <div className="chart-container">
          <ResponsiveContainer>
            <BarChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis domain={[0, 100]} tickCount={6} tickFormatter={(value) => `${value}%`} />
              <Tooltip 
                 formatter={(value, name, props) => [`${value.toFixed(1)}%`, props.payload.fullName]}              />
              <Legend />
              <Bar 
                dataKey="value" 
                fill="#956A64" 
                label={{
                  position: 'top',
                  formatter: (value) => `${value.toFixed(1)}%`,
                  fill: '#666',
                  fontSize: 12
                }}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>


        {Object.entries(percentages).map(([category, percentage]) => (
          <p key={category} className="score-text">
            {categoryFullNames[category]}: {percentage.toFixed(1)}%
          </p>
        ))}

        <p className="explanation">
          These percentages represent your interest level in each category. 
          Higher percentages indicate stronger interest and alignment with those career types. 
          Your top categories suggest career paths that may be most satisfying for you.
        </p>

        <h3 className="subheading">
          <span style={{ fontWeight: 'bold' }}>Top Categories:</span>{' '}
          <span style={{ fontWeight: 'normal' }}>
            {results.topCategories.slice(0, 2).map(category => categoryFullNames[category]).join(", ")}
          </span>
        </h3>

	<h3 className="subheading">What it Means:</h3>
        <p className="description">{results.description}</p>
        <h3 className="subheading">Suggested Careers for you in India (in alphabetical order):</h3>
	<p className="explanation"> Based on your interests, below is the list of diverse careers from which you can choose the one that interests you the most.
	</p>
        {Object.entries(categorizedCareers).map(([category, careers]) => (
          <div key={category} className="career-category">
            <h4 className="category-title">{category}</h4>
            <p className="careers">{careers.join(", ")}</p>
          </div>
        ))}
         <p className="disclaimer">
          Note: These career suggestions are only indicative and are based on your interests. Consider factors like skills, education, and job market demand when making career decisions.
        </p>
      </div>
    );
  };


  return (
    <div className="container">
      {showIntroduction && renderIntroductionAndForm()}
      {!showIntroduction && !testCompleted && renderQuestion()}
      {testCompleted && renderResults()}
    </div>
  );
};


export default App;