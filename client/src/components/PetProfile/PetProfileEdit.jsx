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

const PetProfileEdit = (props) => {
  // PET NAME:
  const [editPetName, setEditPetName] = useState(props.petToUpdate.petName);
  // PET AGE:
  const [editAge, setEditAge] = useState(props.petToUpdate.petAge);
  //BREED
  const [editBreed, setEditBreed] = useState(props.petToUpdate.breed);
  //BIO
  const [editBio, setEditBio] = useState(props.petToUpdate.bio);
  //DOGPIC
  const [editPetPic, setEditPetPic] = useState(props.petToUpdate.petPic);

  const updateCurrent = (event) => {
    event.preventDefault();
  };

  return (
    <Modal isOpen={true}>
      <ModalHeader>Edit Your Pet Profile!</ModalHeader>
      <ModalBody>
        <Form onSubmit={updateCurrent}>
          {/* NAME */}
          <FormGroup>
            <Label htmlFor="pet-name">Edit Pet Name:</Label>
            <Input
              name="pet-name"
              value={editPetName}
              onChange={(e) => setEditPetName(e.target.value)}
            />
          </FormGroup>
          {/* AGE */}
          <FormGroup>
            <Label htmlFor="pet-age">Edit Pet Age:</Label>
            <Input
              name="pet-age"
              value={editAge}
              onChange={(e) => setEditAge(e.target.value)}
            />
          </FormGroup>
          {/* BREED */}
          <FormGroup>
            <Label htmlFor="breed">Edit Breed:</Label>
            <Input
              type="select"
              name="breed"
              value={editBreed}
              onChange={(e) => setEditBreed(e.target.value)}
            />{" "}
          </FormGroup>

          {/* BIO */}
          <FormGroup>
            <Label htmlFor="pet-bio">Edit Pet Bio:</Label>
            <Input
              name="pet-bio"
              value={editBio}
              onChange={(e) => setEditBio(e.target.value)}
            />
          </FormGroup>

          {/* DOGPIC */}
          <FormGroup>
            <Label htmlFor="pet-pic">Edit Pet Picture:</Label>
            <Input
              name="pet-pic"
              value={editPetPic}
              onChange={(e) => setEditPetPic(e.target.value)}
            />
          </FormGroup>

          {/* BUTTON */}

          <Button type="submit">Update!</Button>
        </Form>
      </ModalBody>
    </Modal>
  );
};

export default PetProfileEdit;
