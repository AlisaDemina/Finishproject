import React from "react";
import {NavLink} from "react-router-dom";

export class Menu extends React.Component{
    render() {
        return (
            <div className="container">
                        <nav className="navbar navbar-expand-lg custom_nav-container ">
                            <a className="navbar-brand" href="index.html">
                                <span>
                                  Группа 021
                                </span>
                            </a>
                            <button className="navbar-toggler" type="button" data-toggle="collapse"
                                    data-target="#navbarSupportedContent"
                                    aria-controls="navbarSupportedContent" aria-expanded="false"
                                    aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>

                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <div className="d-flex ml-auto flex-column flex-lg-row align-items-center">
                                    <ul className="navbar-nav  ">
                                        <li className="nav-item active">
                                            <NavLink className="nav-link" to="/">Главная<span
                                                className="sr-only">(current)</span></NavLink>
                                        </li>
                                        <li className="nav-item ">
                                            <NavLink className="nav-link" to="/about">Методика</NavLink>
                                        </li>

                                        <li className="nav-item ">
                                            <NavLink className="nav-link" to="/admission">Обучение</NavLink>
                                        </li>

                                        <li className="nav-item">
                                            <NavLink className="nav-link" to="/why">Тестирование</NavLink>
                                        </li>

                                        <li className="nav-item">
                                            <NavLink className="nav-link" to="/contact">Контакты</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className="nav-link" to="/cabinet">Личный кабинет</NavLink>
                                        </li>

                                    </ul>
                                </div>
                            </div>
                        </nav>
            </div>
        )
    }
}