import {CollapsibleNavbar, Home, Transition, Summary, Projects} from './components/index';
// import { Route, Routes } from 'react-router-dom';
// import Container from 'react-bootstrap/Container';
import myData from './projects.json';


import './App.css';
import { Container } from 'react-bootstrap';

function App() {
  const projects = myData.projects

  return (
    <Container>
    <CollapsibleNavbar/>
    <Home />
    <Transition figure={1}/>
    <Summary count={projects.length}/>
    <Transition figure={2}/>
    <Projects projects={projects}/>
    {/* <Container style={{height: '80vh', width: '100%'}}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/resume" element={<Home />} />
      </Routes>
    </Container> */}
    </Container>
  );
}

export default App;
