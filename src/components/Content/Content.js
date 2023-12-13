import React, { Component } from 'react';
import styles from './Content.module.css';

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isToggled: false
        };
    }
    toggle = () => {
        this.setState(prevState => ({
            isToggled: !prevState.isToggled
        }));
    }

    render() {
        return (
            <div
                id={'general-info'}
                className={this.state.isToggled ? styles['primary-1'] : ''}
                onClick={this.toggle}>
                <div className="info">
                    <h3>Місце народження: </h3>
                    <p>с. Пʼядики</p>
                </div>
                <div className="info">
                    <h3>Освіта: </h3>
                    <p>Пʼядицький ліцей №2</p>
                </div>
                <div className="info lists">
                    <h3>Хоббі:</h3>
                    <ul>
                        <li>Гра на гітарі</li>
                        <li>Прослуховування музики</li>
                        <li>Прогулянки</li>
                    </ul>
                </div>
                <div className="info lists">
                    <h3>Хоббі:</h3>
                    <ol>
                        <li>Вовк з Уол Стріт</li>
                        <li>Втеча з Шоушенка</li>
                        <li>Початок (2010)</li>
                        <li>Kurt Cobain: Montage of Heck</li>
                    </ol>
                </div>
            </div>
        );
    }
}

export default Content;
