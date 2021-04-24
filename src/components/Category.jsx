import React from "react";

function Tr(props){
    return <tr>
        <th scope="row">{props.index}</th>
        <td>{props.class}</td>
        <td>{props.wordru}</td>
        <td>{props.worden}</td>
    </tr>
}
export class Category extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: []
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append("class", this.state.handleSubmit);
        fetch("http://u915186o.beget.tech/php/getWord.php", {
            credentials: 'include',
            method: "POST",
            body: formData
        })
            .then(response => response.json())
            .then(result => {
                    console.log(result);
                    let rows = [];
                    for (let i = 0; i < result.length; i++) {
                        rows.push(<Tr
                            ikey={i}
                            index={i + 1}
                            class={result[i].class}
                            wordru={result[i].wordru}
                            worden={result[i].worden}
                        />)
                    }
                    this.setState({
                        categories: rows
                    })
            })
        }

        render()
        {
            return (
                <form onSubmit={this.handleSubmit}>
                <section className="contact_section ">
                    <div className="container rounded mt-1">
                        <div className="row">
                            <div className="col-md-6">

                                    <div className="coffee-btn-group my-3">
                                        <div className="coffee-btn rounded-circle"
                                             onClick="getCoffee('Латте',42);"></div>
                                        <span>Погода и времена года</span>
                                    </div>
                                    <div className="coffee-btn-group my-3">
                                        <div className="coffee-btn rounded-circle"
                                             onClick="getCoffee('Американо',47);"></div>
                                        <span>Семья. Друзья</span>
                                    </div>
                                    <div className="coffee-btn-group my-3">
                                        <div className="coffee-btn rounded-circle"
                                             onClick="getCoffee('Эспрессо',61);"></div>
                                        <span>Внешность</span>
                                    </div>
                                    <div className="coffee-btn-group my-3">
                                        <div className="coffee-btn rounded-circle"
                                             onClick="getCoffee('Капучино',58);"></div>
                                        <span>Хобби и свободное время</span>
                                    </div>
                                    <div className="coffee-btn-group my-3">
                                        <div className="coffee-btn rounded-circle"
                                             onClick="getCoffee('Лунго',44);"></div>
                                        <span>Спорт</span>
                                    </div>
                                    <div className="coffee-btn-group my-3">
                                        <div className="coffee-btn rounded-circle"
                                             onClick="getCoffee('Лунго',44);"></div>
                                        <span>Одежда</span>
                                    </div>
                                    <div className="coffee-btn-group my-3">
                                        <div className="coffee-btn rounded-circle"
                                             onClick="getCoffee('Лунго',44);"></div>
                                        <span>Еда</span>
                                    </div>
                                    <div className="coffee-btn-group my-3">
                                        <div className="coffee-btn rounded-circle"
                                             onClick="getCoffee('Лунго',44);"></div>
                                        <span>Природа</span>
                                    </div>
                                    <div className="coffee-btn-group my-3">
                                        <div className="coffee-btn rounded-circle"
                                             onClick="getCoffee('Лунго',44);"></div>
                                        <span>Профессии</span>
                                    </div>
                                    <div className="coffee-btn-group my-3">
                                        <div className="coffee-btn rounded-circle"
                                             onClick="getCoffee('Лунго',44);"></div>
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

                    <hr/>
                    <table className="table">

                        <thead className="table">
                        <tr>
                            <th scope="col">№</th>
                            <th scope="col">Категория</th>
                            <th scope="col">Слово из категории</th>
                            <th scope="col">Перевод</th>
                        </tr>
                        </thead>
                        <tbody>
                        {this.state.categories}
                        </tbody>
                    </table>
                </section>
                </form>
            )
        }

}