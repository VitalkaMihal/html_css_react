import { Header } from "./layout/header/Header";
import { Main } from "./layout/sections/main/main";
import { Projects } from "./layout/sections/projects/projects";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Main />
      <Projects />
    </div>
  );
};

export default App;
