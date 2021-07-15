import { FaBath, FaBed } from "react-icons/fa";
import { MdKitchen } from "react-icons/md";
import styled from "styled-components";

interface IconsProps {
  active: boolean;
}
interface InfoProps {
  index: number;
}

export const Container = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
`;

export const FirstSection = styled.section`
  width: 100%;
  height: calc(100vh - 56px);
  transition: all 350ms;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    position: absolute;
    inset: 0;
    z-index: 1;
    object-fit: cover;
  }

  > div {
    position: absolute;
    right: 0;
    bottom: 10%;
    background-color: rgba(250, 250, 250, 0.75);
    border-radius: 4px 0 0 4px;
    width: 100%;
    max-width: 592px;
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: all 350ms;
    z-index: 5;

    h2 {
      font-size: 1.5rem;
      color: var(--green);
      margin-bottom: 0.5rem;
      text-align: center;
      font-family: var(--font-secondary);
      line-height: 2rem;
      transition: all 350ms;
    }

    p {
      color: var(--black);
      font-size: 1rem;
      text-align: center;
      max-width: 400px;
      transition: all 350ms;
    }
  }

  @media screen and (min-width: 592px) {
    > div {
      padding: 18px 42px 18px 64px;
      align-items: flex-end;
      max-width: 720px;

      h2 {
        font-size: 2rem;
        margin-bottom: 1rem;
        text-align: right;
        line-height: 2.5rem;
      }

      p {
        font-size: 1.2rem;
        text-align: right;
        max-width: 400px;
      }
    }
  }

  @media screen and (min-width: 780px) {
    > div {
      padding: 18px 42px 18px 164px;
    }
  }

  @media screen and (min-width: 920px) {
    height: calc(85vh);
    min-height: 600px;
  }
`;

export const HowWorkSection = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;

export const HowWorkSectionTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 90vw;
  max-width: 600px;
  margin-bottom: 2rem;
  margin: 5rem 0 3rem;

  @media screen and (min-width: 720px) {
    margin: 2rem 0 2rem;
  }

  h2 {
    font-size: 2rem;
    line-height: 2rem;
    color: var(--black);
    font-family: var(--font-secondary);
    font-family: 700;
    text-align: center;
  }

  .separator {
    width: 80px;
    height: 8px;
    background-color: var(--green);
    margin: 1rem auto 0.8rem;
  }

  p {
    color: var(--dark-gray);
    font-size: 1.2rem;
    text-align: center;
    line-height: 1.5rem;
  }
`;

export const Gallery = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  width: 100%;
  max-width: 700px;

  > div {
    position: relative;
    overflow: hidden;
    width: 100%;
    min-height: 350px;

    img {
      width: 100%;
      height: 100%;
    }

    .content {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      padding: 42px;
      color: var(--white);
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;

      h3 {
        color: var(--white);
        font-weight: 700;
        font-family: var(--font-secondary);
        font-size: 1.2rem;
        text-align: center;
        line-height: 1.4rem;
        margin-bottom: 1rem;
      }

      p {
        text-align: center;
        font-size: 1rem;
        font-weight: 300;
        line-height: 1.2rem;
      }
    }

    &::before {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      inset: 0;
      background: var(--green);
      opacity: 0.8;
      transition: all 500ms;
    }

    &:hover::before {
      opacity: 1;
    }

    @keyframes opacityAnimation {
      0% {
        opacity: 0.8;
      }
      20% {
        opacity: 0.6;
      }

      100% {
        opacity: 0.8;
      }
    }
  }

  &:hover > div:not(:hover)::before {
    opacity: 0.2;
  }

  &:hover > div .content:not(:hover) {
    opacity: 0;
  }

  @keyframes zoomAnimation {
    0% {
      transform: scale(1);
    }

    100% {
      transform: scale(2);
    }
  }

  @media screen and (min-width: 720px) {
    grid-template-columns: 1fr 1fr;
    margin-bottom: 2rem;
  }
`;

export const ThirtySection = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80vh;
  background-color: var(--black);
  padding: 3rem 0;

  > div:first-child {
    width: 100%;
    max-width: 1240px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    h4 {
      color: var(--white);
      font-family: var(--font-secondary);
      font-weight: 700;
      font-size: 0.8rem;
      width: 90%;
      margin-bottom: 4rem;
      margin-left: 8px;
      transition: all 350ms;
      margin-top: 2rem;
    }
  }

  @media screen and (min-width: 720px) {
    height: 100vh;

    > div:first-child {
      h4 {
        color: var(--white);
        font-family: var(--font-secondary);
        font-weight: 700;
        font-size: 1.2rem;
        width: 50%;
        margin-bottom: 4rem;
        margin-left: 0;
      }
    }
  }
`;

export const WrapperImages = styled.div`
  width: 100%;
  max-width: 1240px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  /* height: calc(100vw / 2); */
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
  margin-bottom: 2rem;
  div {
    /* position: absolute; */
    width: calc(100vw / 2 - 8px);
    max-width: 620px;
    /* height: calc(100vw / 2); */
    overflow: hidden;
    /* transform: scaleX(0.5); */

    &:first-child {
      border-right: 10px solid var(--black);
    }

    &:last-child {
      /* left: 50%; */
      border-left: 10px solid var(--black);
    }
  }

  img {
    width: 100%;
    /* height: calc(100vw / 2); */
    object-fit: cover;
  }

  @media screen and (min-width: 720px) {
    img {
      object-fit: cover;
    }
  }
`;

export const BeDoneSection = styled.section`
  width: 100%;
  height: 100vh;
  min-height: 600px;
  background-color: var(--white);
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */

  &::before {
    content: "";
    width: 88px;
    height: 100%;
    top: 0;
    left: 0;
    bottom: 0;
    position: absolute;
    background-color: var(--gray);
    z-index: 10;
  }

  @media screen and (min-width: 720px) {
    &::before {
      content: "";
      width: 25%;
      height: 100%;
      top: 0;
      left: 0;
      bottom: 0;
      position: absolute;
      background-color: var(--gray);
      z-index: 10;
    }
  }
`;

export const BeDoneSectionTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 70vw;
  max-width: 600px;
  margin-bottom: 2rem;
  margin: 4rem 0 3rem;
  position: relative;
  z-index: 20;
  @media screen and (min-width: 720px) {
    margin: 5rem 0 0rem;
  }

  h2 {
    font-size: 2rem;
    line-height: 2.2rem;
    color: var(--black);
    font-family: var(--font-secondary);
    font-family: 700;
    text-align: center;
  }

  .separator {
    width: 80px;
    height: 8px;
    background-color: var(--green);
    margin: 1rem auto 0.8rem;
  }
`;

export const BeDoneContent = styled.div`
  position: relative;
  z-index: 20;
  width: 100%;
  height: 100%;
  display: flex;
  margin: auto 0;
  flex-direction: column;

  @media screen and (min-width: 920px) {
    flex-direction: row-reverse;
    align-items: center;
  }
`;

export const Carrosel = styled.div`
  width: 100%;
  height: 200px;
  position: relative;
  overflow: hidden;

  div {
    position: absolute;
    width: 300%;
    max-width: calc(3 * 900px);
    height: 100%;
    top: 0;
    left: 0px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 350ms;
    transform: ${(props: InfoProps) =>
      props.index === 0
        ? "translateX(0)"
        : props.index === 1
        ? "translateX(-33.333%)"
        : "translateX(-66.666%)"};

    img {
      height: 200px;
      width: 100%;
      object-fit: cover;
    }
  }

  @media screen and (min-width: 920px) {
    width: 80vw;
    max-width: 1000px;
    height: 500px;
    position: relative;
    overflow: hidden;
    border-radius: 0 4px 4px 0;
    div {
      position: absolute;
      width: 300%;
      max-width: calc(3 * 1000px);
      height: 500px;
      top: 0;
      left: 0px;
      display: flex;
      align-items: center;
      justify-content: center;

      img {
        height: 500px;
        width: 33.333%;
        object-fit: cover;
      }
    }
  }
`;

export const BeDoneWrapperInfos = styled.div`
  flex: 1;
  width: 100%;
  position: relative;
  z-index: 20;
  display: flex;
  align-items: center;

  @media screen and (min-width: 920px) {
    width: 40vw;
  }
`;

export const Icons = styled.div`
  width: 88px;
  height: calc(3 * 58px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  cursor: pointer;

  @media screen and (min-width: 920px) {
    width: 90px;
  }
`;

export const IconKitchen = styled(MdKitchen)`
  margin-bottom: 32px;
  fill: ${(props: IconsProps) =>
    props.active ? "var(--dark-green)" : "var(--light-gray)"};
`;

export const IconBed = styled(FaBed)`
  margin-bottom: 32px;
  fill: ${(props: IconsProps) =>
    props.active ? "var(--dark-green)" : "var(--light-gray)"};
`;

export const IconBath = styled(FaBath)`
  margin-bottom: 0px;
  fill: ${(props: IconsProps) =>
    props.active ? "var(--dark-green)" : "var(--light-gray)"};
`;

export const Info = styled.div`
  display: flex;
  width: calc(100vw - 100px);
  overflow: hidden;
  position: relative;
  z-index: 50;

  > div {
    display: grid;
    grid-template-columns: 80vw 80vw 80vw;
    transition: all 350ms;
    transform: ${(props: InfoProps) =>
      props.index === 0
        ? "translateX(0)"
        : props.index === 1
        ? "translateX(-80vw)"
        : "translateX(-160vw)"};
  }

  @media screen and (min-width: 920px) {
    width: 40vw;

    > div {
      width: 100%;
      display: grid;
      grid-template-columns: 30vw 30vw 30vw;
      transition: all 350ms;
      transform: ${(props: InfoProps) =>
        props.index === 0
          ? "translateX(0)"
          : props.index === 1
          ? "translateX(-27vw)"
          : "translateX(-57vw)"};
    }
  }
`;

export const InfoDetails = styled.div`
  padding: 1rem;
  transition: all 350ms;
  opacity: ${(props: IconsProps) => (props.active ? "1" : "0.3")};

  h2 {
    font-family: var(--font-secondary);
    font-weight: 700;
    width: 100%;
    font-size: 1rem;
    margin-bottom: 1rem;
    color: var(--black);
    text-align: right;
  }

  p {
    color: var(--dark-gray);
    font-size: 1rem;
    text-align: right;
    max-width: 500px;
    margin-left: auto;
    margin-right: 0;
  }
`;

export const VideoSection = styled.section`
  width: 100%;
  height: 100vh;
  min-height: 700px;
  background-color: var(--black);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  video {
    width: 100%;
    max-width: 1024px;
    height: 300px;
    object-fit: cover;
  }

  @media screen and (min-width: 720px) {
    video {
      height: 500px;
    }
  }
`;

export const VideoSectionTitle = styled.div`
  margin-top: 2rem;
  padding: 1rem;

  h2 {
    color: var(--white);
    font-family: var(--font-secondary);
    font-weight: 400;
    font-size: 1.5rem;
  }

  @media screen and (min-width: 720px) {
    h2 {
      color: var(--white);
      font-family: var(--font-secondary);
      font-weight: 400;
      font-size: 2rem;
    }
  }
`;

export const ButtonUp = styled.span`
  width: 60px;
  height: 60px;
  background-color: var(--green);
  border-radius: 50%;
  box-shadow: var(--shadow);
  position: fixed;
  right: 50px;
  bottom: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  color: var(--white);
  cursor: pointer;
  z-index: 500;
`;
