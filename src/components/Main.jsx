import React from "react";
export class Main extends React.Component{
    render() {
        return (
            <div className="top_container">
                <header className="header_section">
                    <div className="container">
                    </div>
                </header>
                <section className="hero_section ">
                    <div className="hero-container container">
                        <div className="hero_detail-box">
                            <h1>
                               Начните изучать английский язык вместе с нами
                            </h1>
                            <p>
                                поможем определить, структурировать
                            <br/>
                                и пополнить ваш словарный запас
                            </p>

                            <div className="hero_btn-continer">
                                <a href="/about" className="call_to-btn btn_white-border">
                                    Больше информации
                                </a>
                            </div>

                        </div>
                        <div className="hero_img-container">
                            <div>
                                <img src="images/hero.png" alt="" className="img-fluid"/>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}