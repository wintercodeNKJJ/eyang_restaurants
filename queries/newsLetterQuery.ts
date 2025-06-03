import { useStore } from "@/providers/datastore";
import { NewsLetter } from "@/types/dataTypes";
import axios from "axios";
import { toast } from "react-toastify";

// NewsLetter

export class NewsLetterQuery {
  store = useStore();
  getNewsLetter = async (): Promise<NewsLetter[]> => {
    return axios
      .get(`${process.env.NEXT_PUBLIC_API}/newsLetter/`)
      .then((response) => {
        this.store.setNewsLetter(response.data);
        return response.data;
      })
      .catch((err) => {
        toast.error(`Error Fetching NewsLetters ${err}`);
      });
  };

  createNewsLetter = async (newsLetter: NewsLetter): Promise<NewsLetter> => {
    return axios
      .post(`${process.env.NEXT_PUBLIC_API}/newsLetter/`, newsLetter)
      .then((response) => {
        toast.success(`subscribed to newsletter successfully`);
        return response.data;
      })
      .catch((err) => {
        toast.error(`Error subscribing to newsLetter ${err}`);
      });
  };

  updateNewsLetter = async (newsLetter: NewsLetter): Promise<NewsLetter> => {
    return axios
      .put(
        `${process.env.NEXT_PUBLIC_API}/newsLetter/${newsLetter.id}`,
        newsLetter
      )
      .then((response) => {
        toast.success(`NewsLetter updated successfully`);
        return response.data;
      })
      .catch((err) => {
        toast.error(`Error updating newsLetter ${err}`);
      });
  };

  deleteNewsLetter = async (id: number): Promise<NewsLetter> => {
    return axios
      .delete(`${process.env.NEXT_PUBLIC_API}/newsLetter/${id}`)
      .then((response) => {
        toast.success(`NewsLetter deleted successfully`);
        return response.data;
      })
      .catch((err) => {
        toast.error(`Error updating newsLetter ${err}`);
      });
  };
}
