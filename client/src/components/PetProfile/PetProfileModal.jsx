import React, {useState} from "react"; 
import { Modal, ModalHeader, ModalBody, ModalFooter, Button} from "reactstrap"
import PetProfileEdit from "./PetProfileEdit"

const PetProfileModal = (props) => {
// petAction = props.petAction
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <>
      <Modal
        isOpen={true}
        toggle={toggle}
        size="xl"
        style={{
          width: "80%",
          height: "90%",
          overflow: "scroll-y",
        }}
      >
        <ModalHeader toggle={toggle}>User Profile</ModalHeader>
        <ModalBody id="user-profile-modal">
         {/* {petAction} */}
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
            Submit
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default PetProfileModal;
