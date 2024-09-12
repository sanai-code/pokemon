import { ProviderComp } from "./components/Context";
import { Home } from "./components/Home";






let App = () => {
    return (
        <>
       
            <ProviderComp>
                <Home/>
            </ProviderComp>
        </>
    )
}





export default App;