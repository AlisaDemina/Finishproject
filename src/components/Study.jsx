import React from "react";

export class Study extends React.Component{
    render() {
        return (
            <section className="admission_section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="admission_detail-box">
                                <h3>
                                    Обучение
                                </h3>
                                <p>
                                    После выбора темы обучения, вам будет предложено к изучению
                                    слова из этой темы, его перевод, произношение, а также визуальное
                                    изображение изучаемого слова. После знакомства со словом,
                                    нажав кнопку "Слово выучено", вы можете исключить его из дальнейшего обучения,
                                    тем самым увеличив статистику изученных слов.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="admission_img-container">
                                <img src="images/admission.png" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="text-center">
                        <h2 className="section-heading text-uppercase">Начните обучение</h2>
                        <h3 className="section-subheading text-muted"></h3>
                    </div>
                    <form id="contactForm" name="sentMessage" noValidate="novalidate">
                        <div className="row align-items-stretch mb-5">

                            <div className="col-md-12">
                                <div className="form-group">
                                    <input className="form-control" id="name" type="text" placeholder="Выберите тему"
                                           required="required"
                                           data-validation-required-message="Please enter your name."/>
                                    <p className="help-block text-danger"></p>
                                </div>
                            </div>

                            <div className="col-md-12">
                                <div className="form-group">
                                    <input className="form-control" id="name" type="text" placeholder="Вывод английского слова"
                                           required="required"
                                           data-validation-required-message="Please enter your name."/>
                                    <p className="help-block text-danger"></p>
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="form-group form-group-textarea mb-md-0">
                                    <textarea className="form-control" id="message" placeholder="Картинка"
                                              required="required"
                                              data-validation-required-message="Please enter a message."></textarea>
                                    <p className="help-block text-danger"></p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <input className="form-control" id="name" type="text" placeholder="Вывод перевода"
                                           required="required"
                                           data-validation-required-message="Please enter your name."/>
                                    <p className="help-block text-danger"></p>
                                </div>

                                <div className="form-group mb-md-0">
                                    <input className="form-control" id="phone" type="tel" placeholder="Прослушать произношение"
                                           required="required"
                                           data-validation-required-message="Please enter your phone number."/>
                                    <p className="help-block text-danger"></p>
                                </div>
                            </div>

                        </div>

                        <div className="row">
                            <div className="col-md-6">
                                <div className="text-center">
                                    <div id="success"></div>
                                    <button className="btn btn-primary btn-xl text-uppercase" id="sendMessageButton"
                                            type="submit">Слово выучено
                                    </button>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="text-center">
                                    <div id="success"></div>
                                    <button className="btn btn-primary btn-xl text-uppercase" id="sendMessageButton"
                                            type="submit">Слово не выучено
                                    </button>
                                </div>
                            </div>
                        </div>


                    </form>
                </div>
            <hr/>
            </section>
       )
    }
}