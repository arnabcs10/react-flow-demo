import React from 'react';
// import ReactFlowApp from './react-flow-app/ReactFlowApp'; //UNCOMMENT THIS TO CHECKOUT THIS COMPONENT
// import ReactFlowApp2 from './react-flow-app2/ReactFlowApp'; //UNCOMMENT THIS TO CHECKOUT THIS COMPONENT
// import ReactFlowApp3 from './react-flow-app3/ReactFlowApp';
import BotBuilder from './bot-builder/BotBuilder';
import LeftSidebar from './left-sidebar/LeftSidebar';
import {Route, Switch} from 'react-router-dom';
import './App.css';


function App () {

   
    return (
      <div className='App'>      
        {/* <ReactFlowApp/> */}   {/*UNCOMMENT THIS TO CHECKOUT THIS COMPONENT*/}
        {/* <ReactFlowApp2/>    */}
        {/* <ReactFlowApp3/> */}
        <LeftSidebar />
        <Switch>
        
          <Route path='/' render={()=> <BotBuilder />} />
        </Switch>
      </div>
    );
  
}

export default App;
