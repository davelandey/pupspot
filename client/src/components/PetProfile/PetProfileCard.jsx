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
  Modal,
  ModalBody,
  ModalFooter,
} from "reactstrap";
import PetProfileAdd from "./PetProfileAdd";
import { RouteFetch } from "../../components/Routes";
import { Endpoints } from "../Routes/Endpoints";
import PetProfileEdit from "./PetProfileEdit";

const PetProfileCard = (props) => {
  const petData = props.petData;
  const token = props.token;
  // const updateOn = props.updateOn
  const deletePet = async (pet) => {
    console.log("pet delete button clicked");
    // TODO two options - user can disable, (i.e. change bool to false) which will stop displaying pet, admin can delete a pet
    // TODO after successful disable/delete run the props.fetchPets()
  };

  const petMapper = () => {
    return petData?.petProfile?.map(function (pet, index) {
      return (
        <Card
          key={index}
          // sm="3"
                    style={{
            width: "12rem",

            margin: "10px"
            // padding: "25px"
            

          }}
        >
          <img
            alt={pet.dogName}
            src={pet?.dogPic}
            onError={({ currentTarget }) => {
              currentTarget.onerror = null; // prevents looping
              currentTarget.src = "https://rremiumb.sirv.com/Lenny.jpg";
              // currentTarget.src = "https://images.dog.ceo/breeds/african/n02116738_4834.jpg";
            }}
          />
          <CardBody>
            <CardTitle tag="h3">{pet.dogName}</CardTitle>
            <Row>
              <Col>
                <CardSubtitle className="mb-2 text-muted" tag="h6">
                  {pet.breed}
                </CardSubtitle>
              </Col>
              <Col>
                <CardSubtitle className="mb-2 text-muted" tag="h6">
                  {pet.age}
                </CardSubtitle>
              </Col>
            </Row>
            <CardText>{pet.dogBio}</CardText>
          </CardBody>
        </Card>
      );
    });
  };

  return (
    <>
      <Container xl="12">
        <h3>Pet Profile</h3>
        <Row>
          {/* <Col sm="6" className="bg-light border"> */}
            {petMapper()}
          {/* </Col> */}
        </Row>
      </Container>
    </>
  );
};

export default PetProfileCard;
