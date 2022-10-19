import React, {useState} from "react"; 
import {React, Modal, ModalHeader, ModalBody, ModalFooter} from "reactstrap"

const PetProfileModal = (props) => {



  return (
    <>
      <Modal
        isOpen={modal}
        toggle={toggleUserProfile}
        size="xl"
        style={{
          width: "80%",
          height: "90%",
          overflow: "scroll-y",
        }}
      >
        <ModalHeader toggle={toggleUserProfile}>User Profile</ModalHeader>
        <ModalBody id="user-profile-modal">
          <Profile />
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggleUserProfile}>
            Submit
          </Button>{" "}
          <Button color="secondary" onClick={toggleUserProfile}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default PetProfileModal;
