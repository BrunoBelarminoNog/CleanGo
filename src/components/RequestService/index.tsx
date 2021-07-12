import * as yup from "yup";
import React, { useState } from "react";
import InputRadio from "../InputRadio";
import {
  Container,
  Title,
  SectionTitle,
  Column,
  Number,
  Row,
  Border,
  WrapperInputsRadio,
  Subtitle,
  InputNumberWrapper,
  InputNumberLabel,
  LimitPieces,
  RoomsWrapper,
  DateWrapper,
} from "./styles";
import Input from "../Input";
import InputNumber from "../InputNumber";
import { useServices } from "../../providers/Services";
import formatValue from "../../utils/formatedPrice";
import { useAuth } from "../../providers/Auth";
import Button from "../Button";
import { FaTimes, FaTimesCircle } from "react-icons/fa";
import { notification } from "antd";

const RequestService = () => {
  const [service, setService] = useState<string>("Limpeza Residencial");
  const [home, setHome] = useState<string>("");
  const [date, setDate] = useState("");
  const [hours, setHours] = useState("1");
  const [bedroom, setBedrooms] = useState("1");
  const [bathroom, setBathrooms] = useState("1");
  const [error, setError] = useState(false);
  const [price, setPrice] = useState(0);
  const [formatedPrice, setFormatedPrice] = useState("R$00,00");

  const { newService } = useServices();
  const { idClient } = useAuth();
  const [dateError, setDateError] = useState(false);

  //apenas para deploy
  setPrice(0);
  setFormatedPrice(formatValue(price));

  const onSubmitFunction = async (e: React.MouseEvent) => {
    e.preventDefault();

    const serviceFull = {
      userId: idClient,
      date: parseInt(date),
      price: price,
      serviceDetails: {
        class: service,
        hours: parseInt(hours),
        type: home,
        bedroom: parseInt(bedroom),
        bathroom: parseInt(bathroom),
      },
      opened: true,
      completed: false,
      partnerId: 0,
      formatedPrice: formatedPrice,
    };

    const schema = yup.object().shape({
      date: yup.number().required("Selecione uma data"),
      class: yup.string(),
      hours: yup.string(),
      type: yup.string(),
      bedroom: yup.number(),
      bathroom: yup.number(),
    });

    await schema
      .validate({ ...serviceFull })
      .then((_) => {
        newService(serviceFull, setError);
      })
      .catch((err) => {
        notification.open({
          message: "Erro.",
          closeIcon: <FaTimes />,
          style: {
            fontFamily: "Roboto",
            backgroundColor: "var(--gray)",
            WebkitBorderRadius: 4,
            zIndex: 5000,
          },
          description: "Erro criar serviço.",
          icon: <FaTimesCircle style={{ color: "red" }} />,
        });
      });
  };

  const handleSelectChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    value && setService(value);
  };

  const handleSelectChangeHome = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.value;
    value && setHome(value);
  };
  return (
    <>
      <Container>
        <Row>
          <Border>
            <Number>1</Number>
          </Border>
          <Title>Solicite um serviço</Title>
        </Row>

        <WrapperInputsRadio>
          <InputRadio
            name="class"
            value="Limpeza Residencial"
            selected={service === "Limpeza Residencial"}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleSelectChange(e)
            }
          >
            Limpeza Residêncial
          </InputRadio>
          <InputRadio
            name="class"
            value="Passadoria"
            selected={service === "Passadoria"}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleSelectChange(e)
            }
          >
            Passadoria
          </InputRadio>
        </WrapperInputsRadio>
        {service === "Limpeza Residencial" && (
          <Column>
            <SectionTitle>Nos conte sobre o seu lar</SectionTitle>
            <WrapperInputsRadio>
              <InputRadio
                name="type"
                value="Studio"
                selected={home === "Studio"}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  handleSelectChangeHome(e)
                }
              >
                Studio
              </InputRadio>
              <InputRadio
                name="type"
                value="Apartamento"
                selected={home === "Apartamento"}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  handleSelectChangeHome(e)
                }
              >
                Apartamento
              </InputRadio>
              <InputRadio
                name="type"
                value="Casa"
                selected={home === "Casa"}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  handleSelectChangeHome(e)
                }
              >
                Casa
              </InputRadio>
            </WrapperInputsRadio>
            <RoomsWrapper>
              <InputNumberWrapper>
                <InputNumber
                  name="bedroom"
                  value={bedroom}
                  setValue={setBedrooms}
                ></InputNumber>
                <InputNumberLabel>Quarto</InputNumberLabel>
              </InputNumberWrapper>
              <InputNumberWrapper>
                <InputNumber
                  name="bedroom"
                  value={bathroom}
                  setValue={setBathrooms}
                ></InputNumber>
                <InputNumberLabel>Banheiro</InputNumberLabel>
              </InputNumberWrapper>
            </RoomsWrapper>
          </Column>
        )}

        <Column>
          <SectionTitle>Quantas Horas?</SectionTitle>
          <Subtitle>
            Você está livre para escolher quantas horas quiser
          </Subtitle>
          <Row>
            <InputNumberWrapper>
              <InputNumber
                name="type"
                value={hours}
                maxValue={6}
                setValue={setHours}
              />
              <InputNumberLabel>Horas</InputNumberLabel>
            </InputNumberWrapper>
            {service === "Passadoria" && (
              <LimitPieces>{`Limite de ${
                parseInt(hours) * 15
              } peças`}</LimitPieces>
            )}
          </Row>
        </Column>

        <Column>
          <SectionTitle>Qual a data?</SectionTitle>
          <Subtitle>Selecione um dia para o serviço.</Subtitle>
          <DateWrapper>
            <Input
              inputType="date"
              errorMessage="Campo obrigatório"
              error={dateError}
              name="date"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setDate(e.target.value);
                setDateError(false);
              }}
              value={date}
              required
            />
          </DateWrapper>
        </Column>
      </Container>

      <Button
        type="submit"
        onClickFunc={(e: React.MouseEvent<HTMLButtonElement>) =>
          onSubmitFunction(e)
        }
      >
        Confirmar
      </Button>
      {error && ""}
    </>
  );
};

export default RequestService;
