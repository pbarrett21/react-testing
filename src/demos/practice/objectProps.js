import React from "react";
import './../../App.css';

class Challenger extends React.Component {
    render() {
        return <h1>CHALLENGER: {this.props.fight.challenger}</h1>
    }
}

class Champion extends Challenger {
    render() {
        return <h1>CHAMPION: {this.props.fight.champion}</h1>
    }
}

class Fight extends Champion {
    render() {
        const fightInfo = {challenger: "Bob", champion: "Billy"};

        return <div className="App">
            <h1>Battle of Champions...</h1>
            <Champion fight={fightInfo}/> VS <Challenger fight={fightInfo}/>
            <h4>Who will win... you decide!</h4>
        </div>
    }
}

export default Fight;
