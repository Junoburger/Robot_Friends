import React from 'react';


const Scroll = (props) => {

  return (
    <div style={{overflowY: 'scroll', border: '1px solid rgb(65, 215, 86)', height:'525px'}}>

      {props.children}

    </div>
  );

};

export default Scroll;
