import {LanguageContext} from '../App';
import { useContext } from 'react';
export default function EmployeeCard({name, positionRu, exp, descRu, descUz, positionUz, picture}){
    const [rus, setRus] = useContext(LanguageContext)
    return(
        <div className="emp-card">
            <img src={picture}></img>
            <div className="bottom">
                <h2>{name}</h2>
                <p>{rus ? positionRu : positionUz}</p>
                <p>{rus ? "Опыт:" : "Tajriba:"} {exp}</p>
                <p>{rus ? descRu : descUz}</p>
            </div>
        </div>
    )
}