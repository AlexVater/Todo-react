import './App.css';
import FormTask from "../components/FormTask";
import {useState} from "react";

function App() {
    const [inputText, setInputText] = useState("")
    const [todos, setTodos] = useState([])
    return (
        <div className="App">
            <FormTask todos={todos}
                      setTodos={setTodos}
                      inputText={inputText}
                      setInputText={setInputText}
            />
        </div>
    );
}

export default App;
