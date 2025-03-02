import { Header } from "./layout/header/Header";
import { Main } from "./layout/sections/main/main";
import { Projects } from "./layout/sections/projects/projects";
import { Technologies } from "./layout/sections/technologies/technologies";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Main />
      <Projects />
      <Technologies />
    </div>
  );
};

export default App;
