import { Experience } from "./layout/sections/experience/experience";
import { Header } from "./layout/header/Header";
import { Main } from "./layout/sections/main/main";
import { Projects } from "./layout/sections/projects/projects";
import { Technologies } from "./layout/sections/technologies/technologies";
import { Footer } from "./layout/footer/footer";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Main />
      <Projects />
      <Technologies />
      <Experience />
      <Footer />
    </div>
  );
};

export default App;
