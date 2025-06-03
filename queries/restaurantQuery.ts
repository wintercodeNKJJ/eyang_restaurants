import { useStore } from "@/providers/datastore";
import { Restaurant } from "@/types/dataTypes";
import axios from "axios";
import { toast } from "react-toastify";

// Restaurant

export class RestaurantQuery {
  store = useStore();
  getRestaurant = async (): Promise<Restaurant[]> => {
    return axios
      .get(`${process.env.NEXT_PUBLIC_API}/restaurant/`)
      .then((response) => {
        this.store.setRestaurant(response.data);
        return response.data;
      })
      .catch((err) => {
        toast.error(`Error Fetching Restaurants ${err}`);
      });
  };

  getOneRestaurant = async (id: number): Promise<Restaurant> => {
    return axios
      .get(`${process.env.NEXT_PUBLIC_API}/restaurant/${id}`)
      .then((response) => {
        return response.data;
      })
      .catch((err) => {
        toast.error(`Error Fetching restaurant ${err}`);
      });
  };

  createRestaurant = async (restaurant: Restaurant): Promise<Restaurant> => {
    return axios
      .post(`${process.env.NEXT_PUBLIC_API}/restaurant/`, restaurant)
      .then((response) => {
        toast.success(`Restaurant created successfully`);
        return response.data;
      })
      .catch((err) => {
        toast.error(`Error Creating restaurant ${err}`);
      });
  };

  connectRestaurant = async (restaurant: {
    email: string;
    password: string;
  }): Promise<Restaurant> => {
    return axios
      .post(`${process.env.NEXT_PUBLIC_API}/restaurant/login`, restaurant)
      .then((response) => {
        toast.success(`Restaurant connected successfully`);
        return response.data;
      })
      .catch((err) => {
        toast.error(`Error Creating restaurant ${err}`);
      });
  };

  updateRestaurant = async (restaurant: Restaurant): Promise<Restaurant> => {
    return axios
      .put(
        `${process.env.NEXT_PUBLIC_API}/restaurant/${restaurant.id}`,
        restaurant
      )
      .then((response) => {
        toast.success(`Restaurant updated successfully`);
        return response.data;
      })
      .catch((err) => {
        toast.error(`Error updating restaurant ${err}`);
      });
  };

  deleteRestaurant = async (id: number): Promise<Restaurant> => {
    return axios
      .delete(`${process.env.NEXT_PUBLIC_API}/restaurant/${id}`)
      .then((response) => {
        toast.success(`Restaurant deleted successfully`);
        return response.data;
      })
      .catch((err) => {
        toast.error(`Error updating restaurant ${err}`);
      });
  };
}
