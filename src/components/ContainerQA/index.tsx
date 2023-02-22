import classes from './style.module.css';

export const ContainerQA = () => {
    
    return(<>
    <div className={classes.main}>
        <form>
            <label className={classes.label}>Question</label><br/>
            <input type='text' className={classes.text}  placeholder="What do you want to ask?"></input><br/><br/>

            <label className={classes.label}>Answer</label><br/>
            <select className={classes.select}>
            <option value="Short" >Short Answer</option>
            </select>
            <input type='text' className={`${classes.text} ${classes.answer} `}  placeholder="Short Answer Text"></input><br/><br/>

        </form>
    </div>
    <button className={classes.add}>+ ADD QUESTION</button><br/>
    <button className={classes.save}>SAVE AND SHARE</button>
    </>)
}

export default ContainerQA;