import React, { useRef } from "react";
import updateWord from '../../store/word/action'
import { connect } from "react-redux";

const Form = ({updateWord}) => {
  // eslint-disable-next-line no-unused-expressions
  const wordRef = useRef(null) 
  return <div className='form'>
    <input className = 'input-word' type="text" ref={wordRef} />
    <button className='button' onClick={() => {updateWord(wordRef.current.value)}}>Update Word!</button>
  </div>
};

export default connect (null, {updateWord}) (Form);
