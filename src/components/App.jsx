import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import MissingPage from '../pages/MissingPage'
import Header from './Header'
import Footer from './Footer'
import LogementDetails from '../pages/LogementDetails'

const App = () => (
    <Router>
        <Header />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/logement/:id" element={<LogementDetails />} />
            <Route path="/*" element={<MissingPage />} />
        </Routes>
        <Footer />
    </Router>
)

export default App
