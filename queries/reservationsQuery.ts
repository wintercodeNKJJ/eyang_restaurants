import { useStore } from "@/providers/datastore";
import { Reservation } from "@/types/dataTypes";
import axios from "axios";
import { toast } from "react-toastify";

// Reservation

export class ReservationQuery {
  store = useStore();
  getReservations = async (): Promise<Reservation[]> => {
    return axios
      .get(`${process.env.NEXT_PUBLIC_API}/reservation/`)
      .then((response) => {
        this.store.setReservations(response.data);
        return response.data;
      })
      .catch((err) => {
        toast.error(`Error Fetching reservations ${err}`);
      });
  };

  getOneReservation = async (id: number): Promise<Reservation> => {
    return axios
      .get(`${process.env.NEXT_PUBLIC_API}/reservation/${id}`)
      .then((response) => {
        return response.data;
      })
      .catch((err) => {
        toast.error(`Error Fetching reservation ${err}`);
      });
  };

  createReservation = async (
    reservation: Reservation
  ): Promise<Reservation> => {
    return axios
      .post(`${process.env.NEXT_PUBLIC_API}/reservation/`, reservation)
      .then((response) => {
        toast.success(`Reservation created successfully`);
        return response.data;
      })
      .catch((err) => {
        toast.error(`Error Creating reservation ${err}`);
      });
  };

  updateReservation = async (
    reservation: Reservation
  ): Promise<Reservation> => {
    return axios
      .put(
        `${process.env.NEXT_PUBLIC_API}/reservation/${reservation.id}`,
        reservation
      )
      .then((response) => {
        toast.success(`Reservation updated successfully`);
        return response.data;
      })
      .catch((err) => {
        toast.error(`Error updating reservation ${err}`);
      });
  };

  deleteReservation = async (id: number): Promise<Reservation> => {
    return axios
      .delete(`${process.env.NEXT_PUBLIC_API}/reservation/${id}`)
      .then((response) => {
        toast.success(`Reservation deleted successfully`);
        return response.data;
      })
      .catch((err) => {
        toast.error(`Error updating reservation ${err}`);
      });
  };
}
