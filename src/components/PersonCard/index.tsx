import Button from "../Button";
import { Container, Head, Name, Image, Type } from "./styles";
import CardImage from "../../images/personCardImage.svg";

interface PersonProps {
  name: string;
  type: string;
  handleDetails: () => void;
}

const PersonCard = ({ name, type, handleDetails }: PersonProps) => {
  return (
    <Container>
      <Head></Head>
      <Image src={CardImage} alt="teste"></Image>
      <Name>{name}</Name>
      <Type>{type}</Type>
      <Button onClickFunc={handleDetails}>CONTRATAR</Button>
    </Container>
  );
};

export default PersonCard;
