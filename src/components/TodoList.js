import React, { Component } from "react";
import WithSearch from "../HOC/WithSearch";

class TodoList extends Component {
  constructor() {
    super();
    this.state = {
      preloadData: []
    };
  }

  componentDidMount() {
    // Preload data can be from api call
    const preloadData = [
      {
        name: "Buy vegetables",
        id: 1
      },
      {
        name: "Buy Egg",
        id: 2
      },
      {
        name: "Pay electricity bill",
        id: 3
      },
      {
        name: "Pay Rent",
        id: 4
      }
    ];
    this.setState({
      preloadData: [...preloadData]
    });
  }

  // Filter data using search term in input
  filterSearch = searchTerm => item =>
    `${item.name}`.toUpperCase().indexOf(searchTerm.toUpperCase()) >= 0;

  render() {
    var data = this.state.preloadData;
    var searchTerm = this.props.searchTerm;
    var filterData = data.filter(this.filterSearch(searchTerm));
    return (
      <ul>
        {filterData.length > 0 ? (
          filterData.map(item => {
            return <li key={item.id}>{item.name}</li>;
          })
        ) : (
          <div className="norecords">No records</div>
        )}
      </ul>
    );
  }
}

export default WithSearch(TodoList);
