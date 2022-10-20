import "./PetProfile.css";
import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "reactstrap";
import { Endpoints } from "../Routes/Endpoints";
import { RouteFetch } from "../Routes";
import PetProfileNestedModal from "./PetProfileNestedModal";

function PetProfileIndex(props) {
  const token = props.sessionToken;
  const [petData, setPetData] = useState([]);

  const [updateActive, setUpdateActive] = useState(false);
  const [petToUpdate, setPetToUpdate] = useState({});
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const handleClick = props.handleClick
  const setIsShown = props.setIsShown
  const isShown = props.isShown

  const editUpdatePet = (pet) => {
    setPetToUpdate(pet);
    console.log(pet);
  };


  const updateOn = () => {
    setUpdateActive(true);
  };

  const updateOff = () => {
    setUpdateActive(false);
  };
// metch pets will have to be passed as props to the PetAdd same with the edit
  const fetchPets = async () => {
    console.log("getall pets");
    try {
      RouteFetch.get(Endpoints.petProfile.getall, callback, token);
      function callback(data) {
        setPetData(data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchPets();
  }, []);

  console.log(petData);

  return (
    <>
    <PetProfileNestedModal 
    handleClick={handleClick} 
    isShown = {isShown} 
    setIsShown={setIsShown}
    petData={petData}
    editUpdatePet={editUpdatePet}
    updateOn={updateOn}
    updateOff={updateOff}
     />
    </>
  );
}

export default PetProfileIndex;
