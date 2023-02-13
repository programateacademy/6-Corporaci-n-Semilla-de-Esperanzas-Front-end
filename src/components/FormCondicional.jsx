import React, {Component} from 'react'
import { Form } from './Form';
import { FormNatural } from './FormNatural';




class FormCondicional extends React.Component{
    constructor(props){
         super(props);
        this.state = {
            natural:true,
        }}
       
    
  render() {
    return (
    <div>
        {this.state.natural ? <FormNatural/> : <Form/>}
    </div>
  )
} }

export default FormCondicional
