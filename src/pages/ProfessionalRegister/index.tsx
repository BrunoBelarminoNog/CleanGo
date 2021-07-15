import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import { useHistory } from "react-router-dom";

import TitlePage from "../../components/TitlePage";
import Header from "../../components/Header";
import HeaderNav from "../../components/HeaderNav";
import {
  FormNewPartnerFirstStep,
  FormNewPartnerSecondStep,
  FormNewPartnerThirtyStep,
} from "../../components/FormNewPartner";

import { useTheme } from "../../providers/Theme";
import { PartnerData } from "../../types/partnerData";

import {
  Container,
  NavigationTab,
  Separator,
  TitleForm,
  WrapperForm,
  WrapperTabs,
  FormsContainer,
} from "./styles";
import gsap from "gsap/all";

const ProfessionalRegister = () => {
  const [sectionForm, setSectionForm] = useState<number>(1);

  const [newPartnerState, setNewPartnerState] = useState<PartnerData>(
    {} as PartnerData
  );

  const history = useHistory();
  const { handleBackground } = useTheme();

  useEffect(() => {
    handleBackground(true);
  }, [handleBackground]);

  const wrapperFormElement = useRef<HTMLElement>(null);
  const titleElement = useRef<HTMLHeadingElement>(null);
  const tabsElement = useRef<HTMLDivElement>(null);
  const containerFormElement = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    gsap
      .timeline({})
      .from(wrapperFormElement.current, {
        opacity: 0,
        translateX: -200,
      })
      .to(
        [
          titleElement.current,
          tabsElement.current,
          containerFormElement.current,
        ],
        {
          opacity: 1,
        },
        "<"
      );
  }, []);

  return (
    <>
      <Header>
        <HeaderNav />
      </Header>
      <TitlePage title="Cadastro Funcionário" />
      <Container>
        <WrapperForm ref={wrapperFormElement}>
          <TitleForm ref={titleElement}>Cadastro de profissionais</TitleForm>
          <WrapperTabs sectionForm={sectionForm} ref={tabsElement}>
            <NavigationTab
              active={sectionForm === 1 ? true : false}
              onClick={() => {
                sectionForm > 1 && setSectionForm(1);
              }}
            >
              <div>
                <span>1</span>
              </div>
              <div>
                <p>Dados pessoais</p>
              </div>
            </NavigationTab>
            <Separator />
            <NavigationTab
              active={sectionForm === 2 ? true : false}
              onClick={() => {
                sectionForm > 2 && setSectionForm(2);
              }}
            >
              <div>
                <span>2</span>
              </div>
              <div>
                <p>Endereço</p>
              </div>
            </NavigationTab>
            <Separator />

            <NavigationTab active={sectionForm === 3 ? true : false}>
              <div>
                <span>3</span>
              </div>
              <div>
                <p>Seus serviços</p>
              </div>
            </NavigationTab>
          </WrapperTabs>
          <FormsContainer section={sectionForm} ref={containerFormElement}>
            <FormNewPartnerFirstStep
              setNewPartnerState={setNewPartnerState}
              setSectionForm={setSectionForm}
            />
            <FormNewPartnerSecondStep
              setNewPartnerState={setNewPartnerState}
              newPartnerState={newPartnerState}
              setSectionForm={setSectionForm}
            />
            <FormNewPartnerThirtyStep
              setNewPartnerState={setNewPartnerState}
              newPartnerState={newPartnerState}
              history={history}
            />
          </FormsContainer>
        </WrapperForm>
      </Container>
    </>
  );
};

export default ProfessionalRegister;
