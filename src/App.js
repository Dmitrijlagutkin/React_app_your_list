import List from "./components/list/List"
import Header from "./components/common/header/Header"
import "./main-styles.css"

function App() {
    return (
        <div className='container'>
            <Header titleText='Create Your List' />
            <List />
        </div>
    )
}

export default App
