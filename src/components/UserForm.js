import React, { Component } from 'react'
import { FormUserDetails } from "./FormUserDetails";
export class UserForm extends Component {

    state = {
        step: 1,
        firstName: '',
        firstLastName: '',
        secondLastName: '',
        email: '', //Optional
        phone: '',
        cellphone: '',
        birthDate: '',
        address: '',
        intNumber: '',
        extNumber: '',
        colony: '',
        postalCode: '',
        city: '',
        state: ''
    }

    //Continuar al segundo paso
    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step: step + 1
        }); 
    }

    //Volver un paso atras
    prevStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1
        }); 
    }    

    handleChange = input => e => {
        this.setState({[input]: e.target.value});

    }

  render() {
    const {step} = this.state;
    const {firstName, firstLastName, secondLastName, email, phone, cellphone, birthDate,address, intNumber, extNumber, colony, postalCode, city, state} = this.state;
    const values = {firstName, firstLastName, secondLastName, email, phone, cellphone, birthDate, address, intNumber, extNumber, colony, postalCode, city, state};

    //switch for steps states
    switch(step){
        case 1:
                return(
                    <FormUserDetails 
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )
        case 2:
                return(
                    <h1>Formulario de referencias</h1>
                ) 
        case 3:
                return(
                    <h1>Confirmacion</h1>
                )    
        case 4:
                return(
                    <h1>Exito</h1>                    
                )    
                
    }
  }
}

export default UserForm
