import logo from './logo.svg';
import './App.css';

const App = () => {
  return (
    <div className='app-wrapper'>
      <header className='main-header'>
        <img src="https://spng.pngfind.com/pngs/s/4-48076_visual-website-optimizer-visual-website-optimizer-logo-hd.png" width="100" height="100"></img>
      </header>
      <nav className='navigation'>
        <ul>
          <li>
            <a>Profile</a>
          </li>
          <li>
            <a>Messages</a>
          </li>
          <li>
            <a>News</a>
          </li>
          <li>
            <a>Music</a>
          </li>
          <li>
            <a>Settings</a>
          </li>
        </ul>
      </nav>
      <section className='content'>
        <img className='image-profile' src='https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg'></img>
      </section>
    </div>
  );
}

export default App;
