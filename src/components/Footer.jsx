import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='d-flex justify-content-center align-items-center flex-column mt-2 shadow w-100 bg-light'>
      <div className='footer-content justify-content-evenly w-100 mt-5' style={{ display: 'flex' }}>
        <div className='website d-flex flex-column' style={{ paddingLeft: '50px' }}>
          <div style={{ fontWeight: 'bold', color: 'black' }}>{' '}INSIGHT</div>
          <div className='content text-dark'>
            Designed and built with all the love in the world by the Media team with the help of our contributors.
          </div>
          <div className='text-dark'>Code licensed Media, docs CC BY 3.0.</div>
          <div className='text-dark'>Currently v1.0.0.</div>
        </div>
        <div className='links d-flex flex-column' style={{ paddingLeft: '50px' }}>
          <div style={{ fontWeight: 'bold', color: 'black' }}>Links</div>
          <div className='d-flex flex-column'>
            <Link to={'/'} className="text-dark" style={{ textDecoration: 'none' }}>Home</Link>
            <Link to={'/settings'} className="text-dark" style={{ textDecoration: 'none' }}>Settings</Link>
            <Link to={'/write'} className="text-dark" style={{ textDecoration: 'none' }}>Write</Link>
          </div>
        </div>
        <div className='guides d-flex flex-column' style={{ paddingLeft: '50px' }}>
          <div style={{ fontWeight: 'bold', color: 'black' }}>Guides</div>
          <div className='d-flex flex-column'>
            <Link to={'https://react.dev/'} className="text-dark" style={{ textDecoration: 'none' }}>React</Link>
            <Link to={'https://react-bootstrap.github.io/'} className="text-dark" style={{ textDecoration: 'none' }}>React Bootstrap</Link>
            <Link to={'https://reactrouter.com/en/main'} className="text-dark" style={{ textDecoration: 'none' }}>Routing</Link>
          </div>
        </div>
        <div className='contact d-flex flex-column' style={{ paddingLeft: '50px', paddingRight: '50px' }}>
          <div style={{ fontWeight: 'bold', color: 'black' }}>Contact Us</div>
          <div className='d-flex'>
            <input type="text" className='rounded' />
            <button type="button" className="btn btn-primary rounded ms-2">Search</button>
          </div>
          <div>
            <Link to={'/'} className='mx-2' style={{ textDecoration: 'none', color: 'black' }}><i className="fa-brands fa-linkedin"></i></Link>
            <Link to={'/'} className='mx-3' style={{ textDecoration: 'none', color: 'black' }}><i className="fa-brands fa-twitter"></i></Link>
            <Link to={'/'} className='mx-3' style={{ textDecoration: 'none', color: 'black' }}><i className="fa-brands fa-facebook-f"></i></Link>
            <Link to={'/'} className='mx-2' style={{ textDecoration: 'none', color: 'black' }}><i className="fa-regular fa-envelope"></i></Link>
          </div>
        </div>
      </div>
      <p className='mt-5'>Copyright © 2023 Insight. Built with React.</p>
    </div>
  );
}

export default Footer;
