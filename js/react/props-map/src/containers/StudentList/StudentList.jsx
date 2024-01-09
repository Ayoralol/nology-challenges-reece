import StudentCard from "../../components/StudentCard/StudentCard";
import students from "../../data/data.json";
import FlexWrapper from "../FlexWrapper/FlexWrapper";

const StudentList = () => {
  return (
    <div>
      {/* <StudentCard
        name={students[0].name}
        age={students[0].age}
        location={students[0].location}
      />
      <StudentCard
        name={students[1].name}
        age={students[1].age}
        location={students[1].location}
      />
      <StudentCard
        name={students[2].name}
        age={students[2].age}
        location={students[2].location}
      /> */}
      <FlexWrapper>
        {students &&
          students.map((student) => {
            return (
              <StudentCard
                key={student.id}
                name={student.name}
                age={student.age}
                location={student.location}
                isLocationVisible={student.isLocationVisible}
                isAgeVisible={student.isAgeVisible}
                quizScore={student.quizScore}
              />
            );
          })}
      </FlexWrapper>
    </div>
  );
};

export default StudentList;
