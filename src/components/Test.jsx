import React from "react";
function Btn(props){
    return <div className="container">
                <div className="row align-items-stretch mb-5">
                    <div className="col-md-6">
                        <button type="button" className="btn btn-primary btn-lg" className="form-control">{props.wordru}</button>
                    </div>
                </div>
                <div className="row align-items-stretch mb-5">
                    <div className="col-md-6">
                        <button type="button" className="btn btn-primary btn-lg" className="form-control">{props.wordru}</button>
                    </div>
                </div>
    </div>

}

export class Test extends React.Component {
    constructor() {
        super();
        this.state = {
            words: []
        }
    }
        componentDidMount() {
            fetch("http://u915186o.beget.tech/php/getWords.php")
                .then(response => response.json())
                .then(result => {
                    console.log(result);
                    let rowsru = [];
                    for (let i=0; i< result.length; i++) {
                        rowsru.push(<Btn wordru={result[i].wordru} worden={result[i].worden}/>)
                    }
                    this.setState({
                        words: rowsru
                    })

                })
        }

        render(){
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
                                </div>
                            </div>
                        </div>
                    </div>
                    {this.state.words}
                    <hr/>
                </section>
            )
        }

}