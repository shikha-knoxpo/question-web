import QABox from "../QABox";
import classes from './style.module.css';

export const Container = () => {
    return(<>
    <QABox/>
    <button className={classes.add}>+ ADD QUESTION</button><br/>
    <button className={classes.save}>SAVE AND SHARE</button>
    </>)
}

export default Container;