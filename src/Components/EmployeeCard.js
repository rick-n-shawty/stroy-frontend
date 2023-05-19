export default function EmployeeCard({name, position, exp, desc, picture}){
    return(
        <div className="emp-card">
            <img src={picture}></img>
            <div className="bottom">
                <h2>{name}</h2>
                <p>{position}</p>
                <p>Опыт: {exp}</p>
                <p>Образование: {desc}</p>
            </div>
        </div>
    )
}