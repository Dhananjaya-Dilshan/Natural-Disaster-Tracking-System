import React, { useState } from 'react';
import axios from "axios";

const Educated = () => {
  const [disaster, setDisaster] = useState("");
  const [questionType, setQuestionType] = useState("");
  const [answer, setAnswer] = useState("");
  const [generatingAnswer, setGeneratingAnswer] = useState(false);

  async function generateAnswer(e) {
    e.preventDefault();
    if (!disaster || !questionType) {
      alert('Please select a natural disaster and what you want to know.');
      return;
    }

    setGeneratingAnswer(true);
    setAnswer("Loading your answer...");

    try {
      const response = await axios({
        url: "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=AIzaSyAg9hT6q36bS8NPUcOs0dFhC4Hml85lVqY",
        method: "post",
        data: {
          contents: [{ parts: [{ text: `${questionType} of ${disaster}` }] }],
        },
      });

      const answerData = response?.data?.candidates[0]?.content?.parts[0]?.text;
      if (!answerData) {
        setAnswer("No answer found for this specific question.");
        return;
      }

      
      const formattedAnswer = formatAnswer(answerData);
      setAnswer(formattedAnswer);
    } catch (error) {
      setAnswer("Sorry - Something went wrong. Please try again!");
    }

    setGeneratingAnswer(false);
  }

  //  format the answer 
  function formatAnswer(answerText) {
    const sections = answerText.split("*");

    return (
      <div>
        {sections.map((section, index) => (
          <p key={index}>{section.trim()}</p>
        ))}
      </div>
    );
  }

  return (
    <div className="container-fluid bg-light min-vh-100 ">
      
      <div className="row justify-content-center align-items-center min-vh-100">
        <div className="col-md-9">
          <div className="card ">
            <div className="card-body bg-black bg-gradient text-white rounded">
              <h1 className="card-title text-center mb-4 " style={{
          color:"red"
        }}>Natural Disaster Inquiry</h1>
              <form onSubmit={generateAnswer}>
                <div className="mb-3">
                  <label htmlFor="disasterSelect" className="form-label fs-5">Select a natural disaster:</label>
                  <select  
                    className="form-select fs-5 "
                    id="disasterSelect"
                    value={disaster}
                    onChange={(e) => setDisaster(e.target.value)}
                  >
                    <option value="" >Choose...</option>
                    <option value="Earthquake">Earthquake</option>
                    <option value="Flood">Flood</option>
                    <option value="Hurricane">Hurricane</option>
                    <option value="Tornado">Tornado</option>
                    <option value="Wildfire">Wildfire</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label htmlFor="questionTypeSelect" className="form-label fs-5">Select what you want to know:</label>
                  <select
                    className="form-select fs-5"
                    id="questionTypeSelect"
                    value={questionType}
                    onChange={(e) => setQuestionType(e.target.value)}
                  >
                    <option value="">Choose...</option>
                    <option value="Causes">Causes of {disaster}</option>
                    <option value="Impact">Impact of {disaster}</option>
                    <option value="Case Studies">Case Studies of  {disaster}</option>
                    <option value="Prevent">how to Prevent from {disaster}</option>
                    <option value="Predict">how to Predict {disaster}</option>
                  </select>
                </div>
                <button
                  type="submit"
                  className="btn btn btn-dark w-100 fs-5 "
                  disabled={generatingAnswer}
                  
                >
                  {generatingAnswer ? 'Generating...' : 'Generate Answer'}
                </button>
              </form>
              <div className="mt-4 fs-5">
                {answer && (
                  <div className="card">
                    <div className="card-body">
                      <p className="card-text">{answer}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
  };
  
  export default Educated;
