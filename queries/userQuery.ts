import { useStore } from "@/providers/datastore";
import { User } from "@/types/dataTypes";
import axios from "axios";
import { toast } from "react-toastify";

// User

export class UserQuery {
  store = useStore();
  getUser = async (): Promise<User[]> => {
    return axios
      .get(`${process.env.NEXT_PUBLIC_API}/user/`)
      .then((response) => {
        this.store.setUser(response.data);
        return response.data;
      })
      .catch((err) => {
        toast.error(`Error Fetching Users ${err}`);
      });
  };

  getOneUser = async (id: number): Promise<User> => {
    return axios
      .get(`${process.env.NEXT_PUBLIC_API}/user/${id}`)
      .then((response) => {
        return response.data;
      })
      .catch((err) => {
        toast.error(`Error Fetching user ${err}`);
      });
  };

  createUser = async (user: User): Promise<User> => {
    return axios
      .post(`${process.env.NEXT_PUBLIC_API}/user/`, user)
      .then((response) => {
        toast.success(`User created successfully`);
        return response.data;
      })
      .catch((err) => {
        toast.error(`Error Creating user ${err}`);
      });
  };

  connectUser = async (user: {
    email: string;
    password: string;
  }): Promise<User> => {
    return axios
      .post(`${process.env.NEXT_PUBLIC_API}/user/login`, user)
      .then((response) => {
        toast.success(`User connected successfully`);
        return response.data;
      })
      .catch((err) => {
        toast.error(`Error Creating user ${err}`);
      });
  };

  updateUser = async (user: User): Promise<User> => {
    return axios
      .put(`${process.env.NEXT_PUBLIC_API}/user/${user.id}`, user)
      .then((response) => {
        toast.success(`User updated successfully`);
        return response.data;
      })
      .catch((err) => {
        toast.error(`Error updating user ${err}`);
      });
  };

  deleteUser = async (id: number): Promise<User> => {
    return axios
      .delete(`${process.env.NEXT_PUBLIC_API}/user/${id}`)
      .then((response) => {
        toast.success(`User deleted successfully`);
        return response.data;
      })
      .catch((err) => {
        toast.error(`Error updating user ${err}`);
      });
  };
}
