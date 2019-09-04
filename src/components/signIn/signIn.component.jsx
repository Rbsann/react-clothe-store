import React from 'react'

import './signIn.styles.scss'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'

class SignIn extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            email:'',
            password:''
        }
    }

    handleSubmit = (e)=>{
        e.preventDefault();
        this.setState({email:'',password:''})
    }

    handleChange = (e) =>{
        const {value,name} = e.target
        this.setState({[name]:value})
    }

    render(){
        return(
            <div className='sign-in'>
                <h2 className>I already have an account</h2>
                <span>Sign In with your email</span>
                <form onSubmit={this.handleSubmit()}>
                    <FormInput label='email' handleChange={this.handleOnChange()} name='email' type='email' value={this.state.email} />
                    <FormInput label='password' handleChange={this.handleOnChange()} name='password' type='password' value={this.state.password} />
                    <CustomButton type='submit' >Sign in</CustomButton> />
                </form>
            </div>
        )
    }
}

export default SignIn