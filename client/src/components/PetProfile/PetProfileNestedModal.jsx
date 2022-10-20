import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import PetProfileAdd from './PetProfileAdd';
import PetProfileCard from './PetProfileCard';
import PetProfileEdit from './PetProfileEdit';
import PetProfileModal from './PetProfileModal';


const EDIT_TITLE= "Edit a Pet"
const PetProfileNestedModal = (props) => {

    // const [modal, setModal] = useState(false);
    const [nestedModal, setNestedModal] = useState(false);
    const [closeAll, setCloseAll] = useState(false);
    const [title, setTitle] = useState("")
    const [modalBody, setModalBody] = useState()
    const [petEdit, setPetEdit] = useState(<PetProfileEdit/>)
    const handleClick = props.handleClick
    const setIsShown = props.setIsShown
    const isShown = props.isShown
    const petData =props.petData
    const modal = props.modal
    const setModal = props.setModal
    const [petName, setPetName] = useState("");
    const [sex, setSex] = useState("");
  
    const toggle = () => setModal(!isShown);
    const AddPetPresets= { sex, setSex, petName, setPetName}
    const toggleNested = () => {
      setNestedModal(!nestedModal);
      setCloseAll(false);
    };

    const toggleAll = () => {
      setNestedModal(!nestedModal);
      setCloseAll(true);
    };
    
     const EditPet = () => {
      toggleNested();
      setTitle("Edit a pet!");
      setModalBody(<PetProfileEdit/>)
    };

    const AddPet = () =>{
      toggleNested();
      setTitle("Add a pet");
      setModalBody (<PetProfileAdd />)
};


    return ( 
    <>
    {/* CHANGED MODEL OPEN TO FALSE */}
      <Modal size="xl" isOpen={isShown} toggle={toggle}>
        <ModalHeader toggle={toggle}>Pet Profile</ModalHeader>
        <ModalBody>
        <PetProfileCard petData={petData}/>
          <br />
          <Modal
          size="xl"
            isOpen={nestedModal}
            toggle={toggleNested}
            onClosed={closeAll ? toggle : undefined}
            fade="false"
          >
            <ModalHeader>{title}</ModalHeader>
            <ModalBody>
              <h2>Adding Pet Now</h2>
              {modalBody}</ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={toggleNested}>
                Done
              </Button>{' '}
              <Button color="secondary" onClick={toggleAll}>
                All Done
              </Button>
            </ModalFooter>
          </Modal>
        </ModalBody>
        <ModalFooter>
        <Button color="success" onClick={AddPet}>
            Add a pet
          </Button>
          <Button color="primary" onClick={EditPet}>
            Edit a pet
          </Button>{' '}
          <Button color="secondary" onClick={handleClick}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
      </>
  )
};
export default PetProfileNestedModal;