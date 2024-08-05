
import React from 'react';
import './style.css';
import logo from './logo.svg';


const Footer:React.FC=() =>(
      <footer className='footer'>
          <div id="footer-container">
        <ul className="foot">
            <li><h2>Exclusive</h2></li>
            <li><h3>Subscribe</h3></li>
            <li><h4>Get 10% off on your first order</h4></li>
         </ul>
       <ul className="footer-contents">
        <li><h3>Support</h3></li>
       <li>PSR Prime Towers,4th Floor,
        Beside DLF Cyber cafe, Gachbowli,Hyderabad,
        Telangana 500032</li>
       <li>q-store@gmail.com</li>
       <li>+88015-88888-99999</li>
       
       </ul >
       <ul className="footer-content">
       <li><h3>Account</h3></li>
       <li>My Account</li>
       <li>Login/Register</li>
       <li>Cart</li>
       <li>Wishlist</li>
       <li>Shop</li>
     </ul>

       <ul className="footer-content">
       <li><h3>Quick List</h3></li>
       <li>Privacy Policy</li>
       <li>Terms of Use</li>
       <li>FAQ</li>
       <li>Contact</li>
       </ul>
          
       <ul className="footer-content">
       <li><h3>Q-store App</h3></li>
       <img src={logo} alt='logo'/>
       </ul>
       </div>
       
         <p id="copyright">©Copyright Q-store 2024.All rights reserved.</p>
         
        </footer>
);
        

export default Footer;