import { AxiosError, AxiosResponse } from "axios";
import { SetStateAction, useState } from "react";
import { useEffect } from "react";
import { Dispatch } from "react";
import { ReactNode, useContext } from "react";
import { createContext } from "react";
import api from "../../services/api";
import { FeedData, Likes } from "../../types/feedData";
import { useAuth } from "../Auth";

interface ProviderProps {
  children: ReactNode;
}

interface ProviderData {
  feeds: Array<FeedData>;
  setFeeds: Dispatch<SetStateAction<Array<FeedData>>>;
  feedPost: (feedData: FeedData) => void;
  feedLike: (feedId: number, feedData: Likes) => void;
}

const FeedContext = createContext<ProviderData>({} as ProviderData);

export const FeedProvider = ({ children }: ProviderProps) => {
  const { token } = useAuth();
  const [feeds, setFeeds] = useState<Array<FeedData>>([]);

  const callFeed = () => {
    api
      .get("feed", {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((res: AxiosResponse) => setFeeds(res.data))
      .catch((err: AxiosError) =>
        console.log("feed erro, ", err.response?.data)
      );
  };

  useEffect(() => {
    if (token) {
      callFeed();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  const feedPost = (feedData: FeedData) => {
    api
      .post("feed", feedData, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((res: AxiosResponse) => setFeeds([...feeds, feedData]))
      .catch((err: AxiosError) => console.log(err.response));
  };

  const feedLike = (feedId: number, feedData: Likes) => {
    api
      .patch(`feed/${feedId}`, feedData, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then(() => callFeed())
      .catch((err: AxiosError) => console.log("Like err", err.response));
  };

  return (
    <FeedContext.Provider value={{ feeds, feedPost, feedLike, setFeeds }}>
      {children}
    </FeedContext.Provider>
  );
};

export const useFeed = () => useContext(FeedContext);
