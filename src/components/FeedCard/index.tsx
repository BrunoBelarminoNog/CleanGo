import { useState } from "react";
import { useAuth } from "../../providers/Auth";
import { useFeed } from "../../providers/Feed";
import Button from "../Button";
import { ButtonOpen, FeedColumn, FeedPost, InputFeed } from "./styles";
import { format } from "date-fns";
import { FiMessageSquare } from "react-icons/fi";

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

  return (
    <>
      <ButtonOpen onClick={() => setOpen(!open)}>
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
