import React, { Component } from "react";
export default class Content extends Component {
  state = { title: "", input: "", imagearray: [] };
  changeurl = e => {
    this.setState({ input: e.target.value });
  };
  changetitle = e => {
    this.setState({ title: e.target.value });
  };
  addnew = () => {
    this.setState({
      imagearray: [
        ...this.state.imagearray,
        { title: this.state.title, image: this.state.input }
      ]
    });
  };

  render() {
    return (
      <div>
        <div>
          <input
            className="input1"
            style={{ margin: "auto" }}
            type="text"
            value={this.state.input}
            onChange={this.changeurl}
          />
        </div>
        <div>
          <input
            className="input2"
            type="text"
            value={this.state.title}
            onChange={this.changetitle}
          />
          <button
            disabled={this.state.input === ""}
            className="button"
            onClick={this.addnew}
          >
            New Post
          </button>
        </div>

        {this.state.imagearray.map(element => {
          return (
            <div className="background">
              <h3>{element.title}</h3>
              <img
                className="img"
                src={`${element.image}`}
                alt={element.title}
              />
            </div>
          );
        })}
      </div>
    );
  }
}
