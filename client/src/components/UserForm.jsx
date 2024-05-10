import {useState} from 'react'


const UserForm = (props) => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false)
    
    const submitHandler = (e) => {
        e.preventDefault()
        const userObject = {
            firstName,
            lastName,
            email,
            password
        }
        console.log(userObject)
        setFirstName('')
        setLastName('')
        setEmail('')
        setPassword('')
        setConfirmPassword('')
        setHasBeenSubmitted(true)
    }
    const formMessage = () => {
        if(hasBeenSubmitted){
            return <h1>"Thank you for submitting the form"</h1>
        } else {
            return <h1>"Welcome, please submit the form"</h1>
        }
    }
    return (
        <>
            <h1>{formMessage()}</h1>
            <form onSubmit={submitHandler}>
                <label>First Name:</label>
                <input type="text"  onChange={(e) => setFirstName(e.target.value)} value={firstName} 
                placeholder="Please enter First Name"/> 
                {
                    firstName.length < 2? "First Name must be more than 2 characters": null
                }
                <label>Last Name:</label>
                <input type="text"  onChange={(e) => setLastName(e.target.value)} value={lastName}
                placeholder="Please enter Last Name"/> 
                {
                    lastName.length < 2? "Last Name must be more than 2 characters": null
                }
                <label>Email:</label>
                <input type="email"  onChange={(e) => setEmail(e.target.value)} value={email}
                placeholder="Please enter Email"/>
                {
                    email.length < 8? "Email needs to be more than 8 characters": null
                }
                <label>Password:</label>
                <input type="password"  onChange={(e) => setPassword(e.target.value)} value={password}
                placeholder="Please enter Password"/> 
                {
                    password.length < 8? "Password needs to be more than 8 characters": null
                }
                <label>Confirm Password:</label>
                <input type="password" onChange={(e) => setConfirmPassword(e.target.value)} value={confirmPassword} 
                placeholder="Please enter Confirm Password"/>
                {
                    confirmPassword === password? null: "Confirm Password must match"
                }
                <input type="submit" value="Create User"/>
            </form>
        </>
    )
}

export default UserForm