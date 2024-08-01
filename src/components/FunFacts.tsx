import { useEffect, useState } from "react";
import axios from "axios";
import did from "../assets/didrm.png";
import styled from "styled-components";

const FunFacts = () => {
  const [facts, setFacts] = useState<string[]>([]);
  const [currentFactIndex, setCurrentFactIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchFact = async () => {
    try {
      console.log("Fetching fact...");
      const response = await axios.get(`https://api.api-ninjas.com/v1/facts`, {
        headers: {
          "X-Api-Key": "wFnh9S/8Vvyr6QDiZSALoQ==Yste1VogakW7Kwbt",
        },
      });
      console.log("API Response:", response.data);
      if (response.data && response.data.length > 0 && response.data[0].fact) {
        return response.data[0].fact;
      } else {
        console.error("Unexpected API response structure:", response.data);
        throw new Error("Unexpected API response structure");
      }
    } catch (error: any) {
      console.error("Error fetching fact:", error);
      if (axios.isAxiosError(error)) {
        console.error("Axios error details:", error.response?.data);
        throw new Error(
          `API error: ${error.response?.status} ${error.response?.statusText}`
        );
      }
      throw error;
    }
  };

  useEffect(() => {
    const initializeFacts = async () => {
      try {
        const initialFact = await fetchFact();
        if (initialFact) {
          setFacts([initialFact]);
        } else {
          throw new Error("Failed to fetch initial fact");
        }
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    initializeFacts();
  }, []);

  const handleNext = async () => {
    setLoading(true);
    try {
      const newFact = await fetchFact();
      if (newFact) {
        setFacts([...facts, newFact]);
        setCurrentFactIndex(facts.length);
      }
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handlePrevious = () => {
    if (currentFactIndex > 0) {
      setCurrentFactIndex(currentFactIndex - 1);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return (
      <div>
        <p>Error: {error}</p>
        <button onClick={() => window.location.reload()}>Retry</button>
      </div>
    );
  }

  return (
    <Container>
      <img src={did} />
      {facts.length > 0 ? (
        <>
          <p>{facts[currentFactIndex]}</p>
          <ButtonHolder>
            <button onClick={handlePrevious} disabled={currentFactIndex === 0}>
              Previous
            </button>
            <button onClick={handleNext}>Next</button>
          </ButtonHolder>
        </>
      ) : (
        <p>No facts available. Please try again.</p>
      )}
    </Container>
  );
};

export default FunFacts;

const Container = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  img {
    height: 370px;
  }

  p {
    font-size: 21px;
    width: 700px;
    margin: 0;
    font-family: "Comic Sans MS", "Comic Sans", cursive;
    text-align: center;
  }
`;
const ButtonHolder = styled.div`
  display: flex;
  gap: 25px;

  button {
    width: 200px;
    height: 40px;
    background-color: #e22e6e;
    margin-top: 40px;
    border-radius: 30px;
    color: white;
    font-size: 26px;
    border: none;
    font-family: "Butterfly Kids", cursive;
    cursor: pointer;
  }
`;
