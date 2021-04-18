import React from "react";

export class Cabinet extends React.Component{
    render() {
        return (

        <section className="cabinet_section">
            <div id="container_demo">

                <a className="hiddenanchor" id="tosubscribe"></a>
                <a className="hiddenanchor" id="tologin"></a>

                <div id="wrapper">
                    <div id="login" className="animate form">
                        <form action="mysuperscript.php" autoComplete="on">
                            <h3>Авторизация</h3>
                            <p>
                                <label htmlFor="username" className="uname" data-icon="u"> Email или
                                    логин </label>
                                <input id="username" name="username" required="required" type="text"
                                       placeholder="myusername or mymail@mail.com"/>
                            </p>
                            <p>
                                <label htmlFor="password" className="youpasswd" data-icon="p"> Пароль </label>
                                <input id="password" name="password" required="required" type="password"
                                       placeholder="eg. X8df!90EO"/>
                            </p>

                            <p className="login button">
                                <input type="submit" value="Login"/>
                            </p>

                        </form>
                    </div>

                    <div id="subscribe" className="animate form">
                        <form action="mysuperscript.php" autoComplete="on">
                            <h3> Регистрация </h3>
                            <p>
                                <label htmlFor="usernamesignup" className="uname" data-icon="u">Логин</label>
                                <input id="usernamesignup" name="usernamesignup" required="required" type="text"
                                       placeholder="mysuperusername690"/>
                            </p>
                            <p>
                                <label htmlFor="emailsignup" className="youmail" data-icon="e"> Email</label>
                                <input id="emailsignup" name="emailsignup" required="required" type="text"
                                       placeholder="mysupermail@mail.com"/>
                            </p>
                            <p>
                                <label htmlFor="passwordsignup" className="youpasswd" data-icon="p">Пароль </label>
                                <input id="passwordsignup" name="passwordsignup" required="required" type="password"
                                       placeholder="eg. X8df!90EO"/>
                            </p>

                            <p className="signin button">
                                <input id="signin" type="submit" value="Sign up"/>
                            </p>
                            <p className="change_link">
                                Уже зарегистрированны ?
                                <a href="#tologin" className="to_subscribe"> Пройдите авторизацию </a>
                            </p>
                        </form>
                    </div>
                    <div className="col-md-6">
                        <div className="determine_img-container">
                            <img src="images/determine.png" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        )
    }
}