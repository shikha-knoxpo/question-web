import classes from "./style.module.css";

export const Button:React.FC<{value:string,onClick:()=>void}>= (props) =>{
    return(<>
        <button className={classes.button} onClick={props.onClick}>{props.value}</button>
    </>)
}

export default Button;