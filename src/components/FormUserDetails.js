import React, { Component } from 'react'
import MultiThemeProvider from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import TextField from '@material-ui/core/TextField';
//import Button from '@material-ui/core/Button';

export class FormUserDetails extends Component {
    continue = e =>{
        e.preventDefault();
        this.props.nextStep();
    }

  render() {
      const {values, handleChange} = this.props;
    return (
        // <MultiThemeProvider>
             <React.Fragment>
                <AppBar title="Solicitud: Nuevo asociado" />
                <TextField 
                    hintText="Ej: Lopéz"
                    floatingLabelText="Escriba su apellido paterno"
                    onChange={handleChange('firstLastName')}
                    defaultValue={values.firstLastName}
                />
                <br/>
                <TextField 
                    hintText="Ej: Peréz"
                    floatingLabelText="Escriba su apellido materno"
                    onChange={handleChange('secondLastName')}
                    defaultValue={values.secondLastName}
                />
                <br/>
                <TextField 
                    hintText="Ej: Juan Pedro"
                    floatingLabelText="Escriba su nombre(s)"
                    onChange={handleChange('firstName')}
                    defaultValue={values.firstName}
                />
                <br/>
                <TextField 
                    hintText="Ej: juanp.lopez@gmail.com"
                    floatingLabelText="Escriba su correo electrónico"
                    onChange={handleChange('email')}
                    defaultValue={values.email}
                />
                <br/>
                <TextField 
                    hintText="Teléfono"
                    floatingLabelText="Teléfono de casa u oficina"
                    onChange={handleChange('phone')}
                    defaultValue={values.phone}
                />
                <br/>
                <TextField 
                    hintText="Celular"
                    floatingLabelText="Escriba su numero de celular"
                    onChange={handleChange('cellphone')}
                    defaultValue={values.cellphone}
                />
                <br/>
                {/* Direccion */}
                <TextField 
                    hintText="Calle"
                    floatingLabelText="Calle de su domicilio"
                    onChange={handleChange('address')}
                    defaultValue={values.address}
                />
                <br/>
                <TextField 
                    hintText="Ej: 215"
                    floatingLabelText="Numero interior"
                    onChange={handleChange('intNumber')}
                    defaultValue={values.intNumber}
                />
                <br/>
                <TextField 
                    hintText="Ej: A1"
                    floatingLabelText="Numero exterior (Opcional)"
                    onChange={handleChange('extNumber')}
                    defaultValue={values.extNumber}
                />
                <br/>
                <TextField 
                    hintText="Ej: Las quintas"
                    floatingLabelText="Colonia"
                    onChange={handleChange('colony')}
                    defaultValue={values.colony}
                />
                <br/>
                <TextField 
                    hintText="Ej: 80000"
                    floatingLabelText="Código Postal"
                    onChange={handleChange('postalCode')}
                    defaultValue={values.postalCode}
                />
                <br/>
                {/* <Button
                    label="Continuar"
                    primary={true}
                    style={styles.button}
                    onClick={this.continue}
                /> */}

            </React.Fragment>
       // </MultiThemeProvider>
    )
  }
}
const styles ={
    button: {
        marign: 15
    }
}

export default FormUserDetails
