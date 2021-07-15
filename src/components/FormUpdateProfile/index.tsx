import * as yup from "yup";
import { usePartners } from "../../providers/Partners";
import { PartnerData } from "../../types/partnerData";
import { useState } from "react";
import { useAuth } from "../../providers/Auth";
import Input from "../Input";
import Button from "../Button";
import {
  FormStyled,
  WrapperDoubleInput,
  LabelStyled,
  SelectStyled,
  ContainerSelect,
} from "./styles";
import { useClients } from "../../providers/Clients";

const FormUpdateProfile = () => {
  const { editPartner } = usePartners();
  const { editClient } = useClients();
  const { idClient, token, user } = useAuth();
  const [name, setName] = useState(user?.name || "");
  const [email, setEmail] = useState(user?.email || "");
  const [phone, setPhone] = useState(user?.phone || "");
  const [cep, setCep] = useState(user?.cep || "");
  const [address, setAddress] = useState(user?.address || "");
  const [city, setCity] = useState(user?.city || "");
  const [district, setDistrict] = useState(user?.district || "");
  const [uf, setUf] = useState(user?.uf || "");
  const [complement, setComplement] = useState(user?.complement || "");
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const [cepError, setCepError] = useState(false);
  const [addressError, setAddressError] = useState(false);
  const [cityError, setCityError] = useState(false);
  const [districtError, setDistrictError] = useState(false);

  const phoneMask = (value: string) => {
    if (value.length === 11) {
      value = value.replace(/(\d{2})(\d{5})(\d{4})/g, "($1) $2-$3");
      setPhone(value);
    } else {
      setPhone(value);
    }
  };
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

  const handleSubmit = async (e: React.MouseEvent) => {
    e.preventDefault();

    const updateObject: PartnerData = {
      name,
      email,
      phone,
      cep,
      uf,
      address,
      district,
      city,
      complement,
    };
    const schema = yup.object().shape({
      name: yup.string(),
      email: yup.string(),
      phone: yup.string(),
      cep: yup.string(),
      uf: yup.string(),
      address: yup.string(),
      district: yup.string(),
      city: yup.string(),
      complement: yup.string(),
    });

    await schema
      .validate({ ...updateObject })
      .then((v) => {
        user?.partner ? editPartner(v, idClient, token) : editClient(v);
      })
      .catch((err) => {
        name === "" && setNameError(true);
        email === "" && setEmailError(true);
        phone === "" && setPhoneError(true);
        cep === "" && setCepError(true);
        address === "" && setAddressError(true);
        district === "" && setDistrictError(true);
        city === "" && setCityError(true);
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
      <WrapperDoubleInput>
        <Input
          label="CEP"
          inputType="text"
          placeholder="00000-000"
          errorMessage="Campo obrigatório"
          error={cepError}
          maxLength={8}
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
          handleSubmit(e)
        }
      >
        Atualizar
      </Button>
    </FormStyled>
  );
};
export default FormUpdateProfile;
