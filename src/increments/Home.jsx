import { useDispatch } from "react-redux"
import { decNumber, incNumber } from "../redux/action/actions"
import "./home.css"

const Home = ({currentValue}) => {
    const dispatch = useDispatch()
    return (
        <div className="container">
            <h1 className="grey-text">Increament and Derement</h1>
            <button onClick={() => dispatch(decNumber())}>-</button> 
            <span className="value">{currentValue}</span>
            <button onClick={() => dispatch(incNumber())}>+</button>
        </div>
    )
}

export default Home
