import React, { useState } from "react";
import { ServiceData } from "../../types/ServiceData";
import ModalReviewService from "../ModalReviewService";
import formatValue from "../../utils/formatedPrice";
import { format } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { Container, Content, TableRow, TitleTable } from "./styles";

interface LastServicesProps {
  services: ServiceData[];
}

interface TableRowElementProps {
  service: ServiceData;
}

const TableRowElement = ({ service }: TableRowElementProps) => {
  const [visible, setVisible] = useState<boolean>(false);
  const date = format(service.date, "dd/MMM/yyyy", {
    locale: ptBR,
  });

  return (
    <>
      <Content onClick={() => setVisible(!visible)}>
        <TableRow>{service.serviceDetails.class}</TableRow>
        <TableRow>{date}</TableRow>
        <TableRow>{formatValue(service.price)}</TableRow>
      </Content>
      <ModalReviewService
        service={service}
        visible={visible}
        setVisible={setVisible}
      />
    </>
  );
};

const LastServices = ({ services }: LastServicesProps) => {
  return (
    <Container>
      <h2>Últimos serviços</h2>
      <Content>
        <TitleTable>Serviço</TitleTable>
        <TitleTable>Data</TitleTable>
        <TitleTable>Valor</TitleTable>
      </Content>
      {services.length > 0 ? (
        <>
          {services.map((service) => (
            <TableRowElement service={service} key={service.id} />
          ))}
        </>
      ) : (
        <span>Não há nenhum serviço realizado.</span>
      )}
    </Container>
  );
};

export default LastServices;
