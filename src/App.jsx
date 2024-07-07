import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';

//import { Container, Grid } from '@mui/material';
//import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Profile from './components/Profile/Profile';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Portfolio from './pages/Portfolio/Portfolio';
import Resume from './pages/Resume/Resume';

function App() {
    const [count, setCount] = useState(0)
    return (
        <>
            Tady ma byt:<br/>
            container<br/>
            grid<br/>
        
            <Profile />
     
            <Header />
       
            <Resume />

            <Portfolio />
           
            <Footer />
            <br /><br /><br /><br /><br /><br /><br />
            TODO:<br />
            Co vsechno ma issue s Vite + REACTJS?<br />
            <br />1. HEADER!!
            <br />2. UTF-8 ale to neva, web je v AJ :)
            <br />3. Routerovani
            <br />4.


            
        </>

    );
}

export default App;

/*



*/

/*

<Grid item xs={12} sm={12} md={8} lg={9}>
                        <Header />
                        <div className='main-content container_shadow'>
                            <Switch>
                                <Route path='/portfolio'>
                                    <Portfolio />
                                </Route>
                                <Route path='/'>
                                    <Resume />
                                </Route>
                            </Switch>
                        </div>
                        <Footer />
                    </Grid>


function App() {
 const [count, setCount] = useState(0)
    return (
        <>
      
         <Container className={'top_60'}>
            <Grid container spacing={7}>
                <Grid item xs={12} sm={12} md={4} lg={3}>
                    <Profile />
                </Grid>
                <Grid item xs>
                    <Router>
                        <Header />
                        <div className='main-content container_shadow'>
                            <Switch>
                                <Route path="/portfolio"> <Portfolio /> </Route>
                                <Route path='/'> <Resume /> </Route>
                            </Switch>
                        </div>
                    </Router>
                    <Footer />
                </Grid>
            </Grid>
        </Container>        
        </>

    );
}

export default App;*/
/*
<div>
                <a href="https://localhost" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                </a>

            </div>
            <div>
                <a href="https://vitejs.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
            </div>
            <h1>Vite + React</h1>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
                <p>
                    Edit <code>src/App.jsx</code> and save to test HMR
                </p>
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
            </div>

*/