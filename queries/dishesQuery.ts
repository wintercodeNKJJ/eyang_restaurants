import { useStore } from "@/providers/datastore";
import { Dish } from "@/types/dataTypes";
import axios from "axios";
import { toast } from "react-toastify";

// Dishes

export class DishesQuery {
  store = useStore();
  getDishes = async (): Promise<Dish[]> => {
    return axios
      .get(`${process.env.NEXT_PUBLIC_API}/dish/`)
      .then((response) => {
        this.store.setDishes(response.data);
        return response.data;
      })
      .catch((err) => {
        toast.error(`Error Fetching dishes ${err}`);
      });
  };

  getDish = async (data: { id?: number; slug?: string }): Promise<Dish> => {
    return axios
      .get(
        `${process.env.NEXT_PUBLIC_API}/dish?id=${data.id ?? ""}&slug=${
          data.slug ?? ""
        }`
      )
      .then((response) => {
        return response.data;
      })
      .catch((err) => {
        toast.error(`Error Fetching dish ${err}`);
      });
  };

  createDish = async (dish: Partial<Dish>): Promise<Dish[]> => {
    return axios
      .post(`${process.env.NEXT_PUBLIC_API}/dish/`, dish)
      .then((response) => {
        toast.success(`Dish created successfully`);
        return response.data;
      })
      .catch((err) => {
        toast.error(`Error Creating dish ${err}`);
      });
  };

  updateDish = async (dish: Dish): Promise<Dish[]> => {
    return axios
      .put(`${process.env.NEXT_PUBLIC_API}/dish/${dish.id}`, dish)
      .then((response) => {
        toast.success(`Dish updated successfully`);
        return response.data;
      })
      .catch((err) => {
        toast.error(`Error updating dish ${err}`);
      });
  };

  deleteDish = async (id: number): Promise<Dish[]> => {
    return axios
      .delete(`${process.env.NEXT_PUBLIC_API}/dish/${id}`)
      .then((response) => {
        toast.success(`Dish deleted successfully`);
        return response.data;
      })
      .catch((err) => {
        toast.error(`Error updating dish ${err}`);
      });
  };
}
