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
  WrapperDoubleInput,
} from "./styles";
import Input from "../Input";
import InputNumber from "../InputNumber";
import { useServices } from "../../providers/Services";
import { useAuth } from "../../providers/Auth";
import { FaTimes, FaTimesCircle } from "react-icons/fa";
import { notification } from "antd";
import { ServiceData } from "../../types/ServiceData";
import FormServiceInfo from "../FormServiceInfo";
import { useHistory } from "react-router-dom";

interface servicesHoursElement {
  minHour: number;
  maxHour: number;
}

interface servicesHoursProps {
  [Passadoria: string]: servicesHoursElement;
  "Limpeza Residencial": servicesHoursElement;
}

interface basePriceProps {
  [Studio: string]: number;
  Apartamento: number;
  Casa: number;
}

const RequestService = () => {
  const [service, setService] = useState<string>("Limpeza Residencial");
  const [home, setHome] = useState<string>("");
  const [date, setDate] = useState("");
  const [dateISO, setDateISO] = useState<number>(() => {
    const now = new Date();

    return now.getTime();
  });
  const [hours, setHours] = useState("1");
  const [bedroom, setBedrooms] = useState("1");
  const [bathroom, setBathrooms] = useState("1");
  const [address, setAddress] = useState("");
  const [addressNumber, setAddressNumber] = useState("");
  const [complement, setComplement] = useState("");
  const [cep, setCep] = useState("");
  const [city, setCity] = useState("");
  const [district, setDistrict] = useState("");
  const [uf, setUf] = useState("AC");
  const [error, setError] = useState(false);
  const [price, setPrice] = useState(0);
  const { newService } = useServices();
  const { user } = useAuth();
  const [dateError, setDateError] = useState(false);
  const [cepError, setCepError] = useState(false);

  const serviceHours: servicesHoursProps = {
    Passadoria: {
      minHour: 1,
      maxHour: 6,
    },
    "Limpeza Residencial": {
      minHour: 6,
      maxHour: 8,
    },
  };

  const basePrice: basePriceProps = {
    Studio: 120,
    Apartamento: 150,
    Casa: 180,
  };

  const handleHours = (newValue: string) => {
    newValue < hours ? setPrice(price - 20) : setPrice(price + 20);

    setHours(newValue);
  };

  const handleBedrooms = (newValue: string) => {
    newValue < bedroom ? setPrice(price - 10) : setPrice(price + 10);

    setBedrooms(newValue);
  };

  const handleBathrooms = (newValue: string) => {
    newValue < bathroom ? setPrice(price - 10) : setPrice(price + 10);

    setBathrooms(newValue);
  };

  async function getAddress(value: string) {
    let cep = value.replace(/(\d{5})(\d{3})/g, "$1-$2");
    setCep(cep);

    if (cep !== "" && cep.length === 9) {
      cep = cep.replace(/\D/g, "");
      const url = `https://viacep.com.br/ws/${cep}/json/unicode/`;

      fetch(url)
        .then((res) => res.json())
        .then((address) => {
          setAddress(address.logradouro);
          setDistrict(address.bairro);
          setCity(address.localidade);
          setUf(address.uf);
        });
    }
  }

  const history = useHistory();
  const idUser = localStorage.getItem("@CleanGo/idClient") || "0";

  const onSubmitFunction = async (e: React.MouseEvent) => {
    e.preventDefault();

    let serviceF: ServiceData = {} as ServiceData;

    service === "Limpeza Residencial"
      ? (serviceF = {
          userId: parseInt(idUser),
          date: dateISO,
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
          complement: complement,
          address: address,
          addressNumber: addressNumber,
          cep: cep,
          uf: uf,
          district: district,
          city: city,
          contractor: user?.name,
        })
      : (serviceF = {
          userId: parseInt(idUser),
          date: dateISO,
          price: price,
          serviceDetails: {
            class: service,
            hours: parseInt(hours),
          },
          opened: true,
          completed: false,
          partnerId: 0,
          address: address,
          complement: complement,
          addressNumber: addressNumber,
          cep: cep,
          uf: uf,
          district: district,
          city: city,
          contractor: user?.name,
        });

    const schema = yup.object().shape({
      date: yup.number().required("Selecione uma data"),
      class: yup.string(),
      hours: yup.string(),
      type: yup.string(),
      bedroom: yup.number(),
      bathroom: yup.number(),
      addressNumber: yup.string().required("Todos os campos são obrigatórios"),
      complement: yup.string(),
      cep: yup.string().required("Todos os campos são obrigatórios"),
      uf: yup.string().required("Todos os campos são obrigatórios"),
      address: yup.string().required("Todos os campos são obrigatórios"),
      district: yup.string().required("Todos os campos são obrigatórios"),
      city: yup.string().required("Todos os campos são obrigatórios"),
    });

    await schema
      .validate({ ...serviceF })
      .then((_) => {
        newService(serviceF, setError, history);
        cep === "" && setCepError(true);
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
    setHours("1");
    setPrice(0);
    if (value === "Passadoria") {
      setHome("");
      setPrice(80);
    } else {
      setHours("6");
      setBathrooms("1");
      setBedrooms("1");
    }
    value && setService(value);
  };

  const handleSelectChangeHome = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.value;
    value && setHome(value);

    let totalPrice =
      basePrice[value] +
      (parseInt(bathroom) - 1) * 10 +
      (parseInt(bedroom) - 1) * 10;

    if (value === "Studio") {
      setHours("5");
    } else {
      setHours("6");
    }
    setPrice(totalPrice);
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
                  maxValue={4}
                  setValue={handleBedrooms}
                ></InputNumber>
                <InputNumberLabel>Quarto</InputNumberLabel>
              </InputNumberWrapper>
              <InputNumberWrapper>
                <InputNumber
                  name="bedroom"
                  maxValue={4}
                  value={bathroom}
                  setValue={handleBathrooms}
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
              {home === "Studio" ? (
                <InputNumber
                  name="type"
                  value={hours}
                  maxValue={5}
                  minValue={5}
                  setValue={handleHours}
                />
              ) : (
                <InputNumber
                  name="type"
                  value={hours}
                  maxValue={serviceHours[service].maxHour}
                  minValue={serviceHours[service].minHour}
                  setValue={handleHours}
                />
              )}

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
          <Input
            label="CEP"
            inputType="text"
            placeholder="00000-000"
            errorMessage="Campo obrigatório"
            error={cepError}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              getAddress(e.target.value);
              setCepError(false);
            }}
            value={cep}
          />
          <WrapperDoubleInput>
            <Input
              label="Número"
              inputType="text"
              placeholder="Número"
              errorMessage="Campo obrigatório"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setAddressNumber(e.target.value);
              }}
              value={addressNumber}
            />
            <Input
              label="Complemento"
              inputType="text"
              placeholder="Apartameto / Bloco"
              errorMessage="Campo obrigatório"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setComplement(e.target.value);
              }}
              value={complement}
            />
          </WrapperDoubleInput>
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
                const value = e.target.valueAsDate;
                if (value) {
                  const date = new Date(value);
                  setDate(e.target.value);
                  setDateISO(date.getTime());
                }
                setDateError(false);
              }}
              value={date}
              required
            />
          </DateWrapper>
        </Column>
      </Container>
      <FormServiceInfo
        onSubmitFunction={onSubmitFunction}
        price={price}
        hours={hours}
        service={service}
      ></FormServiceInfo>
      {error && ""}
    </>
  );
};

export default RequestService;
