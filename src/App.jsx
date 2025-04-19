import styles from './App.module.css';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';
import Project from './components/Project/Project';

function App() {

  return (
    <>
    <div className={styles.App}>
    <Navbar/> 
    <Hero/>
    <About/>
    <Project/>
    </div>
    
    

    </>
  )
}

export default App
