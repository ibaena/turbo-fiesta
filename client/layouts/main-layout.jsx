import React from 'react';
import ReactDOM from 'react-dom';
import TrackerReact from 'meteor/ultimatejs:tracker-react';


export const MainLayout = ({content}) => (

  <div id="body">
    <header>
      Header
    </header>

    <main>
      {content}
    </main>

    <footer>
      Footer
    </footer>



  </div>
)
