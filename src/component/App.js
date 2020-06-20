import React , {useState, useEffect} from 'react';
import FormOrder from './Form'
import * as Yup from 'yup';
import formSchema from '../validation/formSchema';
import axios from 'axios';
import { Link, useRouteMatch } from 'react-router-dom'
import Contain from '../Style/home'

const initailForm = {
    fname: '',
    size: '',
    sauce: '',
    topping: {
        pepperoni: false,
        saucsage: false,
        mushroom: false,
        olive: false,
        bellpepper: false,
        bacon: false,

    }

}
const initailError ={
    fname: '',
    size: '',
 
}
const initialDisable = true

function Apps (){
    const [formValue, setFormValue] = useState(initailForm)
    const [error, setError] = useState(initailError)
    const [disabled, setDisabled ] = useState(initialDisable)



    const postNeworder = newOrder  =>{

      axios.post('https://reqres.in/api/pizza', newOrder)
      .then(res =>{
         console.log(res.data)
          setFormValue([...formValue, res.data])
         
      })
      .catch(err=>{
          
      })
      .finally(() =>{
          setFormValue(initailForm) 
          
      })

    }
    
    const inputChange = event => {
        const { name, value } = event.target
        Yup
          .reach(formSchema, name)
          .validate(value)
          .then(() => {
            setError({
              ...error,
              [name]: ""
            })
          })
          .catch(err => {
            setError({
              ...error,
              [name]: err.errors[0]
            })
          })
          setFormValue({
            ...formValue,
            [name]: value
          })
      }
      const checkboxChange = event => {
        const {name, checked} = event.target
       
        
        setFormValue({
            ...formValue,
          topping: {
            ...formValue.topping,
            [name]: checked,
          }
        })
      }
    
    const onSubmit = event => {
    event.preventDefault()

    const newOrder = { 
        ...formValue,
        topping: Object.keys(formValue.topping)
        .filter(toppingName =>(formValue.topping[toppingName] === true))
    }
    postNeworder(newOrder)
  
    }
    useEffect(() =>  {
        formSchema.isValid(formValue).then(valid => {
          setDisabled(!valid)
        })
      }, [formValue])

      return (
          <div className="another-App"> 
         <Contain>
            <FormOrder
              values={formValue}
              inputChange={inputChange}
              checkboxChange={checkboxChange}
              onSubmit={onSubmit}
              disabled={disabled}
              errors={error}
            />
      
          </Contain>
          </div>
      )

}
export default Apps;