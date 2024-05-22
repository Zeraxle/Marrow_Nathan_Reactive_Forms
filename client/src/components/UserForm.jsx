import {useState} from 'react'


const UserForm = ({setPeople}) => {
    
    const [hasbeenSubmitted, setHasBeenSubmitted] = useState(false)
    const [ person, setPerson ] = useState({
        firstName :'',
        lastName : '',
        email : '',
        password : '',
        confirmPassword : ''
    })

    const [errors, setErrors] = useState({
        firstName:'',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
    })
    
    
    
    const readyToSubmit = () => {
        for(let key in errors){
            if(errors [key] !== true){
                return false
            }
        }
    }

    const validatePersonAttribute = (name, value) => {
        const validations = {
            firstName : value => value.length >= 3? '' : 'First Name needs at least 3 characters',
            lastName : value => value.length >= 3? '' : 'Last Name needs at least 3 characters',
            email : value => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)? '' : 'Email must be valid',
            password : value => value.length >= 8? '' : 'Password must be at least 8 characters',
            confirmPassword : value => {
                if (name == 'confirmPassword'){return person.password === value? '' : 'Passwords must match'}
                if (name == "password"){return person.confirmPassword === value? '' : 'Passwords must match'}
            } 
        }
        if (name == 'password'){setErrors(prev => ({...prev, confirmPassword: validations['confirmPassword'](value)} ) ) }
        setErrors(prev => ({...prev, [name]: validations[name](value)}))
    }

    const updatePerson = (e) => {
        const {name, value} = e.target
        setPerson(prev => ({...prev, [name]: value}))
        validatePersonAttribute(name, value)
    }

    const submitHandler = (e) => {
        e.preventDefault()
        if (!readyToSubmit){
            alert('Please make corrections to the form')
            return 
        }
        setPeople(prev => [...prev, person])
        setPerson({
            firstName:'',
            lastName: '',
            email: '',
            password: '',
            confirmPassword: ''
        })
        setHasBeenSubmitted(true)
    }

    
    return (
            <form onSubmit={submitHandler}>
                {
                    hasbeenSubmitted?
                    <h1>Thank you for submitting the form</h1> :
                    <h1>Welcome, please submit the form</h1>
                }
                <label>
                    First Name:
                    <input 
                        type="text"
                        name="firstName"  
                        value={person.firstName} 
                        onInput={updatePerson} 
                        placeholder="Please enter First Name"/> 
                    {
                        errors.firstName
                    }
                </label>
                <label>
                    Last Name:
                    <input 
                        type="text"
                        name="lastName"  
                        value={person.lastName}
                        onInput={updatePerson} 
                        placeholder="Please enter Last Name"/> 
                    {
                        errors.lastName
                    }
                </label>
                <label>
                    Email:
                    <input 
                        type="email" 
                        name="email" 
                        value={person.email}
                        onInput={updatePerson} 
                        placeholder="Please enter Email"/>
                    {
                        errors.email
                    }
                </label>
                <label>
                    Password:
                    <input 
                        type="password"
                        name="password"  
                        value={person.password}
                        onInput={updatePerson} 
                        placeholder="Please enter Password"/> 
                    {
                        errors.password
                    }
                </label>
                <label>
                    Confirm Password:
                    <input 
                        type="password"
                        name="confirmPassword" 
                        value={person.confirmPassword} 
                        onInput={updatePerson} 
                        placeholder="Please enter Confirm Password"/>
                </label>
                    {
                        errors.confirmPassword
                    }
                <input type="submit" value="Create User" className='button'/>
            </form>
    )
}

export default UserForm