
import Counter from "./Counter";
import useCountdown from "../hooks/useCountdown";
import Title from "./Title";



const CounterContainer = ({titulo, data, color, setForm}) => {

    const [day, hour, minute, second] = useCountdown(`${data}, 00:00:00`)

    function CancelarContagem(e) {
      setForm('')
  }

    return(
        <div className="Container">
          <button onClick={CancelarContagem} style={{width: 30, float: "right"}}>X</button>
          <Title title={titulo}/> 
          <div className="countdown-container">
            <Counter title="Dias" number={day} color={color}/>
            <Counter title="Horas" number={hour} color={color}/> 
            <Counter title="Minutos" number={minute} color={color}/>
            <Counter title="Segundos"  number={second} color={color}/>
          </div>
        </div>
      );
    
}

export default CounterContainer;