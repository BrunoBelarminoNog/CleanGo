import React, { useState, useEffect } from "react";
import CardService from "../../../components/CardService";
import { useServices } from "../../../providers/Services";
import {
  ContainerServices,
  Container,
  ContainerSelect,
  ContainerButton,
  LabelStyled,
  SelectStyled,
  ButtonStyled,
} from "./styles";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
const Services = () => {
  const [error, setError] = useState<boolean>(false);
  const [disableNext, setDisableNext] = useState<boolean>(false);
  const [disablePrev, setDisablePrev] = useState<boolean>(true);
  const { getServices, services, filterServices, filteredServices } =
    useServices();
  const [option, setOption] = useState<string>("");
  const [pageNumber, setPageNumber] = useState<number>(1);

  const handleNextPage = () => {
    setPageNumber(pageNumber + 1);
    if (services.length < 12 || filteredServices.length < 12) {
      setDisableNext(true);
    }
    setDisablePrev(false);
  };
  const handlePrevPage = () => {
    if (pageNumber >= 2) {
      setPageNumber(pageNumber - 1);
      setDisablePrev(false);
      setDisableNext(false);
    } else {
      setDisableNext(false);
      setDisablePrev(true);
    }
  };

  useEffect(() => {
    getServices(setError, pageNumber, 12);
    if (pageNumber === 1) {
      setDisablePrev(true);
    }
    // eslint-disable-next-line
  }, [pageNumber, services]);
  return (
    <Container>
      <ContainerSelect>
        <LabelStyled htmlFor="categoria">Filtrar por categoria</LabelStyled>
        <SelectStyled
          name="categoria"
          id="categoria"
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
            setOption(e.target.value);
            filterServices(e.target.value);
          }}
          value={option}
        >
          <option value="">Categoria</option>
          <option value="Passadoria">Passadoria</option>
          <option value="Limpeza Residencial">Limpeza Residencial</option>
        </SelectStyled>
      </ContainerSelect>
      {error && ""}
      <ContainerServices>
        {!option
          ? services.map((service) => (
              <CardService service={service} key={service.id} />
            ))
          : filteredServices.map((service) => (
              <CardService service={service} key={service.id} />
            ))}
      </ContainerServices>
      <ContainerButton>
        <ButtonStyled disabled={disablePrev} onClick={handlePrevPage}>
          <FaChevronLeft />
        </ButtonStyled>
        <ButtonStyled disabled={disableNext} onClick={handleNextPage}>
          <FaChevronRight />
        </ButtonStyled>
      </ContainerButton>
    </Container>
  );
};
export default Services;
