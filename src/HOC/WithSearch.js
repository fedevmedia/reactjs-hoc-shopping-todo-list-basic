import React from "react";

const WithSearch = WrappedComponent => {
  return class extends React.Component {
    state = {
      searchTerm: ""
    };
    onHandleChange = event => {
      this.setState({ searchTerm: event.target.value });
    };

    render() {
      return (
        <div>
          <div className="search">
            <input
              type="text"
              placeholder={this.props.placeholder}
              value={this.state.searchTerm}
              onChange={this.onHandleChange}
            />
          </div>
          <WrappedComponent searchTerm={this.state.searchTerm} />
        </div>
      );
    }
  };
};

export default WithSearch;
