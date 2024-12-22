
import React, { Component } from 'react';


class Loading extends Component {

  render() {


    return (
      <div className='w-full h-screen flex items-center justify-center gap-y-8 flex-col'>
        <img src='/images/logo.png' alt='damen' className='w-[200px]'/>
        <div className="w-full max-w-[300px] bg-gray rounded-full h-2.5">
        <div className="bg-damen h-2.5 rounded-full" style={{width: '70%'}}></div>
        </div>
      </div>
    );
  }
}

export default Loading;
