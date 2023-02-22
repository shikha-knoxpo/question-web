import classes from "./styles.module.css";
import icon from "./assets/icon.png";
import Button from "../UI/Button";
import {useNavigate} from "react-router-dom";

export const TopBar = () => {
    const navigate =useNavigate();
    const onClickHandler = () =>{
        navigate('/login');
    }
    return(
        
        <>
        <div className={classes.header}>
            <img className={classes.icon} src={icon}></img>
            <span className={classes.button}><Button value="LOG IN" onClick={onClickHandler} /></span>
            
            <span>
                <input className={classes.input} value="New Questionaire" ></input>
            </span>
        </div>
        </>
    )
}

export default TopBar;
