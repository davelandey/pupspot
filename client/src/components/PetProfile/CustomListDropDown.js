import React from "react";

export const CustomDropdown = (props) => (
  <div className="form-group">
    <strong>{props.name}</strong>
    <select
      className="form-control"
      name="{props.name}"
      onChange={props.onChange}
    >
      <option defaultValue>Select {props.name}</option>
      {props.options.map((item, index) => (
        <option key={index} value={item.id}>
          {item.name}
        </option>
      ))}
    </select>
  </div>
);
export default class CustomListDropDown extends React.Component {
  constructor() {
    super();
    this.state = {
      collection: [],
      value: "",
    };
  }
  componentDidMount() {
    fetch(
      "https://api.TheDogAPI.com/v1/breeds?api_key=live_RZmF056KBA4r7jjZKi6SyYh5ebo4fpTPTNxHnVrMo553C2g0xlPXVXL3885FiVpf"
    )
      .then((response) => response.json())
      .then((res) => this.setState({ collection: res }));
  }
  onChange = (event) => {
    this.setState({ value: event.target.value });
  };
  render() {
    return (
      <div className="container mt-4">
        <p>Breed:</p>
        <CustomDropdown
          name={this.state.username}
          options={this.state.collection}
          onChange={this.onChange}
        />
      </div>
    );
  }
}
