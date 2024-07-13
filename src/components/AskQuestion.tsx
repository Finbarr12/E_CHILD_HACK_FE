import React, { useState, useEffect } from "react";
import styled from "styled-components";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { useTeacher } from "../context/TeacherContext";
import male from "../assets/mteachrm.png";
import female from "../assets/teacherGrm.png";
import { FaMicrophoneLines } from "react-icons/fa6";
import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = "AIzaSyA0XSZlTv6JekXe3CH7KAq43ZhjB1DD898";

const AskQuestion = () => {
  const { teacher } = useTeacher();
  const [response, setResponse] = useState<string | null>(null);
  const { transcript, listening, resetTranscript } = useSpeechRecognition();
  const [isListening, setIsListening] = useState(false);

  let greetingMessage = "";

  if (teacher) {
    greetingMessage =
      teacher === "Clara"
        ? "Hello, I am Mrs. Clara, Your AI instructor. What would you like to learn today?"
        : "Hello, I am Mr. Alvin, Your AI instructor. What would you like to learn today?";
  }

  const handleMicClick = () => {
    if (isListening) {
      SpeechRecognition.stopListening();
      handleAIResponse(transcript);
    } else {
      SpeechRecognition.startListening({ continuous: true });
    }
    setIsListening(!isListening);
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
        setResponse(aiResponse);
        speak(aiResponse);
      } else if (isEducationalQuestion(question)) {
        const responseObj = await model.generateContent(question);
        console.log("Response object from Gemini:", responseObj); // Debugging log

        const fullResponse = parseResponse(responseObj);

        if (fullResponse) {
          setResponse(fullResponse);
          speak(fullResponse);
        } else {
          const errorMessage =
            "I'm sorry, I couldn't generate a meaningful response to your question.";
          setResponse(errorMessage);
          speak(errorMessage);
        }
      } else {
        const errorMessage = "I'm here to answer educational questions only.";
        setResponse(errorMessage);
        speak(errorMessage);
      }

      resetTranscript();
    } catch (error) {
      console.error("Error fetching AI response:", error);
      const errorMessage =
        "I'm sorry, there was an error fetching the response. Please try again later.";
      setResponse(errorMessage);
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
    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "en-US";
    synth.speak(utterance);
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
      {response ? (
        <MainHolder>
          <Circle
            style={{ width: "40px", height: "40px", borderRadius: "50%" }}
          >
            {teacher === "Clara" ? (
              <img src={female} alt="Mrs. Clara" />
            ) : (
              <img src={male} alt="Mr. Alvin" />
            )}
          </Circle>

          <p>{response}</p>
        </MainHolder>
      ) : (
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
      <MicHolder>
        <MicHold onClick={handleMicClick} isListening={isListening}>
          <FaMicrophoneLines size={30} />
        </MicHold>
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
  width: 80%;
  height: 100vh;
  position: relative;
  font-family: "Poppins", sans-serif;
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

const ResponseBox = styled.div`
  background-color: #fff;
  border: 2px solid #e22e6e;
  border-radius: 15px;
  padding: 15px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  text-align: center;
  position: absolute;
  bottom: 20%;
  left: 50%;
  transform: translateX(-50%);
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
  margin-left: 20px;
`;

const MicHolder = styled.div`
  width: 100%;
  height: 80px;
  position: absolute;
  bottom: 6%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const MicHold = styled.div<{ isListening: boolean }>`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background-color: #e3306f;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: relative;
  animation: ${({ isListening }) =>
    isListening ? "pulse 1.5s infinite" : "none"};

  @keyframes pulse {
    0% {
      transform: scale(1);
      box-shadow: 0 0 0 0 rgba(227, 48, 111, 0.7);
    }
    70% {
      transform: scale(1.1);
      box-shadow: 0 0 0 20px rgba(227, 48, 111, 0);
    }
    100% {
      transform: scale(1);
      box-shadow: 0 0 0 0 rgba(227, 48, 111, 0);
    }
  }
`;

const UserInputBox = styled.div`
  background-color: #f0f0f0;
  border: 2px solid #e22e6e;
  border-radius: 15px;
  padding: 15px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  text-align: center;
  position: absolute;
  bottom: 40%;
  left: 50%;
  transform: translateX(-50%);
`;

// export default AskQuestion;
