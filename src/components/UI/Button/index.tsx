import classes from "./style.module.css";

export const Button = (props:{value:string,onClick:()=>void}) =>{
    return(<>
        <button className={classes.button} onClick={props.onClick}>{props.value}</button>
    </>)
}

export default Button;