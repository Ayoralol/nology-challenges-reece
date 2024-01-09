import "./App.scss";
import FlexWrapper from "./containers/FlexWrapper/FlexWrapper";
import StudentList from "./containers/StudentList/StudentList";

function App() {
  return (
    <>
      <h1>React Props</h1>
      <FlexWrapper>
        <StudentList />
      </FlexWrapper>
    </>
  );
}

export default App;
