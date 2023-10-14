import './App.css';
import 'animate.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from './NavBar';
import { Banner } from './Banner';
import { Skils } from './Skils';
import { Projects } from './Projects';
import { Footer } from './Footer';

export const App = () => {
  return (
    <>
      <NavBar />
      <Banner />
      <Skils />
      <Projects />
      <Footer />
    </>
  );
};

export default App;
