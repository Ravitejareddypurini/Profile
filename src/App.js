
import './App.css';
import './styles/utils.css'
import './styles/components/header.css'
import './styles/components/profile.css'
import image from'./images/ravi.jpg'
import './styles/components/about.css'

function App() {
  return (
    <div>
    <header className='header container'>
      <nav>
        <ul className='header__menu'>
          <li>
            <a  className='header__link' href='about'>About</a>
          </li>
          <li><a  className='header__link' href='#work'>work</a></li>
          <li><a  className='header__link' href="contact">Contact</a></li>
          <li className='header__line'></li>
          <li>
            <button>
          <svg className="header__sun" xmlns="http://www.w3.org/2000/svg" fill="none" 
          viewBox="0 0 24 24" stroke-width="1.5" 
          stroke="currentColor" >
          <path stroke-linecap="round" 
          stroke-linejoin="round" 
          d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
         </svg>
          </button></li>
          <li><button className='header__resume btn' href="">Resume</button></li>
        </ul>
        <button className='header__bars'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>

        </button>
      </nav>
    </header>
    <main>
      <section class="profile">
        <img className="profile__img" src={image} alt="profile picture"></img>
        <h2 className='profile__subtitle'>Hi I am Ravi Teja 👋</h2>
        <h2 className='profile__title'>Full Stack<br></br> Web Developer</h2>
        <p className='profile__description'>A passionate <strong>Frontend / Backend Fullstack web developer</strong> 
          enthusiast specialized in bulding stunning pixel-perfect interactive websites
        </p>
        <a className='btn profile__btn'href='reachout'>Reach Out</a>
      </section>
      
      <section className='about container '>
        <div className='about__content'>
          <h2 className='about__title'>About</h2>
          <p className='about__desctiption'>A passionate <strong>Frontend / Backend Fullstack web developer</strong> 
          enthusiast specialized in bulding stunning pixel-perfect interactive websites</p>
        <hr className='about__hr'></hr>
        <h3 className='about__subtitle'>Technologies</h3>
        
        
        <div className='about__ul-container1'>
          <div className='about__items'>
             <h1 className='profile__description'>Frontend</h1>
             <hr className='about__hr'></hr>
           <ul className='about__ul'>
             <li>Html</li>
             <li>CSS</li>
             <li> Java Script</li>
             <li> Type Script</li>
             <li> React</li>
             <li> Material-UI</li>
             <li> Sass</li>
             <li> Tailwind</li>
             <li>Redux</li>
          
            </ul>
          </div>
        <div className='about__items'>
          <h1 className='profile__description'>Backend</h1>
          <hr className='about__hr'></hr>
        <ul  className='about__ul'>
        <li > Spring</li>
        <li> Spring Microservices</li>
        <li> Spring Security</li>
        <li> J2EE</li>
          <li >My Sql</li>
          <li >MongoDB</li>
        </ul>
        </div>
        
        </div>
       
      </div>
        
      </section> 
      
      {/* {/* <section></section>
      <section></section> */}
    </main>
    <footer></footer>
    </div>
  );
}

export default App;
