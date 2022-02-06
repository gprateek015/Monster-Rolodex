import React from "react";
import axios from "axios";
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: "",
    };
  }
  
  async componentDidMount() {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users");
    this.setState({ monsters: res.data });
  }
  
  handleChange = (e) => {
    this.setState({ searchField: e.target.value })
  }

  render() {
    const filteredMonsters = this.state.monsters.filter((monster) =>
      monster.name
        .toLowerCase()
        .includes(this.state.searchField.toLocaleLowerCase())
    );

    return (
      <div className="App">
        <h1 className="title">Monsters Rolodex</h1>
        <SearchBox
          placeholder="Search Monster"
          handleChange={ this.handleChange }
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
