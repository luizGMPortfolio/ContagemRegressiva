import './Counter.css'

const Counter = ({title, number, color}) => {
    return(
        <div className="counter">
            <p className="counter-number" style={{background: color}}>{number}</p>
            <h3 className="counter-text">{title}</h3>
        </div>
    )
}

export default Counter;