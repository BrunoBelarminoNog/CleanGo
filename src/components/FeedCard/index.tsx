import { useState } from "react";
import { useAuth } from "../../providers/Auth";
import { useFeed } from "../../providers/Feed";
import Button from "../Button";
import { ButtonOpen, FeedColumn, FeedPost, InputFeed } from "./styles";
import { format } from "date-fns";
import { FiMessageSquare } from "react-icons/fi";
import { useEffect } from "react";

import gsap from "gsap";
import { Draggable } from "gsap/Draggable";
import { useRef } from "react";

const FeedCard = () => {
  const { feeds, feedPost } = useFeed();
  const { user } = useAuth();
  const [text, setText] = useState<string>("");
  const [open, setOpen] = useState(false);

  const date = new Date();

  const feedData = (text: string) => {
    const data = {
      userId: user?.id,
      name: user?.name,
      textPost: text,
      date: date.getTime(),
    };

    setText("");
    feedPost(data);
  };

  const ButtonMobile = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(Draggable);

    Draggable.create(ButtonMobile.current, {
      type: "x,y",
      edgeResistance: 0.65,
      bounds: { minX: 10, maxX: -150, minY: 0, maxY: -200 },
      onClick: () => {
        setOpen(!open);
      },
    });
  });

  return (
    <>
      <ButtonOpen ref={ButtonMobile}>
        <FiMessageSquare />
      </ButtonOpen>
      <FeedColumn open={open}>
        <InputFeed
          placeholder="Começar publicação"
          value={text}
          onChange={(evt) => setText(evt.target.value)}
        />
        <Button onClickFunc={() => feedData(text)}>Publicar</Button>
        <div>
          {feeds
            .slice(0)
            .reverse()
            .map((elem, ind) => {
              const { name, textPost, date } = elem;

              return (
                <FeedPost key={ind}>
                  <h3>{name}</h3>
                  <p>{textPost}</p>
                  <data>Publicado em {format(date, "dd-MM-yyyy")}</data>
                </FeedPost>
              );
            })}
        </div>
      </FeedColumn>
    </>
  );
};

export default FeedCard;
