import React, { Component } from 'react'
import './Product.css';

export default class Product extends Component {
    render() {
        return (
            <div>
                <div className="mx-auto card-group">
                    <div className="card">
                        <img style={{ width: "50%" }}
                            src={this.props.image}
                            className="mx-auto mt-4"
                            alt={this.props.name} />
                        <div className="card-body">
                            <h5 className="card-title">{this.props.name}</h5>
                            <strong><p className="card-text" style={{color: "#e10c00"}}>{this.props.price} VND</p></strong>
                            <a href="##" className="btn btn-outline-success my-2 my-sm-2">Buy</a>
                        </div>
                    </div>
                </div>

                {/* <div className="card-group">
                    <div className="card">
                        <img src={this.props.image} className="card-img-top" alt={this.props.name} />
                        <div className="card-body">
                            <h5 className="card-title">{this.props.name}</h5>
                            <p className="card-text">{this.props.price}</p>
                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                    <div className="card">
                        <img src={this.props.image} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{this.props.name}</h5>
                            <p className="card-text">{this.props.price}</p>
                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                    <div className="card">
                        <img src={this.props.image} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{this.props.name}</h5>
                            <p className="card-text">{this.props.price}</p>
                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                    <div className="card">
                        <img src={this.props.image} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{this.props.name}</h5>
                            <p className="card-text">{this.props.price}</p>
                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                    <div className="card">
                        <img src={this.props.image} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{this.props.name}</h5>
                            <p className="card-text">{this.props.price}</p>
                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                </div> */}


                {/* <div className="card-group">
                    <div className="card">
                        <img src={this.props.image} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{this.props.name}</h5>
                            <p className="card-text">{this.props.price}</p>
                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                </div> */}

                {/* <div className="col mb-4">
                        <div className="card">
                            <img src="https://cdn.tgdd.vn/Products/Images/42/153856/iphone-11-red-600x600.jpg" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">iPhone 11 64GB</h5>
                                <p className="card-text">21.000.000</p>
                                <a href="##" className="btn btn-outline-success my-2 my-sm-0">Buy</a>
                            </div>
                        </div>
                    </div> */}
                {/* <div className="col mb-4">
                        <div className="card">
                            <img src="..." className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col mb-4">
                        <div className="card">
                            <img src="..." className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                        </div>
                    </div> */}

            </div>
        )
    }
}
