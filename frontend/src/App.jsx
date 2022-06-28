import { useCallback, useEffect, useState } from "react";
import Bar from "./components/Bar";
import StudentsCard from "./components/StudentsCard";
import { apiGet } from "./utils/axios";
import "./App.css";

function App() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errors, setErrors] = useState([]);
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  const buttonClicked = useCallback(() => {
    setIsButtonClicked(!isButtonClicked);
  }, [isButtonClicked]);

  useEffect(() => {
    setLoading(true);
    const asyncFunc = async () => {
      try {
        const res = await apiGet("students");
        setStudents(res.data);
        setLoading(false);
      } catch (error) {
        setErrors([error.message]);
        setLoading(false);
      }
    };
    asyncFunc();
  }, [buttonClicked]);

  return (
    <div className="App">
      <Bar buttonClicked={buttonClicked} />
      {loading ? (
        <div>Loading...</div>
      ) : (
        <StudentsCard students={students} buttonClicked={buttonClicked} />
      )}
      {errors.length > 0 && (
        <div>
          <h1>Errors</h1>
          {errors.map((error, index) => (
            <div key={index}>{error}</div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
