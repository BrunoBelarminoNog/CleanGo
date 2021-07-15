import React, { Dispatch, useState } from "react";
import * as yup from "yup";
import { History } from "history";

import Input from "../Input";
import Button from "../Button";
import InputRadio from "../InputRadio";

import {
  FormStyled,
  WrapperDoubleInput,
  LabelStyled,
  SelectStyled,
  ContainerSelect,
  WrapperInputsRadio,
  ContainerTextArea,
  TextAreaStyled,
  ErrorMessage,
} from "./styles";

import { usePartners } from "../../providers/Partners";
import { PartnerData } from "../../types/partnerData";
import { FaSpinner } from "react-icons/fa";

interface FormNewPartnerFirstStepProps {
  setNewPartnerState: Dispatch<{}>;
  setSectionForm: Dispatch<number>;
}

interface FormNewPartnerSecondStepProps {
  newPartnerState: PartnerData;
  setNewPartnerState: Dispatch<{}>;
  setSectionForm: Dispatch<number>;
}

interface FormNewPartnerThirtyStepProps {
  newPartnerState: PartnerData;
  setNewPartnerState: Dispatch<{}>;
  history: History;
}

export const FormNewPartnerFirstStep = ({
  setNewPartnerState,
  setSectionForm,
}: FormNewPartnerFirstStepProps) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [cpf, setCpf] = useState("");
  const [birthday, setBirthday] = useState("");
  const [gender, setGender] = useState("masculino");
  const [phone, setPhone] = useState("");

  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [cpfError, setCpfError] = useState(false);
  const [birthdayError, setBirthdayError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);

  function testarCPF(strCPF: string) {
    var Soma;
    var Resto;
    Soma = 0;
    let cpf = strCPF.toString();
    if (cpf === "00000000000") return false;

    for (let i = 1; i <= 9; i++)
      Soma = Soma + parseInt(cpf.substring(i - 1, i)) * (11 - i);
    Resto = (Soma * 10) % 11;

    if (Resto === 10 || Resto === 11) Resto = 0;
    if (Resto !== parseInt(cpf.substring(9, 10))) return false;

    Soma = 0;
    for (let i = 1; i <= 10; i++)
      Soma = Soma + parseInt(cpf.substring(i - 1, i)) * (12 - i);
    Resto = (Soma * 10) % 11;

    if (Resto === 10 || Resto === 11) Resto = 0;
    if (Resto !== parseInt(cpf.substring(10, 11))) return false;
    return true;
  }

  const cpfMask = (value: string) => {
    if (value.length === 11) {
      const testar = testarCPF(value);

      if (!testar) {
        setCpfError(true);
        setCpf("");
      } else {
        value = value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, "$1.$2.$3-$4");
        setCpf(value);
      }
    } else {
      setCpf(value);
    }
  };

  const phoneMask = (value: string) => {
    if (value.length === 11) {
      value = value.replace(/(\d{2})(\d{5})(\d{4})/g, "($1) $2-$3");
      setPhone(value);
    } else {
      setPhone(value);
    }
  };

  const handleSubmitFirstStep = async (e: React.MouseEvent) => {
    e.preventDefault();

    const partner = {
      name,
      email,
      cpf,
      birthday,
      gender,
      phone,
    };

    const firstSchema = yup.object().shape({
      name: yup.string().required("Todos os campos são obrigatórios"),
      email: yup.string().required("Todos os campos são obrigatórios"),
      cpf: yup.string().required("Todos os campos são obrigatórios"),
      gender: yup.string().required("Todos os campos são obrigatórios"),
      phone: yup.string().required("Todos os campos são obrigatórios"),
      birthday: yup.string().required("Todos os campos são obrigatórios"),
    });

    await firstSchema
      .validate({ ...partner })
      .then((v) => {
        const { birthday } = v;
        let birthdayFormatted = new Date(birthday).getTime();

        setNewPartnerState({ ...v, birthday: birthdayFormatted });
        setSectionForm(2);
      })
      .catch((err) => {
        name === "" && setNameError(true);
        email === "" && setEmailError(true);
        cpf === "" && setCpfError(true);
        phone === "" && setPhoneError(true);
        birthday === "" && setBirthdayError(true);
      });
  };

  return (
    <FormStyled>
      <Input
        label="Nome Completo"
        inputType="text"
        placeholder="Digite seu nome"
        errorMessage="Campo obrigatório"
        error={nameError}
        name="name"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setName(e.target.value);
          setNameError(false);
        }}
        value={name}
        required
      />
      <Input
        label="Email"
        inputType="email"
        placeholder="Digite seu email"
        errorMessage="Campo obrigatório"
        error={emailError}
        name="email"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setEmail(e.target.value);
          setEmailError(false);
        }}
        value={email}
        required
      />
      <WrapperDoubleInput>
        <Input
          label="CPF (apenas números)"
          inputType="text"
          placeholder="Digite seu CPF"
          errorMessage="CPF inválido"
          error={cpfError}
          maxLength={14}
          name="cpf"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            cpfMask(e.target.value);
            setCpfError(false);
          }}
          value={cpf}
          required
        />
        <Input
          label="Data de nascimento"
          inputType="date"
          errorMessage="Campo obrigatório"
          error={birthdayError}
          name="birthday"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setBirthday(e.target.value);
            setBirthdayError(false);
          }}
          value={birthday}
          required
        />
      </WrapperDoubleInput>
      <WrapperDoubleInput>
        <ContainerSelect>
          <LabelStyled htmlFor="sexo">Sexo</LabelStyled>
          <SelectStyled
            name="sexo"
            id="sexo"
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
              setGender(e.target.value);
            }}
            value={gender}
            required
          >
            <option value="masculino">Masculino</option>
            <option value="feminino">Feminino</option>
            <option value="outro">Outro</option>
          </SelectStyled>
        </ContainerSelect>
        <Input
          label="Celular"
          inputType="text"
          placeholder="(00) 00000-0000"
          errorMessage="Campo obrigatório"
          maxLength={14}
          error={phoneError}
          name="phone"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            phoneMask(e.target.value);
            setPhoneError(false);
          }}
          value={phone}
          required
        />
      </WrapperDoubleInput>

      <Button
        type="button"
        onClickFunc={(e: React.MouseEvent<HTMLButtonElement>) =>
          handleSubmitFirstStep(e)
        }
      >
        Continuar
      </Button>
    </FormStyled>
  );
};

export const FormNewPartnerSecondStep = ({
  newPartnerState,
  setNewPartnerState,
  setSectionForm,
}: FormNewPartnerSecondStepProps) => {
  const [cep, setCep] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [district, setDistrict] = useState("");
  const [uf, setUf] = useState("AC");
  const [complement, setComplement] = useState("");

  const [cepError, setCepError] = useState(false);
  const [addressError, setAddressError] = useState(false);
  const [cityError, setCityError] = useState(false);
  const [districtError, setDistrictError] = useState(false);

  async function getAddres(value: string) {
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

  const handleSubmitSecondStep = async (e: React.MouseEvent) => {
    e.preventDefault();

    const partner = {
      cep,
      uf,
      address,
      district,
      city,
      complement,
    };

    const secondSchema = yup.object().shape({
      cep: yup.string().required("Todos os campos são obrigatórios"),
      uf: yup.string().required("Todos os campos são obrigatórios"),
      address: yup.string().required("Todos os campos são obrigatórios"),
      district: yup.string().required("Todos os campos são obrigatórios"),
      city: yup.string().required("Todos os campos são obrigatórios"),
      complement: yup.string().notRequired(),
    });

    await secondSchema
      .validate({ ...partner })
      .then((v) => {
        setNewPartnerState({ ...newPartnerState, ...v });
        setSectionForm(3);
      })
      .catch((err) => {
        cep === "" && setCepError(true);
        address === "" && setAddressError(true);
        district === "" && setDistrictError(true);
        city === "" && setCityError(true);
      });
  };

  return (
    <FormStyled>
      <WrapperDoubleInput>
        <Input
          label="CEP"
          inputType="text"
          placeholder="00000-000"
          errorMessage="Campo obrigatório"
          error={cepError}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            getAddres(e.target.value);
            setCepError(false);
          }}
          value={cep}
        />
        <ContainerSelect>
          <LabelStyled htmlFor="uf">Estado</LabelStyled>
          <SelectStyled name="uf" id="uf" value={uf}>
            <option value="AC">Acre</option>
            <option value="AL">Alagoas</option>
            <option value="AP">Amapá</option>
            <option value="AM">Amazonas</option>
            <option value="BA">Bahia</option>
            <option value="CE">Ceará</option>
            <option value="DF">Distrito Federal</option>
            <option value="ES">Espírito Santo</option>
            <option value="GO">Goiás</option>
            <option value="MA">Maranhão</option>
            <option value="MT">Mato Grosso</option>
            <option value="MS">Mato Grosso do Sul</option>
            <option value="MG">Minas Gerais</option>
            <option value="PA">Pará</option>
            <option value="PB">Paraíba</option>
            <option value="PR">Paraná</option>
            <option value="PE">Pernambuco</option>
            <option value="PI">Piauí</option>
            <option value="RJ">Rio de Janeiro</option>
            <option value="RN">Rio Grande do Norte</option>
            <option value="RS">Rio Grande do Sul</option>
            <option value="RO">Rondônia</option>
            <option value="RR">Roraima</option>
            <option value="SC">Santa Catarina</option>
            <option value="SP">São Paulo</option>
            <option value="SE">Sergipe</option>
            <option value="TO">Tocantins</option>
          </SelectStyled>
        </ContainerSelect>
      </WrapperDoubleInput>
      <Input
        label="Endereço completo"
        inputType="text"
        placeholder="Digite seu endereço completo"
        errorMessage="Campo obrigatório"
        error={addressError}
        value={address}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setAddress(e.target.value);
          setAddressError(false);
        }}
      />
      <WrapperDoubleInput>
        <Input
          label="Bairro"
          inputType="text"
          placeholder="Digite seu bairro"
          errorMessage="Campo obrigatório"
          error={districtError}
          value={district}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setDistrict(e.target.value);
            setDistrictError(false);
          }}
        />

        <Input
          label="Cidade"
          inputType="text"
          placeholder="Digite sua cidade"
          errorMessage="Campo obrigatório"
          error={cityError}
          value={city}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setCity(e.target.value);
            setCityError(false);
          }}
        />
      </WrapperDoubleInput>

      <Input
        label="Complemento"
        inputType="text"
        placeholder="Apt, bloco..."
        errorMessage=""
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setComplement(e.target.value)
        }
        value={complement}
      />

      <Button
        type="button"
        onClickFunc={(e: React.MouseEvent<HTMLButtonElement>) =>
          handleSubmitSecondStep(e)
        }
      >
        Continuar
      </Button>
    </FormStyled>
  );
};

export const FormNewPartnerThirtyStep = ({
  newPartnerState,
  setNewPartnerState,
  history,
}: FormNewPartnerThirtyStepProps) => {
  const [load, setLoad] = useState(false);

  const [service, setService] = useState<string>("Limpeza Residencial");
  const [about, setAbout] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [aboutError, setAboutError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [passwordConfirmError, setPasswordConfirmError] = useState(false);

  const { newPartner } = usePartners();

  const handleSelectChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    value && setService(value);
  };

  const handleSubmitThirtyStep = async (e: React.MouseEvent) => {
    e.preventDefault();

    const partner = {
      service,
      about,
      password,
      confirmPassword,
    };

    const thirtySchema = yup.object().shape({
      service: yup.string().required("Todos os campos são obrigatórios"),
      about: yup.string().required("Todos os campos são obrigatórios"),
      password: yup
        .string()
        .min(6, "Mínimo de 8 digitos")
        .required("Todos os campos são obrigatórios!"),
      confirmPassword: yup
        .string()
        .oneOf([yup.ref("password")], "Senhas diferentes")
        .required("Todos os campos são obrigatórios!"),
    });

    await thirtySchema
      .validate({ ...partner })
      .then((v) => {
        setLoad(true);
        const { password, about, service } = v;
        setNewPartnerState({ ...newPartnerState, password, about, service });
        newPartner(
          { ...newPartnerState, password, about, service },
          history,
          setLoad
        );
      })
      .catch((err) => {
        about === "" && setAboutError(true);
        password === "" && setPasswordError(true);
        (confirmPassword === "" || password !== confirmPassword) &&
          setPasswordConfirmError(true);
      });
  };

  return (
    <FormStyled load={load}>
      <span>Qual o tipo de serviço que você realiza?</span>
      <WrapperInputsRadio>
        <InputRadio
          name="service"
          value="Limpeza Residencial"
          selected={service === "Limpeza Residencial"}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handleSelectChange(e)
          }
        >
          Limpeza Residencial
        </InputRadio>
        <InputRadio
          name="service"
          value="Passadoria"
          selected={service === "Passadoria"}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handleSelectChange(e)
          }
        >
          Passadoria
        </InputRadio>
      </WrapperInputsRadio>
      <ContainerTextArea>
        <LabelStyled>Sobre você</LabelStyled>
        <TextAreaStyled
          placeholder="Apresente-se para seus clientes"
          value={about}
          error={aboutError}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
            setAbout(e.target.value)
          }
        ></TextAreaStyled>
        {aboutError && <ErrorMessage>Campo obrigatório</ErrorMessage>}
      </ContainerTextArea>
      <WrapperDoubleInput>
        <Input
          label="Senha"
          inputType="password"
          placeholder="Digite sua senha"
          errorMessage="Senha inválida"
          error={passwordError}
          value={password}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setPassword(e.target.value);
            setPasswordError(false);
          }}
        />

        <Input
          label="Confirme sua senha"
          inputType="password"
          placeholder="Repita sua senha"
          errorMessage="Senhas diferentes"
          error={passwordConfirmError}
          value={confirmPassword}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setConfirmPassword(e.target.value);
            setPasswordConfirmError(false);
          }}
        />
      </WrapperDoubleInput>
      <Button
        type="button"
        onClickFunc={(e: React.MouseEvent<HTMLButtonElement>) =>
          handleSubmitThirtyStep(e)
        }
      >
        <span>CADASTRAR</span>
        <FaSpinner />
      </Button>
    </FormStyled>
  );
};
