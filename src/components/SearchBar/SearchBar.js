import { useState } from "react";
import {
  Header,
  Form,
  Button,
  SearchFormButtonLabel,
  SearchFormInput,
} from "./SearchBar.styles";
// import PropTypes from 'prop-types';

export default function SearchBar({ onSubmit }) {
  const [name, setName] = useState("");

  const handleNameChange = (e) => {
    setName(e.currentTarget.value.toLowerCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() === "") {
      alert("Enter valid name,please!");
      return;
    }
    onSubmit(name);
    setName("");
  };

  return (
    <Header>
      <Form onSubmit={handleSubmit}>
        <Button type="submit">
          <SearchFormButtonLabel></SearchFormButtonLabel>
        </Button>

        <SearchFormInput
          onChange={handleNameChange}
          type="text"
          value={name}
          placeholder="Search Movies"
        />
      </Form>
    </Header>
  );
}

// SearchBar.propTypes = {
//   onSubmit: PropTypes.func.isRequired,
// };
