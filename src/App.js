// import AboutUs from './components/AboutUs';
import Navbar from './components/Navbar';
import Textform from './components/Textform';

function App() {
  return (
    <>
      <Navbar title="Text Utility"/>
      <div className="container my-3">
        <Textform heading="Enter Text"/>
        {/* <AboutUs /> */}
      </div>
    </>
  );
}

export default App;
