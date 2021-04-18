import React from "react";

export class ContactUs extends React.Component{
    render() {
        return (
            <section className="contact_section ">

                <div className="container">

                    <div className="row">
                        <div className="col-md-6">
                            <div className="d-flex justify-content-center d-md-block">
                                <h2>
                                    Контакты
                                </h2>
                            </div>
                            <form action="">
                                <div className="contact_form-container">
                                    <div>
                                        <div>
                                            <input type="text" placeholder="Имя"/>
                                        </div>
                                        <div>
                                            <input type="email" placeholder="Email"/>
                                        </div>
                                        <div>
                                            <input type="text" placeholder="Телефон"/>
                                        </div>
                                        <div className="mt-5">
                                            <input type="text" placeholder="Сообщение"/>
                                        </div>
                                        <div className="mt-5">
                                            <button type="submit">
                                                Отправить
                                            </button>
                                        </div>
                                    </div>

                                </div>

                            </form>
                        </div>
                        <div className="col-md-6">
                            <div className="contact_img-box">
                                <img src="images/students.jpg" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}