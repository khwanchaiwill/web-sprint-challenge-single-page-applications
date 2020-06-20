import React from 'react';


function FormOrder (props) {
    const {
        values,
        onSubmit,
        inputChange,
        checkboxChange,
        disabled,
        errors
    } = props

    return(
        
            <form onSubmit={onSubmit}>
                <label>Firstname:  &nbsp;
                    <input className="firstname"
                        type= 'text'
                        name= 'fname'
                        value= {values.fname}
                        onChange={inputChange}
                        placeholder='Firstname - Lastname'
                    />
                </label><br/>
               
                <label>Size:  &nbsp;
                    <select
                        name='size'
                        values={values.size}
                        onChange={inputChange}                    
                    >
                        <option>--Select-size---</option>
                        <option>small</option>
                        <option>medium</option>
                        <option>large</option>
                        <option>extralarge</option>

                    </select>
                </label><br/>

                <label>Sauce:   &nbsp;
                    <select 
                        name='sauce'
                        value={values.sauce}
                        onChange={inputChange}
                    >
                        <option>Red sauce</option>
                        <option>Ranch</option>
                        <option>BBQ sauce</option>

                    </select>
                </label><br/>
                <h3>Choose your Topping</h3>
                <label> Pepperoni:  &nbsp;
                    <input 
                        type='checkbox'
                        name='pepperoni'
                        checked={values.topping.pepperoni}
                        onChange={checkboxChange}
                    />
                </label><br/>
                <label>Saucsage:  &nbsp;
                    <input 
                        type='checkbox'
                        name='saucsage'
                        checked={values.topping.saucsage}
                        onChange={checkboxChange}
                    />
                </label><br/>
                <label>🍄 Mushroom:&nbsp;
                    <input 
                        type='checkbox'
                        name='mushroom'
                        checked={values.topping.mushroom}
                        onChange={checkboxChange}
                    />
                </label><br/>
                <label>Olive:  &nbsp;
                    <input 
                        type='checkbox'
                        name='olive'
                        checked={values.topping.olive}
                        onChange={checkboxChange}
                    />
                </label><br/>
                <label>Bell Pepper:  &nbsp;
                    <input 
                        type='checkbox'
                        name='bellpepper'
                        checked={values.topping.bellpepper}
                        onChange={checkboxChange}
                    />
                </label><br/>
                <label>🥓 Bacon:  &nbsp;
                    <input 
                        type='checkbox'
                        name='bacon'
                        checked={values.topping.bacon}
                        onChange={checkboxChange}
                    />
                </label><br/>
                <div className="error-container">
                    <div> {errors.fname} </div>
                    <div> {errors.size} </div>               
                </div>
                <button disabled={disabled}>Submit</button>
                

            </form>
       
    )
}
export default FormOrder;