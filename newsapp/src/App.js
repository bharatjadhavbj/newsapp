import React from 'react';
import NavBar from './components/NavBar';
import News from './components/News';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';



const App =()=> {
    const pageSize=5;
  
    return (
      <div>
        <Router>
          <NavBar/>
          
          <Routes>
            <Route exact path='/' element={<News pageSize={pageSize} country='in' category='general'/> }></Route>
            <Route exact path='/Business' element={<News pageSize={pageSize} country='in' category='business'/> }></Route>
            <Route exact path='/Entertainment' element={<News pageSize={pageSize} country='in' category='entertainment'/>}></Route>
            <Route exact path='/General' element={<News pageSize={pageSize} country='in' category='general'/>}></Route>
            <Route exact path='/Health' element={<News pageSize={pageSize} country='in' category='health'/>}></Route>
            <Route exact path='/Science' element={<News pageSize={pageSize} country='in' category='science'/>}></Route>
            <Route exact path='/sports' element={<News pageSize={pageSize} country='in' category='sports'/>}></Route>
            <Route exact path='/Technology' element={<News pageSize={pageSize} country='in' category='technology'/>}></Route>
          </Routes>
        </Router>
      </div>
    );
  
}

export default App;
