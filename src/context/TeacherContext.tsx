import React, {
  createContext,
  useState,
  useContext,
  useEffect,
  ReactNode,
} from "react";

type TeacherContextType = {
  teacher: string | any;
  selectTeacher: (teacher: string) => void;
};

const TeacherContext = createContext<TeacherContextType | undefined>(undefined);

export const useTeacher = (): TeacherContextType => {
  const context = useContext(TeacherContext);
  if (!context) {
    throw new Error("useTeacher must be used within a TeacherProvider");
  }
  return context;
};

type TeacherProviderProps = {
  children: ReactNode;
};

export const TeacherProvider: React.FC<TeacherProviderProps> = ({
  children,
}) => {
  const [teacher, setTeacher] = useState<string | null>(null);

  useEffect(() => {
    const storedTeacher = localStorage.getItem("selectedTeacher");
    if (storedTeacher) {
      setTeacher(storedTeacher);
    }
  }, []);

  const selectTeacher = (teacher: string) => {
    setTeacher(teacher);
    localStorage.setItem("selectedTeacher", teacher);
  };

  return (
    <TeacherContext.Provider value={{ teacher, selectTeacher }}>
      {children}
    </TeacherContext.Provider>
  );
};
