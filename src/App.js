import styled from 'styled-components';
import Nav from '../src/components/Nav/Nav';
import TemplateList from '../src/components/TemplateList/TemplateList';
import './App.css';

function App() {
  return (
    <div className="App">
      <Container>
        <Nav/>
        <TemplateList/>
      </Container>
    </div>
  );
}

export default App;


const Container = styled.div`
  width: 90%;
  margin: 0 auto;
  overflow: hidden;
`
