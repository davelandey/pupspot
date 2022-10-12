import React, { useState } from "react";
import {
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
} from "reactstrap";

const MovieEdit = (props) => {
  const [editMovieTitle, setEditMovieTitle] = useState(
    props.movieToUpdate.movieTitle
  );
  const [editYear, setEditYear] = useState(props.movieToUpdate.movieYear);
  const [editRating, setEditRating] = useState(props.movieToUpdate.rating);

  const updateCurrent = (event) => {
    event.preventDefault();

    // TODO Update fetch
    // TODO after update fetch the movies again and run the updateOff()
    // props.fetchMovies()
    // props.updateOff()
  };

  return (
    <Modal isOpen={true}>
      <ModalHeader>Log a Movie</ModalHeader>
      <ModalBody>
        <Form onSubmit={updateCurrent}>
          <FormGroup>
            <Label htmlFor="result">Edit Movie Title:</Label>
            <Input
              name="result"
              value={editMovieTitle}
              onChange={(e) => setEditMovieTitle(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="description">Edit Movie Year:</Label>
            <Input
              name="description"
              value={editYear}
              onChange={(e) => setEditYear(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="definition">Edit Definition:</Label>
            <Input
              type="select"
              name="definition"
              value={editRating}
              onChange={(e) => setEditRating(e.target.value)}
            >
              <option></option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </Input>
          </FormGroup>
          <Button type="submit">Update the movie!</Button>
        </Form>
      </ModalBody>
    </Modal>
  );
};

export default MovieEdit;
