import UserList from "./components/list/UserList"
import Header from "./components/header/Header"
import "./main-styles.css"

function App() {
    return (
        <div className='container'>
            <Header titleText='Create Your List' />
            <UserList />
        </div>
    )
}

export default App
