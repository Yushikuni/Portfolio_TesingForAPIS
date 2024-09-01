import { Container, Grid } from "@mui/material";
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import './App.css';
import Footer from './components/Footer/Footer';
import SideNav from './components/SideNav/SideNav';
import Blog from './pages/Blog/Blog';
import Contact from './pages/Contact/Contact';
import NotFound from './pages/NotFound/NotFound';
import Portfolio from './pages/Portfolio/Portfolio';
import Resume from './pages/Resume/Resume';

function App() {
    return (
        <Router>
            <Container>
                <Grid container spacing={7}>
                    <Grid item xs={12} sm={12} md={4} lg={3}>
                        <SideNav />
                    </Grid>
                    <Grid item xs>
                        <main className='main-content container_shadow top_60'>
                            <Routes>
                                <Route path="/" element={<Resume />} />
                                <Route path="/contact" element={<Contact />} />
                                <Route path="/portfolio" element={<Portfolio />} />
                                <Route path="/blog" element={<Blog />} />
                                <Route path="*" element={<NotFound />} />
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