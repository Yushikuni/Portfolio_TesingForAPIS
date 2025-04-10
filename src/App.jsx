import { Container, Grid } from "@mui/material";
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import './App.css';
import Footer from './components/Footer/Footer';
import Portfolio from './pages/Portfolio/Portfolio';
import Resume from './pages/Resume/Resume';
import Profile from "./components/Profile/Profile";

function App() {
    return (
        <Router>
            <Container className={'top_60'}>
                <Grid container spacing={7}>
                    <Grid item xs={12} sm={12} md={4} lg={3}>
                        <Profile />
                    </Grid>
                    <Grid item xs>
                        <main className='main-content container_shadow top_60'>
                            <Routes>
                                <Route path="/" element={<Resume />} />
                                <Route path="/portfolio" element={<Portfolio />} />
                            </Routes>
                        </main>
                        <Footer />
                    </Grid>
                </Grid>
            </Container>
        </Router>
    );
}
export default App;