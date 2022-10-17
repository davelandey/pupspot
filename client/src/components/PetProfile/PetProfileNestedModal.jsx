import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import PetProfileCard from './PetProfileCard';


const PetProfileNestedModal = (props) => {

    const [modal, setModal] = useState(false);
    const [nestedModal, setNestedModal] = useState(false);
    const [closeAll, setCloseAll] = useState(false);
    const handleClick = props.handleClick
    const setIsShown = props.setIsShown
    const isShown = props.isShown

    const petData =props.petData
  
    const toggle = () => setModal(!modal);
    const toggleNested = () => {
      setNestedModal(!nestedModal);
      setCloseAll(false);
    };
    const toggleAll = () => {
      setNestedModal(!nestedModal);
      setCloseAll(true);
    }; 
    return ( 
    
    <>
      <Modal isOpen={isShown} toggle={toggle}>
        <ModalHeader onClick={handleClick} toggle={toggle}>Pet Profile</ModalHeader>
        <ModalBody>
            <PetProfileCard petData={petData}/>
          <br />

          <Modal
            isOpen={nestedModal}
            toggle={toggleNested}
            onClosed={closeAll ? toggle : undefined}
          >
            <ModalHeader>Nested Modal title</ModalHeader>
            <ModalBody>Stuff and things</ModalBody>
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
        <Button color="success" onClick={toggleNested}>
            Add a pet
          </Button>
          <Button color="primary" onClick={toggleNested}>
            Edit a pet
          </Button>{' '}

          {/* <Button
              color="success"
              onClick={() => {
                props.editUpdatePet(pet);
                props.updateOn();
              }}
            >
              Update
            </Button> */}
          <Button color="secondary" onClick={handleClick}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </> 
    );
}
 
export default PetProfileNestedModal;