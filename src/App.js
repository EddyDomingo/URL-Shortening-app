import './App.css';
import Shorten from './Shorten';
import ProductData from './ProductData';
import ProductDetails from './ProductDetails';

function App() {
  return (
    <main>
      <header>
        <img src="images/images/logo.svg" alt="logo" className="logo"/>
        <span className="hamburger"></span> 
        <img src="images/images/illustration-working.svg" alt="illustration-working" className="img-working"/>
        <section>
          <h1>More than just shorter links</h1>
          <p>
            Build your brand’s recognition and get detailed insights 
            on how your links are performing.
          </p>
          <a className="getstarted-btn" href="#">Get Started</a>

        </section>
      </header>
        <Shorten/>
        <section className="advanced-statistics">
          <div className="advances-title">
            <h2>Advanced Statistics</h2>
            <p>
              Track how your links are performing across the web with our 
              advanced statistics dashboard.
            </p>
          </div>
        </section>
        <section>
          <ProductDetails ProductData={ProductData}/>
        </section>
        <section className="semi-footer">
          <h2>Boost your links today</h2>
          <a className="getstarted-btn" href="#">Get Started</a>
        </section>
        <footer>
          <h2>Shortly</h2>
          <p>Features</p>
          <p>Link Shortening</p>
          <p>Branded Links</p>
          <p>Analytics</p>
        </footer>
    </main>
  );
}

export default App;
