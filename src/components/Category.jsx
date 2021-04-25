import React from "react";

export class Category extends React.Component{
    render() {
        return (
            <section className="contact_section ">
                <div className="container rounded mt-1">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="coffee-btn-group my-3">
                                <div className="coffee-btn rounded-circle" onClick="getCoffee('Латте',42);"></div>
                                <span>Погода и времена года</span>
                            </div>
                            <div className="coffee-btn-group my-3">
                                <div className="coffee-btn rounded-circle" onClick="getCoffee('Американо',47);"></div>
                                <span>Семья. Друзья</span>
                            </div>
                            <div className="coffee-btn-group my-3">
                                <div className="coffee-btn rounded-circle" onClick="getCoffee('Эспрессо',61);"></div>
                                <span>Внешность</span>
                            </div>
                            <div className="coffee-btn-group my-3">
                                <div className="coffee-btn rounded-circle" onClick="getCoffee('Капучино',58);"></div>
                                <span>Хобби и свободное время</span>
                            </div>
                            <div className="coffee-btn-group my-3">
                                <div className="coffee-btn rounded-circle" onClick="getCoffee('Лунго',44);"></div>
                                <span>Спорт</span>
                            </div>
                            <div className="coffee-btn-group my-3">
                                <div className="coffee-btn rounded-circle" onClick="getCoffee('Лунго',44);"></div>
                                <span>Одежда</span>
                            </div>
                            <div className="coffee-btn-group my-3">
                                <div className="coffee-btn rounded-circle" onClick="getCoffee('Лунго',44);"></div>
                                <span>Еда</span>
                            </div>
                            <div className="coffee-btn-group my-3">
                                <div className="coffee-btn rounded-circle" onClick="getCoffee('Лунго',44);"></div>
                                <span>Природа</span>
                            </div>
                            <div className="coffee-btn-group my-3">
                                <div className="coffee-btn rounded-circle" onClick="getCoffee('Лунго',44);"></div>
                                <span>Профессии</span>
                            </div>
                            <div className="coffee-btn-group my-3">
                                <div className="coffee-btn rounded-circle" onClick="getCoffee('Лунго',44);"></div>
                                <span>Фрукты</span>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="about_img-container">
                                <img src="images/why.png" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        )
    }
}


