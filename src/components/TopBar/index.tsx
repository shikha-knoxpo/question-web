import classes from "./styles.module.css";
import icon from "./assets/icon.png";
import Button from "../UI/Button";
import {useNavigate} from "react-router-dom";
import { useState } from "react";

export const TopBar:React.FC<{onChangeTitle:(title:string)=>void}> = (props) => {
    const navigate =useNavigate();
    const [title,setTitle] = useState("New Questionaire");
    const onClickHandler = () =>{
        navigate('/login');
    }
    const onChangeHandler = (e:any) =>{
        setTitle(e.target.value);
       
        
    }

    const onBlurHandler = (e:any)=>{
        setTitle(e.target.value)
        props.onChangeTitle(title); 
    }
    return(
        
        <>
        <div className={classes.header}>
            <img className={classes.icon} src={icon}></img>
            <span className={classes.button}><Button value="LOG IN" onClick={onClickHandler} /></span>
            
            <span>
                <input className={classes.input} value={title} onChange={onChangeHandler} onBlur={onBlurHandler} ></input>
            </span>
        </div>
        </>
    )
}

export default TopBar;
