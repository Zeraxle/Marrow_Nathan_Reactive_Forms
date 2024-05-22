
const PersonCard = ({person, index}) => {
const {firstName, lastName, email} = person
    return (
        <div key={index}>
            <p>Name: {firstName} {lastName}</p>
            <p>Email: {email}</p>
        </div>
    )
}

export default PersonCard