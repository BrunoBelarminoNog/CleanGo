import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Link, useHistory } from "react-router-dom";
import Input from "../Input";
import { ContainerForm } from "./styles";
import Button from "../Button";
import { useAuth } from "../../providers/Auth";
import { FaSpinner } from "react-icons/fa";

interface FormValues {
  email: string;
  password: string;
}

function FormLogin() {
  const { userLogin } = useAuth();
  const [load, setLoad] = useState<boolean>(false);

  // const FormEl = useRef<React.MutableRefObject<HTMLDivElement | null>[]>([]);

  // useLayoutEffect(() => {
  //   const tl = gsap.timeline();

  //   console.log(FormEl);

  //   tl.from(FormEl?.current, {
  //     translateY: -40,
  //     opacity: 0,
  //     stagger: {
  //       amount: 0.4,
  //     },
  //   });
  // }, []);

  const schema = yup.object().shape({
    email: yup.string().required("Campo obrigatório"),
    password: yup
      .string()
      .min(6, "Mínimo de 6 dígitos")
      .required("Campo obrigatório"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
  });
  const history = useHistory();

  const onSubmit = (data: FormValues) => {
    setLoad(true);
    userLogin(data, setLoad, history);
  };

  return (
    <ContainerForm load={load}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <h2>Faça seu login</h2>
        </div>
        <div>
          <Input
            inputType="email"
            label="Email"
            {...register("email")}
            placeholder="Digite seu email"
            error={!!errors.email}
            errorMessage={errors.email?.message}
          />
        </div>
        <div>
          <Input
            inputType="password"
            label="Senha"
            {...register("password")}
            placeholder="Digite sua senha"
            error={!!errors.password}
            errorMessage={errors.password?.message}
          />
        </div>
        <div>
          <p>
            Ainda não possui cadastro?{" "}
            <Link id="link" to="/cadastro">
              Clique aqui
            </Link>{" "}
            para se cadastrar.
          </p>
        </div>
        <div className="containerButton">
          <Button type="submit" whiteSchema={false}>
            <span>ENTRAR</span>
            <FaSpinner />
          </Button>
        </div>
      </form>
    </ContainerForm>
  );
}
export default FormLogin;
