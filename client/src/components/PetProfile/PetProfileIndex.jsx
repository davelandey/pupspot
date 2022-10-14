import "./PetProfile.css";
import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import PetProfileAdd from "./PetProfileAdd";
import PetProfileCard from "./PetProfileCard";
import PetProfileEdit from "./PetProfileEdit";
import { Endpoints } from "../Routes/Endpoints";
import { RouteFetch } from "../Routes";

function PetProfileIndex(props) {
  const token = props.sessionToken;

  const [petData, setPetData] = useState([]);
  const [updateActive, setUpdateActive] = useState(false);
  const [petToUpdate, setPetToUpdate] = useState({});

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

  return (
    <Container>
      <Row>
        <Col md="9">
          <PetProfileCard
            token={token}
            petData={petData}
            fetchPets={fetchPets}
            editUpdatePet={editUpdatePet}
            updateOn={updateOn}
          />
        </Col>
        {updateActive ? (
          <PetProfileEdit
            token={token}
            petToUpdate={petToUpdate}
            // updateOff={updateOff}
            // fetchPets={fetchPets}
          />
        ) : null}
      </Row>
      <Row>
        {/* <Col md="3"> */}
        <PetProfileAdd 
        // petData={petData}
        // fetchPets={fetchPets} 
        token={props.token} />
        {/* </Col> */}
      </Row>
    </Container>
  );
}

export default PetProfileIndex;
