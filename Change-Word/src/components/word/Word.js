import React from 'react'
import { selecteActiveWord } from '../../store/word/reducer'
import { connect } from "react-redux";


 const Word  = ({word}) => <div>{word}</div>
 
 const mapStateToProps = state =>{
     return {
         word: selecteActiveWord(state)
     }
 }

 export default connect(mapStateToProps)(Word)