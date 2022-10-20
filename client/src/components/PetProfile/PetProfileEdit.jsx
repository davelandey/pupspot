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
//  deletePet = props.deletePet
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  // petData = props.pet
  // PET NAME:
  const [editPetName, setEditPetName] = useState(props.petToUpdate?.petName);
  // PET AGE:
  const [editAge, setEditAge] = useState(props.petToUpdate?.petAge);
  //BREED
  const [editBreed, setEditBreed] = useState(props.petToUpdate?.breed);
  //BIO
  const [editBio, setEditBio] = useState(props.petToUpdate?.bio);
  //DOGPIC
  const [editPetPic, setEditPetPic] = useState(props.petToUpdate?.petPic);

  const updateCurrent = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <h2>Hello from edit</h2>
      {/* <Modal isOpen={modal} fade={false} toggle={toggle}>
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
            Do Something
          </Button>{' '}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
          <Button
              color="warning"
              onClick={() => {
                // deletePet(pet);
              }}
            >
              Delete
            </Button>
        </ModalFooter>
      </Modal> */}
    </div>
  );
}

export default PetProfileEdit;
