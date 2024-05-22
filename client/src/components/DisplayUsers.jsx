import PersonCard from "./PersonCard"

const DisplayUsers = ({people}) => {


    return (
        <>
            {
                people.map((person, index) => (
                    <PersonCard person={person} key={index}/>
                ))
            }
        </>
    )
}

export default DisplayUsers