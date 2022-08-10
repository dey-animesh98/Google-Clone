import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

const TimeStamp = () => {
  return (
    <>
    <div className='time-div'>
    <p className='time'>{new Date().toLocaleString()}, IST</p>
    </div>
      
    </>
  )
}

const NavBar = () => {
  return (
    <>
      <nav className='nav-bar'>
        <p>
          <span className='gmail'><a className='nav-link'  href='https://mail.google.com/'>Gmail</a></span>
          <span className='g-img'> <a className='nav-link' href='https://www.google.co.in/imghp'> Images</a>  </span>
          <button className='sign-in-btn'><a className='nav-btn-link' href='https://accounts.google.com/signin'>Sign in</a> </button>
        </p>
      </nav>

    </>
  )
}

const Google = () => {
  return (
    <>
      <div className='brand'>
        <h2 className='logo' >
          <span className='D'>G</span>
          <span className='o1'>o</span>
          <span className='o2'>o</span>
          <span className='g2'>g</span>
          <span className='l'>l</span>
          <span className='e'>e</span>
        </h2>
      </div>
    </>
  )
}

const Search = () => {
  return (
    <>
      <div className='search-div'>
        <input className="search-bar" name='search' type="text"/>
      </div>
    </>
  )
}

const Button = () => {
  return (
    <>
      <div className='buttons'>
        <button className='search-button'><a>Google Search</a></button>
        <button className='lucky-button'>I'm Feeling Lucky</button>
      </div>
    </>
  )
}

const Languages = (props) => {
  return (
    <>
      <p className='lang'>{props.langs}
        <a className='lang-link'
          href='#'>
          &nbsp; English &nbsp; हिंदी &nbsp; বাংলা &nbsp; తెలుగు &nbsp; मराठी &nbsp; தமிழ் &nbsp; ગુજરાતી &nbsp; ಕನ್ನಡ &nbsp; മലയാളം &nbsp; ਪੰਜਾਬੀ
        </a> </p>
    </>
  )
}
setInterval(() => {
  root.render(
    <React.StrictMode>
      <NavBar />
      <Google />
      <Search />
      <Button />
      <Languages langs='Google offered in: ' />
      <TimeStamp />

    </React.StrictMode>
  );
}, 1000);

