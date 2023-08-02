import React, { Component } from "react";
import Beer from "./Beer";

export default class Beers extends Component {
  constructor() {
    super();

    this.state = {
      beers: [],
      showDescriptions: {},
    };
  }

  componentDidMount() {
    fetch("https://api.punkapi.com/v2/beers")
      .then((res) => res.json())
      .then((data) => {
        const initialDescriptions = data.reduce(
          (acc, beer) => ({ ...acc, [beer.id]: false }),
          {}
        );
        this.setState({
          beers: data,
          showDescriptions: initialDescriptions,
        });
      });
  }

  render() {
    return (
      <ul className="beers">
        {this.state.beers.map((beer) => (
          <Beer
            key={beer.id}
            name={beer.name}
            image={beer.image_url}
            tagline={beer.tagline}
            description={beer.description}
          />
        ))}
      </ul>
    );
  }
}

//break things out in separate files
