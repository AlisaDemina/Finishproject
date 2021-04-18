import React from "react";

export class Test extends React.Component{
    render() {
        return (
            <section className="why_section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="why_img-container">
                                <img src="images/why.png" alt=""/>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="why_detail-box">
                                <h3>
                                    Тестирование
                                </h3>
                                <p>
                                    После начала тестирования вам будет предложено слово
                                    и четыре варианта его перевода, один из которых является верным.
                                    Ответ на тест вы получите после выбора варианта и нажатии кнопки "Отправить".
                                </p>
                                <div className="">
                                    <a href="" className="call_to-btn btn_white-border">
                                        Больше информации
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="text-center">
                        <h2 className="section-heading text-uppercase">Пройдите тест</h2>
                        <h3 className="section-subheading text-muted"></h3>
                    </div>
                    <form id="contactForm" name="sentMessage" noValidate="novalidate">
                        <div className="row align-items-stretch mb-5">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <input className="form-control" id="name" type="text" placeholder="Выберите тему"
                                           required="required"
                                           data-validation-required-message="Please enter your name."/>
                                    <p className="help-block text-danger"></p>
                                </div>
                                <div className="form-group">
                                    <input className="form-control" id="email" type="email" placeholder="Вариант перевода слова"
                                           required="required"
                                           data-validation-required-message="Please enter your email address."/>
                                    <p className="help-block text-danger"></p>
                                </div>
                                <div className="form-group mb-md-0">
                                    <input className="form-control" id="phone" type="tel" placeholder="Вариант перевода слова"
                                           required="required"
                                           data-validation-required-message="Please enter your phone number."/>
                                    <p className="help-block text-danger"></p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <input className="form-control" id="name" type="text" placeholder="Вывод английского слова"
                                           required="required"
                                           data-validation-required-message="Please enter your name."/>
                                    <p className="help-block text-danger"></p>
                                </div>
                                <div className="form-group">
                                    <input className="form-control" id="email" type="email" placeholder="Вариант перевода слова"
                                           required="required"
                                           data-validation-required-message="Please enter your email address."/>
                                    <p className="help-block text-danger"></p>
                                </div>
                                <div className="form-group mb-md-0">
                                    <input className="form-control" id="phone" type="tel" placeholder="Вариант перевода слова"
                                           required="required"
                                           data-validation-required-message="Please enter your phone number."/>
                                    <p className="help-block text-danger"></p>
                                </div>
                            </div>
                        </div>
                        <div className="text-center">
                            <div id="success"></div>
                            <button className="btn btn-primary btn-xl text-uppercase" id="sendMessageButton"
                                    type="submit">Отправить
                            </button>
                        </div>
                    </form>
                </div>
                <hr/>
            </section>
        )
    }
}