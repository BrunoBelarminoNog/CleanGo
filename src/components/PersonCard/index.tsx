import Button from "../Button";
import { Container, Head, Name, Image, Type } from "./styles";

interface PersonProps {
  name: string;
  type: string;
  handleDetails: () => void;
}

const PersonCard = ({ name, type, handleDetails }: PersonProps) => {
  return (
    <Container>
      <Head></Head>
      <Name>{name}</Name>
      <Type>{type}</Type>
      <Button onClickFunc={handleDetails}>CONTRATAR</Button>
    </Container>
  );
};

export default PersonCard;
