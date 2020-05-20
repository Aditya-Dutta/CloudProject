import React from 'react';

export default class ButtonsForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            Alice: "Alice",
            Letters: "Letters",
            Titan: "Titan",
            BattleLife: "BattleLife",
            textfile: " "
        };

        this.showAlice = this.showAlice.bind(this);
    }


    showAlice() {
        let textfile = "https://assignmentbooks.s3.amazonaws.com/books/alice30.txt"
        this.setState({ textfile });
    };

    render() {
        return (
            <React.Fragment>
                <div>
                    <button
                        type="button"
                        value={this.state.Alice}
                        onClick={this.showAlice}>Alice</button>
                </div>
                < div >
                    <input
                        type="button"
                        name="Letters"
                        value={this.state.Letters} />
                </div>
                <div>
                    <input
                        type="button"
                        name="Titan"
                        value={this.state.Titan}
                    />
                </div>
                <div>
                    <input
                        type="button"
                        name="BattleLife"
                        value={this.state.BattleLife}
                    />
                </div>
                <iframe src={this.state.textfile} />
            </React.Fragment >
        );
    }
}

