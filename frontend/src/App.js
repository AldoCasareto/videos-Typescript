import './App.css';
import VideoList from './components/Videos/VideoList';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import VideoForm from './components/Videos/VideoForm';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Flex, VStack } from '@chakra-ui/layout';
import Header from './components/Navbar/Header';

function App() {
  return (
    <Router>
      <VStack>
        <Header />
        <Switch>
          <Route exact path='/' component={VideoList} />
          <Route path='/form' component={VideoForm} />
          <Route path='/update/:id' component={VideoForm} />
        </Switch>
        <ToastContainer />
      </VStack>
    </Router>
  );
}

export default App;
