import React from 'react';
import GenericHeader from '../components/GenericHeader ';
import Footer from'../components/Footer';
import MainForm from './MainForm';
import '../components/style.css';

  
  const App: React.FC = () => {
 
  
    return (
      <div>
        <GenericHeader title="Summer sale for all swim suits and free Express Delivery-OFF50%!"
        subTitle='Q-Store'
      menuItems= {['Home', 'Contacts','About','Signup']}/>
<MainForm/>
  <Footer/>
      </div>
    );
  };
  
  export default App;