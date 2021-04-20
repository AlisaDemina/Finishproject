import React from "react";

export class Registration extends React.Component{

    constructor() {
        super();
        this.handleInputChange = this.handleInputChange.bind(this);
        this.sendForm = this.sendForm.bind(this);
        this.state={
            name:"",
            email:"",
            pass:"",
            info: ""
        }
    }
    sendForm(event) {
        event.preventDefault();
        const formData = new FormData();
        formData.append("name", this.state.name);
        formData.append("email", this.state.email);
        formData.append("pass", this.state.pass);
        fetch("http://u915186o.beget.tech/php/handlerReg.php", {
            method: "POST",
            body: formData
        }).then(response=>response.json())
            .then(result=>{
                console.log(result)
            })
    }
    handleInputChange(event){
        const value = event.target.value;
        const name = event.target.name;
        if (name === "email"){
            const formData = new FormData();
            formData.append("email", value)
            fetch("http://u915186o.beget.tech/php/checkEmail.php", {
                method: "POST",
                body: formData
            }).then(response=>response.json())
                .then(result=>{
                  if(result.result === "exist"){
                      this.setState({
                          info: "Такой email уже есть!"
                      })
                  }else{
                      this.setState({
                          info: ""
                      })
                  }
                });
        }
        this.setState({
            [name]:value
        })
    }

    render() {
        return (

            <section className="cabinet_section">
                <div id="container_demo">

                    <div id="wrapper">
                        <div id="subscribe" className="animate form">
                            <div className="col-sm-5 mx-auto">
                                <form onSubmit={this.sendForm}>
                                    <h3> Регистрация </h3>

                                    <div className="mb-3">
                                        <input value={this.state.name} onChange={this.handleInputChange} name="name" type="text" className="form-control"
                                               placeholder="login"/>
                                    </div>

                                    <div className="mb-3">
                                        <input value={this.state.email} onChange={this.handleInputChange} name="email" type="text" className="form-control"
                                               placeholder="email"/>
                                               <p style={{color:"black"}}>{this.state.info}</p>

                                    </div>

                                    <div className="mb-3">
                                        <input value={this.state.pass} onChange={this.handleInputChange} name="pass" type="password" className="form-control"
                                               placeholder="pass"/>
                                    </div>

                                    <div className="mb-3 text-center">
                                        <input type="submit" value="Отправить" className="btn btn-primary"/>
                                    </div>


                                    <p className="change_link">
                                        <h4>Уже зарегистрированны ?</h4>
                                        <a href="/authorization" className="to_subscribe"> Пройдите авторизацию </a>
                                    </p>
                                </form>
                            </div>
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