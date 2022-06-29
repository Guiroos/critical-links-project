import { useEffect, useState } from "react";
import Bar from "./components/Bar";
import StudentsCard from "./components/StudentsCard";
import { apiGet } from "./utils/axios";

function App() {
  const [students, setStudents] = useState([]);
  const [classes, setClasses] = useState([]);
  const [loadingStudents, setLoadingStudents] = useState(true);
  const [loadingClasses, setLoadingClasses] = useState(true);
  const [errors, setErrors] = useState([]);
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  const buttonClicked = () => {
    setIsButtonClicked(!isButtonClicked);
  };

  useEffect(() => {
    setLoadingStudents(true);
    const getStudents = async () => {
      try {
        await apiGet("/students")
          .then((res) => res.data)
          .then((res) => setStudents(res));
        setLoadingStudents(false);
      } catch (error) {
        setErrors((prevState) => [...prevState, error.message]);
        setLoadingStudents(false);
      }
    };
    getStudents();
  }, [isButtonClicked]);

  useEffect(() => {
    setLoadingClasses(true);
    const getClasses = async () => {
      try {
        await apiGet("/classes")
          .then((res) => res.data)
          .then((res) => setClasses(res));
        setLoadingClasses(false);
      } catch (error) {
        setErrors((prevState) => [...prevState, error.message]);
        setLoadingClasses(false);
      }
    };
    getClasses();
  }, [isButtonClicked]);

  const classesOptions = classes.map((classObj) => {
    return {
      id: classObj._id,
      value: classObj.className,
      label: classObj.className,
    };
  });

  return (
    <div className="">
      {loadingClasses || loadingStudents ? (
        <div>Loading...</div>
      ) : (
        <>
          <Bar
            classes={classes}
            classesOptions={classesOptions}
            buttonClicked={buttonClicked}
          />
          <StudentsCard
            students={students}
            classesOptions={classesOptions}
            buttonClicked={buttonClicked}
          />
        </>
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
