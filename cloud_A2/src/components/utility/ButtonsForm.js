import React from 'react';
import { Auth } from 'aws-amplify';

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
        this.showLetters = this.showLetters.bind(this);
        this.showBattleLife = this.showBattleLife.bind(this);
        this.showTitan = this.showTitan.bind(this);
    }

    showAlice() {
        let textfile = "https://assignmentbooks.s3.amazonaws.com/books/alice30.txt"
        this.setState({ textfile });
    };

    showTitan() {
        let textfile = "https://assignmentbooks.s3.amazonaws.com/books/thetitantheo00dreiuoft_djvu.txt"
        this.setState({ textfile });
    }

    showLetters() {
        let textfile = "https://assignmentbooks.s3.amazonaws.com/books/lettersofjohnkea00keatiala_djvu.txt"
        this.setState({ textfile });
    }

    showBattleLife() {
        let textfile = "https://assignmentbooks.s3.amazonaws.com/books/battlelife00dickgoog_djvu.txt"
        this.setState({ textfile });
    }

    render() {
        return (
            < React.Fragment >
                <div>
                    <button
                        type="button"
                        className="book-btn"
                        value={this.state.Alice}
                        onClick={this.showAlice}>Alice</button>
                </div>
                < div >
                    <input
                        type="button"
                        className="book-btn"
                        name="Letters"
                        value={this.state.Letters}
                        onClick={this.showLetters} />
                </div>
                <div>
                    <input
                        type="button"
                        name="Titan"
                        className="book-btn"
                        value={this.state.Titan}
                        onClick={this.showTitan}
                    />
                </div>
                <div>
                    <input
                        type="button"
                        className="book-btn"
                        name="BattleLife"
                        value={this.state.BattleLife}
                        onClick={this.showBattleLife}
                    />
                </div>
                <iframe src={this.state.textfile} />
            </React.Fragment >
        );

    }

}


