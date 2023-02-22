import { useDispatch } from "react-redux"
import ContainerQA from "../../components/Container"
import TopBar from "../../components/TopBar"
import { setTitle } from "../../redux/questionSlice"

export const MainPage = () =>{
    const dispatch = useDispatch();
    const onChangeTitle = (title:string)=>{
        dispatch(setTitle(title));
    }
    return(
        <>
        <div style={{backgroundColor:'#F3F3EF'}}>
        <TopBar onChangeTitle={onChangeTitle}/>
        <ContainerQA/></div>
        </>
    )
}

export default MainPage;