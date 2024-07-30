import React, { useState, useEffect } from "react";
import styled from "styled-components";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { useTeacher } from "../context/TeacherContext";
import male from "../assets/mteachrm.png";
import female from "../assets/teacherGrm.png";
import { FaMicrophoneLines, FaPause } from "react-icons/fa6";
import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = "AIzaSyA0XSZlTv6JekXe3CH7KAq43ZhjB1DD898";

const AskQuestion = () => {
  const { teacher } = useTeacher();
  const [responses, setResponses] = useState<string[]>([]);
  const [isListening, setIsListening] = useState(false);
  const [synth, setSynth] = useState<SpeechSynthesis | null>(null);
  const [utterance, setUtterance] = useState<SpeechSynthesisUtterance | null>(
    null
  );
  const { transcript, listening, resetTranscript } = useSpeechRecognition();

  let greetingMessage = "";

  if (teacher) {
    greetingMessage =
      teacher === "Clara"
        ? "Hello, I am Mrs. Clara, Your AI instructor. What would you like to learn today?"
        : "Hello, I am Mr. Alvin, Your AI instructor. What would you like to learn today?";
  }

  const handleMicClick = () => {
    if (synth) {
      synth.cancel(); // Stop the current speech
    }
    if (isListening) {
      SpeechRecognition.stopListening();
      handleAIResponse(transcript);
    } else {
      SpeechRecognition.startListening({ continuous: true });
    }
    setIsListening(!isListening);
  };

  const handlePauseClick = () => {
    if (synth) {
      synth.cancel(); // Stop the current speech
    }
  };

  const handleAIResponse = async (question: string) => {
    console.log("User's question:", question); // Debugging log

    try {
      const genAI = new GoogleGenerativeAI(API_KEY);
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

      // Check if the question is about name or creators
      if (
        question.toLowerCase().includes("who created you") ||
        question.toLowerCase().includes("who made you") ||
        question.toLowerCase().includes("who are your creators") ||
        question.toLowerCase().includes("what is your name") ||
        question.toLowerCase().includes("who built you") ||
        question.toLowerCase().includes("who are you")
      ) {
        const aiResponse = `I am ${
          teacher === "Clara" ? "Mrs. Clara" : "Mr. Alvin"
        }, your AI instructor, created by Ogbonna Finbarr and Okonkwo Johnbosco.`;
        setResponses((prevResponses) => [...prevResponses, aiResponse]);
        speak(aiResponse);
      } else if (isEducationalQuestion(question)) {
        const responseObj = await model.generateContent(question);
        console.log("Response object from Gemini:", responseObj); // Debugging log

        const fullResponse = parseResponse(responseObj);

        if (fullResponse) {
          setResponses((prevResponses) => [...prevResponses, fullResponse]);
          speak(fullResponse);
        } else {
          const errorMessage =
            "I'm sorry, I couldn't generate a meaningful response to your question.";
          setResponses((prevResponses) => [...prevResponses, errorMessage]);
          speak(errorMessage);
        }
      } else {
        const errorMessage = "I'm here to answer educational questions only.";
        setResponses((prevResponses) => [...prevResponses, errorMessage]);
        speak(errorMessage);
      }

      resetTranscript();
    } catch (error) {
      console.error("Error fetching AI response:", error);
      const errorMessage =
        "I'm sorry, there was an error fetching the response. Please try again later.";
      setResponses((prevResponses) => [...prevResponses, errorMessage]);
      speak(errorMessage);
    }
  };

  const isEducationalQuestion = (question: string): boolean => {
    // Implement your logic to determine if the question is educational
    // Example: Check for keywords or topics related to children's education
    return (
      !question.toLowerCase().includes("illegal") &&
      !question.toLowerCase().includes("illicit") &&
      !question.toLowerCase().includes("inappropriate") &&
      !question.toLowerCase().includes("offensive")

      // Add more educational keywords or topics as needed
    );
  };

  const speak = (text: string) => {
    const synthInstance = window.speechSynthesis;
    const utteranceInstance = new SpeechSynthesisUtterance(text);
    utteranceInstance.lang = "en-US";
    synthInstance.speak(utteranceInstance);
    setSynth(synthInstance);
    setUtterance(utteranceInstance);
  };

  useEffect(() => {
    if (isListening) {
      SpeechRecognition.startListening();
    } else {
      SpeechRecognition.stopListening();
    }
  }, [isListening]);

  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return <div>Your browser does not support speech recognition.</div>;
  }

  useEffect(() => {
    console.log("Transcript:", transcript); // Debugging log
  }, [transcript]);

  return (
    <GreetingContainer>
      {responses.length === 0 && (
        <MainHolder>
          <Circle>
            {teacher === "Clara" ? (
              <img src={female} alt="Mrs. Clara" />
            ) : (
              <img src={male} alt="Mr. Alvin" />
            )}
          </Circle>
          <RemarkBox>
            <h1>{greetingMessage}</h1>
          </RemarkBox>
        </MainHolder>
      )}
      <ResponsesContainer>
        {responses.map((response, index) => (
          <ResponseBox key={index}>
            <Circle>
              {teacher === "Clara" ? (
                <img src={female} alt="Mrs. Clara" />
              ) : (
                <img src={male} alt="Mr. Alvin" />
              )}
            </Circle>
            <p>{response}</p>
          </ResponseBox>
        ))}
      </ResponsesContainer>
      <MicHolder>
        <MicHold onClick={handleMicClick} isListening={isListening}>
          {isListening ? (
            <FaPause size={30} />
          ) : (
            <FaMicrophoneLines size={30} />
          )}
        </MicHold>
        <PauseButton onClick={handlePauseClick}>Pause</PauseButton>
      </MicHolder>
      {transcript && (
        <UserInputBox>
          <p>User: {transcript}</p>
        </UserInputBox>
      )}
    </GreetingContainer>
  );
};

const parseResponse = (responseObj: any): string | null => {
  // Parse the response object and extract the text content
  try {
    if (
      responseObj &&
      responseObj.response &&
      responseObj.response.candidates &&
      responseObj.response.candidates.length > 0
    ) {
      const firstCandidate = responseObj.response.candidates[0];
      if (
        firstCandidate.content &&
        firstCandidate.content.parts &&
        firstCandidate.content.parts.length > 0
      ) {
        return firstCandidate.content.parts
          .map((part: any) => part.text)
          .join("")
          .replace(/\*/g, "")
          .replace(/[\[\]]/g, "");
      }
    }
    return null;
  } catch (error) {
    console.error("Error parsing response:", error);
    return null;
  }
};

export default AskQuestion;

const GreetingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  height: 100vh;
  font-family: "Poppins", sans-serif;
  position: relative;
`;

const ResponsesContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 20px;
`;

const RemarkBox = styled.div`
  background-color: #fff;
  border: 3px solid #e22e6e;
  height: 80px;
  border-radius: 15px;
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  text-align: center;
  position: relative;
  animation: appear 0.5s ease-in-out, bounce 2s infinite;

  h1 {
    font-size: 20px;
    margin: 0;
    font-family: "Comic Sans MS", "Comic Sans", cursive;
    color: #333;
  }

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: -20px;
    margin-top: -10px;
    border-width: 10px;
    border-style: solid;
    border-color: transparent #fff transparent transparent;
  }

  @keyframes appear {
    from {
      opacity: 0;
      transform: scale(0.8);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }

  @keyframes bounce {
    0%,
    20%,
    50%,
    80%,
    100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-15px);
    }
    60% {
      transform: translateY(-7px);
    }
  }
`;

const MainHolder = styled.div`
  display: flex;
  margin-top: 40px;

  img {
    height: 80px;
    object-fit: cover;
  }
`;

const Circle = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: 4px solid #e3306f;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const MicHolder = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1000;
`;

const MicHold = styled.button<{ isListening: boolean }>`
  background-color: ${(props) => (props.isListening ? "#e22e6e" : "#4CAF50")};
  color: white;
  padding: 15px 20px;
  border: none;
  cursor: pointer;
  border-radius: 50%;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${(props) => (props.isListening ? "#b81e56" : "#45a049")};
  }

  &:focus {
    outline: none;
  }
`;

const PauseButton = styled.button`
  margin-top: 10px;
  background-color: #f44336;
  color: white;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #d32f2f;
  }

  &:focus {
    outline: none;
  }
`;

const UserInputBox = styled.div`
  position: absolute;
  bottom: 80px;
  right: 20px;
  background-color: #fff;
  padding: 10px 20px;
  border-radius: 15px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  max-width: 70%;
  text-align: right;

  p {
    margin: 0;
    font-size: 14px;
    color: #666;
  }
`;

const ResponseBox = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  margin-bottom: 10px;

  margin-left: 20px;

  background-color: red;

  img {
    height: 80px;
    object-fit: cover;
  }
  p {
    margin: 0;
    margin-left: 10px;
    font-size: 14px;
    color: #333;
  }
`;
