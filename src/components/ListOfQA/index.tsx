import { useDispatch, useSelector } from "react-redux";
import { Questionaire, QuestionAnswerList } from "../../redux/model";
import classes from "./style.module.css";
import { delQA, reOderQADown, reOrderQAUp } from "../../redux/questionSlice";
import deleteButton from "./assets/delete.png";
import down from "./assets/downButton.png";
import up from "./assets/upButton.png";

export const ListOfQA = () => {
  const dispatch = useDispatch();
  const state = useSelector((state: any) => state.qList);
  const onDeleteHandler = (e: string) => {
    dispatch(delQA(e));
  };

  const onUpHandler = (e: number) => {
    dispatch(reOrderQAUp(e));
  };
  const onDownHandler = (e: number) => {
    dispatch(reOderQADown(e));
  };
  return (
    <>
      {state.list.length > 0 && <h5>List Of all the Questions</h5>}
      {state.list.map(
        (
          e: { id: string; question: string; answer: string },
          index: number
        ) => {
          return (
            <div className={classes.main} key={index}>
              <form>
                <label className={classes.label}>Question</label>
                <br />
                <input
                  id="question"
                  name="question"
                  type="text"
                  disabled
                  className={classes.text}
                  placeholder="What do you want to ask?"
                  value={e.question}
                ></input>
                <br />
                <br />

                <label className={classes.label}>Answer</label>
                <br />
                <select className={classes.select} disabled>
                  <option value="Short">Short Answer</option>
                </select>
                <input
                  type="text"
                  disabled
                  className={`${classes.text} ${classes.answer} `}
                  placeholder="Short Answer Text"
                  value={e.answer}
                ></input>
                <br />
                <div className={classes.buttons}>
                  <button
                    className={classes.del}
                    type="button"
                    onClick={() => onDeleteHandler(e.id)}
                  >
                    <img src={deleteButton}></img>
                  </button>
                  <button
                    className={classes.del}
                    type="button"
                    onClick={() => onDownHandler(index)}
                  >
                    <img src={down}></img>
                  </button>
                  <button
                    className={classes.del}
                    type="button"
                    onClick={() => onUpHandler(index)}
                  >
                    <img src={up}></img>
                  </button>
                  <p className={classes.of}>
                    {index + 1} of {state.list.length}
                  </p>
                </div>

                <br />
              </form>
            </div>
          );
        }
      )}
    </>
  );
};

export default ListOfQA;
