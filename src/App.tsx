import './@verti/styles/Sass/main.css';
import Header from './@verti/Core/Header/Header';
import Banner from './@verti/Core/Banner/Banner';
import Feature from './@verti/Core/Feature/Feature';

function App() {
  return (
    <div id='page-wrapper'>
      <Header />
      <Banner />
      <Feature />
    </div>
  );
}

export default App;
