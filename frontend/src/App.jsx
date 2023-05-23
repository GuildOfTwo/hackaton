import { useEffect } from "react";
import { Header } from "./layout/Header/Header";
import { Main } from "./layout/Main/Main";
import { useDispatch } from "react-redux";
import { setData } from "./store/dataSlice";
import {data} from './TEMP_DATA/DATA'

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setData(data))
   
  }, []);
  return (
    <>
      <Header />
      <Main />
    </>
  );
}

export default App;
