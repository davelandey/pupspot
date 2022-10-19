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
    const [modalBody, setModalBody] = useState({})
    const handleClick = props.handleClick
    const setIsShown = props.setIsShown
    const isShown = props.isShown
    const petData =props.petData
    const modal = props.modal
    const setModal = props.setModal
  
    const toggle = () => setModal(!modal);

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
      setModalBody (<PetProfileAdd/>)
};
  

    return ( 
    <>
      <Modal isOpen={isShown} toggle={toggle}>
        <ModalHeader toggle={toggle}>Pet Profile</ModalHeader>
        <ModalBody>
        <PetProfileCard petData={petData}/>
          <br />
          <Modal
            isOpen={nestedModal}
            toggle={toggleNested}
            onClosed={closeAll ? toggle : undefined}
          >
            <ModalHeader>{title}</ModalHeader>
            <ModalBody>{modalBody}</ModalBody>
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