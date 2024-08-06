import { useState, useEffect } from "react";
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
  const [responses, setResponses] = useState<
    { type: "user" | "ai"; text: string }[]
  >(() => {
    // Load messages from localStorage if available
    const savedResponses = localStorage.getItem("responses");
    return savedResponses ? JSON.parse(savedResponses) : [];
  });
  const [isListening, setIsListening] = useState(false);
  const [synth, setSynth] = useState<SpeechSynthesis | null>(null);
  const [utterance, setUtterance] = useState<SpeechSynthesisUtterance | null>(
    null
  );
  const { transcript, resetTranscript } = useSpeechRecognition();

  let greetingMessage = "";

  console.log(utterance);

  if (teacher) {
    greetingMessage =
      teacher === "Clara"
        ? "Hello, I am Mrs. Clara, Your AI instructor. What would you like to learn today?"
        : "Hello, I am Mr. Alvin, Your AI instructor. What would you like to learn today?";
  }

  const handleMicClick = () => {
    if (synth) {
      synth.cancel();
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
      synth.cancel();
    }
  };

  const handleAIResponse = async (question: string) => {
    console.log("User's question:", question);

    try {
      const genAI = new GoogleGenerativeAI(API_KEY);
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

      setResponses((prevResponses: any) => {
        const newResponses = [
          ...prevResponses,
          { type: "user", text: question },
        ];
        localStorage.setItem("responses", JSON.stringify(newResponses));
        return newResponses;
      });

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
        },your AI instructor. I was created by an exceptional team of experts: Ogbonna Finbarr, a full stack developer specializing in MERN and Python Flask; Okonkwo Johnbosco, a full stack developer with expertise in the MERN stack; and Cadet Nnadi Evaristus, a marine cadet and project manager. Together, they have crafted me to assist you on your educational journey, making learning engaging and accessible.`;
        setResponses((prevResponses: any) => {
          const newResponses = [
            ...prevResponses,
            { type: "ai", text: aiResponse },
          ];
          localStorage.setItem("responses", JSON.stringify(newResponses));
          return newResponses;
        });
        speak(aiResponse);
      } else if (isEducationalQuestion(question)) {
        const responseObj = await model.generateContent(question);
        console.log("Response object from Gemini:", responseObj);

        const fullResponse = parseResponse(responseObj);

        if (fullResponse) {
          setResponses((prevResponses: any) => {
            const newResponses = [
              ...prevResponses,
              { type: "ai", text: fullResponse },
            ];
            localStorage.setItem("responses", JSON.stringify(newResponses));
            return newResponses;
          });
          speak(fullResponse);
        } else {
          const errorMessage =
            "I'm sorry, I couldn't generate a meaningful response to your question.";
          setResponses((prevResponses: any) => {
            const newResponses = [
              ...prevResponses,
              { type: "ai", text: errorMessage },
            ];
            localStorage.setItem("responses", JSON.stringify(newResponses));
            return newResponses;
          });
          speak(errorMessage);
        }
      } else {
        const errorMessage = "I'm here to answer educational questions only.";
        setResponses((prevResponses: any) => {
          const newResponses = [
            ...prevResponses,
            { type: "ai", text: errorMessage },
          ];
          localStorage.setItem("responses", JSON.stringify(newResponses));
          return newResponses;
        });
        speak(errorMessage);
      }

      resetTranscript();
    } catch (error) {
      console.error("Error fetching AI response:", error);
      const errorMessage =
        "I'm sorry, there was an error fetching the response. Please try again later.";
      setResponses((prevResponses: any) => {
        const newResponses = [
          ...prevResponses,
          { type: "ai", text: errorMessage },
        ];
        localStorage.setItem("responses", JSON.stringify(newResponses));
        return newResponses;
      });
      speak(errorMessage);
    }
  };

  const isEducationalQuestion = (question: string): boolean => {
    return (
      !question.toLowerCase().includes("illegal") &&
      !question.toLowerCase().includes("illicit") &&
      !question.toLowerCase().includes("inappropriate") &&
      !question.toLowerCase().includes("offensive")
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
          <ResponseBox key={index} type={response.type}>
            <>
              {response.type === "ai" ? (
                teacher === "Clara" ? (
                  <Circle1>
                    <img src={female} alt="Mrs. Clara" />
                  </Circle1>
                ) : (
                  <Circle1>
                    <img src={male} alt="Mr. Alvin" />
                  </Circle1>
                )
              ) : (
                <UserIcon>OF</UserIcon>
              )}
            </>
            <p>{response.text}</p>
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
        <PauseButton onClick={handlePauseClick}>Stop</PauseButton>
      </MicHolder>
    </GreetingContainer>
  );
};

const parseResponse = (responseObj: any): string | null => {
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
  overflow-y: scroll;

  @media screen and (max-width: 500px) {
    width: 100%;
    height: calc(100vh - 80px);
    /* background-color: gold; */
  }

  ::-webkit-scrollbar {
    width: 12px;
  }

  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  ::-webkit-scrollbar-thumb {
    background: #e22e6e;
    border-radius: 6px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #d41d5c;
  }
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

  @media screen and (max-width: 500px) {
    width: 60%;
    height: 50px;
  }

  h1 {
    font-size: 20px;
    margin: 0;
    font-family: "Comic Sans MS", "Comic Sans", cursive;
    color: #333;

    @media screen and (max-width: 500px) {
      font-size: 13px;
    }
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

  @media screen and (max-width: 500px) {
    width: 100%;
    /* background-color: red; */
  }

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

  @media screen and (max-width: 500px) {
    width: 50px;
    height: 50px;
    margin-left: 12px;
  }
`;
const Circle1 = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 4px solid #e3306f;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;

  img {
    height: 80px;
    object-fit: contain;
  }
`;

const MicHolder = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  position: absolute;
  bottom: 2%;
`;

const MicHold = styled.button<{ isListening: boolean }>`
  background-color: ${(props) => (props.isListening ? "#e22e6e" : "#e22e6e")};
  color: white;
  padding: 15px 20px;
  border: none;
  cursor: pointer;
  border-radius: 50%;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease;
  position: fixed;
  bottom: 40px;

  @media screen and (max-width: 500px) {
    bottom: 120px;
    left: 30%;
  }

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
  position: fixed;
  bottom: 50px;
  left: 63%;

  @media screen and (max-width: 500px) {
    bottom: 130px;
  }

  &:hover {
    background-color: #d32f2f;
  }

  &:focus {
    outline: none;
  }
`;

const ResponseBox = styled.div<{ type: "user" | "ai" }>`
  width: 90%;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  margin-left: 20px;
  background-color: ${(props) => (props.type === "ai" ? "#e0f7fa" : "#ffebee")};
  padding: 10px;
  border-radius: 15px;

  @media screen and (max-width: 500px) {
    width: 80%;
  }

  p {
    margin: 0;
    margin-left: 10px;
    font-size: 14px;
    color: #333;
    width: 90%;

    @media screen and (max-width: 500px) {
      font-size: 13px;
    }
  }
`;

const UserIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid #e3306f;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffebee;
  color: #e3306f;
  font-size: 18px;
  font-weight: bold;
`;
