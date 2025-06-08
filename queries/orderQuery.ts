import { useStore } from "@/providers/datastore";
import { Order } from "@/types/dataTypes";
import axios from "axios";
import { toast } from "react-toastify";

// Order

export class OrderQuery {
  store = useStore();
  getOrders = async (): Promise<Order[]> => {
    return axios
      .get(`${process.env.NEXT_PUBLIC_API}/order/`)
      .then((response) => {
        this.store.setOrders(response.data);
        return response.data;
      })
      .catch((err) => {
        toast.error(`Error Fetching Orders ${err}`);
      });
  };

  getOneOrder = async (id: number): Promise<Order> => {
    return axios
      .get(`${process.env.NEXT_PUBLIC_API}/order/${id}`)
      .then((response) => {
        return response.data;
      })
      .catch((err) => {
        toast.error(`Error Fetching order ${err}`);
      });
  };

  createOrder = async (order: Partial<Order>): Promise<Order> => {
    return axios
      .post(`${process.env.NEXT_PUBLIC_API}/order/`, order)
      .then((response) => {
        toast.success(`Order created successfully`);
        return response.data;
      })
      .catch((err) => {
        toast.error(`Error Creating order ${err}`);
      });
  };

  updateOrder = async (order: Order): Promise<Order> => {
    return axios
      .put(`${process.env.NEXT_PUBLIC_API}/order?id=${order.id}`, order)
      .then((response) => {
        toast.success(`Order updated successfully`);
        return response.data;
      })
      .catch((err) => {
        toast.error(`Error updating order ${err}`);
      });
  };

  deleteOrder = async (id: number): Promise<Order> => {
    return axios
      .delete(`${process.env.NEXT_PUBLIC_API}/order?id=${id}`)
      .then((response) => {
        toast.success(`Order deleted successfully`);
        return response.data;
      })
      .catch((err) => {
        toast.error(`Error updating order ${err}`);
      });
  };
}
