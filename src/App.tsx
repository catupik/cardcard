
import './App.css'
import {FlexWrapper} from "./components/FlexWrapper.tsx";
import pic from './assets/cardpic.jpeg'
import {Card} from "./card/Card.tsx";

function App() {


  return (
    <FlexWrapper direction={"column"} justifyC={"center"} alignI={"center"}>
        <Card
        src={pic}
        headline={"Headline"}
        text={"Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen."}
        ></Card>

    </FlexWrapper>
  )
}

export default App
