import './App.css';
import WrapperContextApi from './components/context-api/Wrapper';
import WrapperContextWithReducer from './components/context-with-reducer/WrapperContextWithReducer';
import Wrapper from './components/context-with-reducer/WrapperContextWithReducer';
import DynamicUseEfect from './components/use-effect/dynamicUseEfect';
import FetchData from './components/use-effect/FetchData';
import BasicUseReducerHook from './components/use-reducer/BasicUseReducerHook';
import WrapperUseTransition from './components/use-transition/WrapperUseTransition';

function App() {
  return (
    <>
      {/* <DynamicUseEfect/>
    <FetchData/> */}
      {/* <WrapperContextApi/> */}
      {/* <BasicUseReducerHook /> */}
      {/* <WrapperContextWithReducer /> */}
      <WrapperUseTransition />
    </>
  );
}
export default App;
