import React from 'react';
import './style.css';
import searchlogo from './searchlogo.png';
interface GenericHeaderProps {
  title: string;
  subTitle:string;
  menuItems:string[];
}

const GenericHeader: React.FC<GenericHeaderProps> = ({ title ,subTitle, menuItems}) => {
  return (
    <div  className='app-container'>
      <p id="heading">{title}</p>
      <div  className='index'>
      <h3 id="Q-store">{subTitle}</h3>
      <ul className='main-list'>
        {menuItems.map(item=>(
        <li key={item}>{item}</li>))}
      </ul>
      <div className='search-container'>
      <input type='text' placeholder="what are you looking for? " id="search"/>
        <img src={searchlogo} alt='search' className="search-logo"></img>
      </div>
      </div><hr/>
      </div>
      )
  }
      export default GenericHeader