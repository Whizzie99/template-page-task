import styled from 'styled-components';
import Nav from '../src/components/Nav/Nav';
import './App.css';

function App() {
  return (
    <div className="App">
      <Container>
        <Nav/>
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
