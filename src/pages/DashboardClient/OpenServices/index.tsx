import React, { useState, useEffect } from "react";
import { useServices } from "../../../providers/Services";
import {
  ContainerServices,
  Container,
  ContainerSelect,
  ContainerButton,
  LabelStyled,
  SelectStyled,
  ButtonStyled,
  TitleText,
} from "./styles";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useAuth } from "../../../providers/Auth";
import CardServiceOpen from "../../../components/CardServiceOpen";

const OpenServices = () => {
  const [error, setError] = useState<boolean>(false);
  const [disableNext, setDisableNext] = useState<boolean>(false);
  const [disablePrev, setDisablePrev] = useState<boolean>(true);
  const { getClientServices, clientServices } = useServices();
  const { user } = useAuth();

  useEffect(() => {
    getClientServices(setError, "false", user?.id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { filterOpenServices, filteredOpenServices } = useServices();
  const [option, setOption] = useState<string>("");
  const [pageNumber, setPageNumber] = useState<number>(1);

  const handleNextPage = () => {
    setPageNumber(pageNumber + 1);
    if (clientServices.length < 12 || filteredOpenServices.length < 12) {
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
    getClientServices(setError, "false", user?.id, pageNumber, 12);

    if (pageNumber === 1) {
      setDisablePrev(true);
    }
    // eslint-disable-next-line
  }, [pageNumber]);
  return (
    <>
      {clientServices.length === 0 ? (
        <Container>
          <TitleText>
            <h1>Serviços em andamento</h1>
            <span>Você ainda não possui nenhum serviço em andamento.</span>
          </TitleText>
        </Container>
      ) : (
        <Container>
          <TitleText>
            <h1>Serviços em andamento</h1>
          </TitleText>
          <ContainerSelect>
            <LabelStyled htmlFor="categoria">Filtrar por categoria</LabelStyled>
            <SelectStyled
              name="categoria"
              id="categoria"
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                setOption(e.target.value);
                filterOpenServices(e.target.value, user?.id);
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
              ? clientServices.map((service) => (
                  <CardServiceOpen service={service} key={service.id} />
                ))
              : filteredOpenServices.map((service) => (
                  <CardServiceOpen service={service} key={service.id} />
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
      )}
    </>
  );
};
export default OpenServices;
