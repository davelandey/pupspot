import { React, useState, useEffect } from "react";
import {
  Table,
  Button,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Container,
  Row,
  Col,
} from "reactstrap";
import PetProfileAdd from "./PetProfileAdd";
import { RouteFetch } from "../../components/Routes";
import { Endpoints } from "../Routes/Endpoints";

const PetProfileCard = (props) => {
  const petData = props.petData
  const fetchPets = props.fetchPets
  const token = props.token

console.log(petData)


  const deletePet = async (pet) => {
    console.log("pet delete button clicked");
    // TODO two options - user can disable, (i.e. change bool to false) which will stop displaying pet, admin can delete a pet
    // TODO after successful disable/delete run the props.fetchPets()
  };

  const petMapper = () => {
    return props.petData.map(function (pet, index) {
      return (
        <Card
          key={index}
          style={{
            width: "18rem",
          }}
        >
          <img alt={petData.name} src={petData.dogPic} />
          <CardBody>
            <CardTitle tag="h3">{petData.name}</CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              {petData.breed}
            </CardSubtitle>
            <CardText>{petData.dogBio}</CardText>
            <Button
              color="success"
              onClick={() => {
                props.editUpdatePet(pet);
                props.updateOn();
              }}
            >
              Update
            </Button>
            <Button
              color="warning"
              onClick={() => {
                deletePet(pet);
              }}
            >
              Delete
            </Button>
          </CardBody>
        </Card>
      );
    });
  };

  return (
    <>
      <Container fluid="xl">
        <h3>Pet Profile</h3>
        <Row>
          <Col xs="auto" className="bg-light border">
            <Card
              style={{
                width: "18rem",
              }}
            >
              <img alt="Sample" src="https://picsum.photos/300/200" />
              <CardBody>
                <CardTitle id="PetProfilePageCard" tag="h2">
                  Pet Name
                </CardTitle>
                <CardSubtitle
                  id="PetProfilePageCard"
                  className="mb-2 text-muted"
                  tag="h3"
                >
                  <Row>
                    <Col>Breed:</Col>
                    <Col>Age:</Col>
                  </Row>
                </CardSubtitle>
                <CardText>
                  {/* {petMapper()} */}
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Adipisci, voluptate tempora natus eveniet repellat, expedita
                  minus totam ducimus laborum odit nam autem dignissimos
                  nesciunt? Libero.
                </CardText>
                <Button color="success">Edit</Button>
                <Button color="warning">Disable</Button>
              </CardBody>
            </Card>
          </Col>
        </Row>  
      </Container>
    </>
  );
};

export default PetProfileCard;
