import { InputHTMLAttributes, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import classes from "./style.module.css";
import { addQA } from "../../redux/questionSlice";
import ListOfQA from "../ListOfQA";

export const QABox: React.FC<{}> = (props) => {
  const [question, setQuestion] = useState("");
  const state = useSelector((state: any) => state.qList);

  const dispatch = useDispatch();
  const [answer, setAnswer] = useState("");
  const onClickHandler = () => {
    dispatch(addQA({ question, answer }));
    setQuestion("");
    setAnswer("");
  };
  const onChangeQuestion = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuestion(e.target.value);
  };
  const onBlurQuestion = (e: React.FocusEvent<HTMLInputElement>) => {
    setQuestion(e.target.value);
    //props.onBlurQuestion(question);
  };
  const onClickSaveHandler = () => {
    console.log(JSON.stringify(state.list));
  };
  const onChangeAnswer = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAnswer(e.target.value);
  };
  const onBlurAnswer = (e: React.FocusEvent<HTMLInputElement>) => {
    setAnswer(e.target.value);
    //props.onBlurAnswer(answer);
  };
  return (
    <>
      <div className={classes.main}>
        <form>
          <label htmlFor="question" className={classes.label}>
            Question
          </label>
          <br />
          <input
            name="question"
            id="question"
            type="text"
            className={classes.text}
            value={question}
            onChange={onChangeQuestion}
            onBlur={onBlurQuestion}
            placeholder="What do you want to ask?"
          ></input>
          <br />
          <hr className={classes.hr} />
          <br />

          <label htmlFor="answer" className={classes.label}>
            Answer
          </label>
          <br />
          <select className={classes.select}>
            <option value="Short">Short Answer</option>
          </select>
          <input
            type="text"
            name="answer"
            id="answer"
            className={`${classes.text} ${classes.answer} `}
            value={answer}
            onChange={onChangeAnswer}
            onBlur={onBlurAnswer}
            placeholder="Short Answer Text"
          ></input>
          <br />
          <hr className={classes.hr} />
          <br />
        </form>
      </div>
      <button className={classes.add} onClick={onClickHandler}>
        + ADD QUESTION
      </button>
      <br />
      <button className={classes.save} onClick={onClickSaveHandler}>
        SAVE AND SHARE
      </button>
      <br />
      <ListOfQA />
    </>
  );
};

export default QABox;
