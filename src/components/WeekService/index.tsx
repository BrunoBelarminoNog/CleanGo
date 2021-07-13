import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { ServiceData } from "../../types/ServiceData";

import { useServices } from "../../providers/Services";

import {
  Container,
  CalendarWrapper,
  Calendar,
  WeekDay,
  DayTasks,
  Task,
} from "./styles";

const servico: ServiceData[] = [
  {
    userId: 2,
    date: 1625795778898,
    price: 200.0,
    serviceDetails: {
      hours: 2,
      class: "Limpeza residencial",
    },
    opened: true,
    completed: false,
    partnerId: 0,
  },
  {
    userId: 2,
    date: 1625795778898,
    price: 200.0,
    serviceDetails: {
      hours: 2,
      class: "Limpeza residencial",
    },
    opened: true,
    completed: false,
    partnerId: 0,
  },
  {
    userId: 2,
    date: 1625795778898,
    price: 200.0,
    serviceDetails: {
      hours: 2,
      class: "Limpeza residencial",
    },
    opened: true,
    completed: false,
    partnerId: 0,
  },
  {
    userId: 2,
    date: 1625795778898,
    price: 200.0,
    serviceDetails: {
      hours: 2,
      class: "Limpeza residencial",
    },
    opened: true,
    completed: false,
    partnerId: 0,
  },
  {
    userId: 2,
    date: 1625905948898,
    price: 200.0,
    serviceDetails: {
      hours: 2,
      class: "Limpeza residencial",
    },
    opened: true,
    completed: false,
    partnerId: 0,
  },
  {
    userId: 2,
    date: 1625805778898,
    price: 200.0,
    serviceDetails: {
      hours: 2,
      class: "Passadoria",
    },
    opened: true,
    completed: false,
    partnerId: 0,
  },
  {
    userId: 2,
    date: 1625915879898,
    price: 200.0,
    serviceDetails: {
      hours: 2,
      class: "Passadoria",
    },
    opened: true,
    completed: false,
    partnerId: 0,
  },
];

const WeekService = () => {
  // const [error, setError] = useState(false);
  const [services, setServices] = useState<ServiceData[]>([]);

  const { servicesAccept } = useServices();

  useEffect(() => {
    // getServicesAccepted(setError, 1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    let now: number | Date = new Date();
    let month = now.getMonth();
    console.log(now.getTime());
    const servicesFiltered = servico.filter((service) => {
      let date = new Date(service.date);
      console.log(month);
      return date.getMonth() === month;
    });
    console.log(servicesFiltered);
    setServices([...servicesFiltered]);
  }, [servicesAccept]);

  return (
    <Container>
      <h2>Serviços da semana</h2>
      <CalendarWrapper>
        <Calendar>
          <WeekDay>
            <h3>Segunda</h3>
            <DayTasks>
              {services
                .filter((service) => {
                  let date = new Date(service.date);
                  return date.getDay() === 1;
                })
                .map((service) => {
                  let date = new Date(service.date).getTime();
                  let now = new Date().getTime();

                  return (
                    <Task past={date < now}>
                      <p>{service.serviceDetails.class}</p>
                    </Task>
                  );
                })}
            </DayTasks>
          </WeekDay>
          <WeekDay>
            <h3>Terça</h3>
            <DayTasks>
              {services
                .filter((service) => {
                  let date = new Date(service.date);
                  return date.getDay() === 2;
                })
                .map((service) => {
                  let date = new Date(service.date).getTime();
                  let now = new Date().getTime();

                  return (
                    <Task past={date < now}>
                      <p>{service.serviceDetails.class}</p>
                    </Task>
                  );
                })}
            </DayTasks>
          </WeekDay>
          <WeekDay>
            <h3>Quarta</h3>
            <DayTasks>
              {services
                .filter((service) => {
                  let date = new Date(service.date);
                  return date.getDay() === 3;
                })
                .map((service) => {
                  let date = new Date(service.date).getTime();
                  let now = new Date().getTime();

                  return (
                    <Task past={date < now}>
                      <p>{service.serviceDetails.class}</p>
                    </Task>
                  );
                })}
            </DayTasks>
          </WeekDay>
          <WeekDay>
            <h3>Quinta</h3>
            <DayTasks>
              {services
                .filter((service) => {
                  let date = new Date(service.date);
                  return date.getDay() === 4;
                })
                .map((service) => {
                  let date = new Date(service.date).getTime();
                  let now = new Date().getTime();

                  return (
                    <Task past={date < now}>
                      <p>{service.serviceDetails.class}</p>
                    </Task>
                  );
                })}
            </DayTasks>
          </WeekDay>
          <WeekDay>
            <h3>Sexta</h3>
            <DayTasks>
              {services
                .filter((service) => {
                  let date = new Date(service.date);
                  return date.getDay() === 5;
                })
                .map((service) => {
                  let date = new Date(service.date).getTime();
                  let now = new Date().getTime();

                  return (
                    <Task past={date < now}>
                      <p>{service.serviceDetails.class}</p>
                    </Task>
                  );
                })}
            </DayTasks>
          </WeekDay>
          <WeekDay>
            <h3>Sábado</h3>
            <DayTasks>
              {services
                .filter((service) => {
                  let date = new Date(service.date);
                  return date.getDay() === 6;
                })
                .map((service) => {
                  let date = new Date(service.date).getTime();
                  let now = new Date().getTime();

                  return (
                    <Task past={date < now}>
                      <p>{service.serviceDetails.class}</p>
                    </Task>
                  );
                })}
            </DayTasks>
          </WeekDay>
          <WeekDay>
            <h3>Domingo</h3>
            <DayTasks>
              {services
                .filter((service) => {
                  let date = new Date(service.date);
                  return date.getDay() === 0;
                })
                .map((service) => {
                  let date = new Date(service.date).getTime();
                  let now = new Date().getTime();

                  return (
                    <Task past={date < now}>
                      <p>{service.serviceDetails.class}</p>
                    </Task>
                  );
                })}
            </DayTasks>
          </WeekDay>
        </Calendar>
      </CalendarWrapper>
    </Container>
  );
};

export default WeekService;
