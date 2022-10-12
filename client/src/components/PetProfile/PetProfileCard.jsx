import React from "react";
import { Table, Button } from "reactstrap";

const PetProfileCard = (props) => {
  const deletePet = async (pet) => {
    console.log("pet delete button clicked");
    // TODO two options - user can disable, (i.e. change bool to false) which will stop displaying pet, admin can delete a pet
    // TODO after successful disable/delete run the props.fetchPets()
  };

  const petMapper = () => {
    return props.pets.map(function (pet, index) {
      return (
        <Card
          key={index}
          style={{
            width: "18rem",
          }}
        >
          <img
            alt={pet.name}
            src={pet.dogPic}
          />
          <CardBody>
            <CardTitle tag="h3">{pet.name}</CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              {pet.breed}
            </CardSubtitle>
            <CardText>{pet.dogBio}</CardText>
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
      <h3>Pet Profile</h3>
      <hr />
      <Table striped>
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Movie Year</th>
            <th>Rating</th>
          </tr>
        </thead>
        <tbody>{petMapper()}</tbody>
      </Table>
    </>
  );
};

export default PetProfileCard;
