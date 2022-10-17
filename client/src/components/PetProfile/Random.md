from petprofileindex

    // <Container>
    // 
      {/* <Row>
        <Col md="9">
          <PetProfileCard
            token={token}
            petData={petData}
            editUpdatePet={editUpdatePet}
            updateOn={updateOn}
            updateOff={updateOff}
          />
        </Col>
        {updateActive ? (
          <PetProfileAdd
            token={token}
            petToUpdate={petToUpdate}
            updateOff={updateOff}
            updateOn={updateOn}
            fetchPets={fetchPets}
          />
        ) : null}
      </Row> */}
      {/* <Row>
        <Col>
          <Button>
            <PetProfileEdit
              token={token}
              petToUpdate={petToUpdate}
              updateOff={updateOff}
              updateOn={updateOn}
              fetchPets={fetchPets}
            />
            Add a pet!
          </Button>
        </Col>
      </Row> */}
    // </Container>

    
// from petprofileedit
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
  ModalFooter,
} from "reactstrap";

const PetProfileEdit = (props) => {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  // petData = props.pet
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
    <div>
    <Modal
      id="PetProfileEditContainer"
      xl="6"
      centered="true"
      fade="false"
      size="lg"
      isOpen={true}
      toggle={toggle}
    >
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
              placeholder="DOG API HERE"
              value={editBreed}
              onChange={(e) => setEditBreed(e.target.value)}
            />
            {"Please select a breed"}
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

          <Button type="submit" onClick={toggle}>Update!</Button>
        </Form>
      </ModalBody>
      <ModalFooter>
        <Button color="danger" onClick={toggle}>
          Close
        </Button>
      </ModalFooter>
    </Modal>
    </div>
  );
};

export default PetProfileEdit;


