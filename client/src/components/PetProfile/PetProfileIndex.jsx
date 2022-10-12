import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";

import PetProfilePage from "./PetProfilePage";
import PetProfileCard from "./PetProfileCard";
import PetProfileEdit from "./PetProfileEdit";
import { Endpoints } from "../Endpoints";

function PetProfileIndex(props) {
  const [pets, setPets] = useState([]);
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
    // TODO fetch all the pets
    console.log("getall pets");
    let myHeaders = new Headers();
    myHeaders.append("Authorization", props.token);

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
    };

    try {
      const response = await fetch(Endpoints.pet.getall, requestOptions);
      const data = await response.json();
      console.log(data.pet);
      setPets(data.pet);
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
        <Col md="3">
          <PetProfilePage fetchPets={fetchPets} token={props.token} />
        </Col>
        <Col md="9">
          <PetProfileCard
            pets={pets}
            fetchPets={fetchPets}
            token={props.token}
            editUpdatePet={editUpdatePet}
            updateOn={updateOn}
          />
        </Col>
        {updateActive ? (
          <PetProfileEdit
            petToUpdate={petToUpdate}
            updateOff={updateOff}
            token={props.token}
            fetchPets={fetchPets}
          />
        ) : null}
      </Row>
    </Container>
  );
}

export default PetProfileIndex;
