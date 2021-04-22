import React from "react";
function Tr(props) {
    return <tr>
                <th scope="row">{props.index}</th>
                <td>{props.class}</td>
                <td>{props.wordru}</td>
                <td>{props.worden}</td>
                <td>{props.img}</td>
           </tr>
}



export class Study extends React.Component{
    constructor() {
        super();
        this.state = {
            word: []
        }
    }
    componentDidMount() {
        fetch("http://u915186o.beget.tech/php/getWord.php")
            .then(response => response.json())
            .then(result => {
                console.log(result);
                let rows = [];
                for (let i=0; i< result.length; i++) {
                    rows.push(<Tr index={i+1} class={result[i].class} wordru={result[i].wordru} worden={result[i].worden} worden={result[i].img} />)
                }
                this.setState({
                    word: rows
                })

            })
    }

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
                    <hr/>
                    <table className="table">

                        <thead className="table">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Категория</th>
                            <th scope="col">Слово из категории</th>
                            <th scope="col">Перевод</th>
                            <th scope="col">Картинка</th>
                        </tr>
                        </thead>
                        <tbody>
                            {this.state.word}
                        </tbody>
                    </table>

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
                    <hr/>
                </div>
            </section>
       )
    }
}