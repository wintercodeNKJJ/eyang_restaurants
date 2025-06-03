import { useStore } from "@/providers/datastore";
import { Category } from "@/types/dataTypes";
import axios from "axios";
import { toast } from "react-toastify";

// Category

export class CategoryQuery {
  store = useStore();
  getCategory = async (): Promise<Category[]> => {
    return axios
      .get(`${process.env.NEXT_PUBLIC_API}/category/`)
      .then((response) => {
        this.store.setCategories(response.data);
        return response.data;
      })
      .catch((err) => {
        toast.error(`Error Fetching categories ${err}`);
      });
  };

  getOneCategory = async (id: number): Promise<Category> => {
    return axios
      .get(`${process.env.NEXT_PUBLIC_API}/category/${id}`)
      .then((response) => {
        return response.data;
      })
      .catch((err) => {
        toast.error(`Error Fetching category ${err}`);
      });
  };

  createCategory = async (category: Category): Promise<Category> => {
    return axios
      .post(`${process.env.NEXT_PUBLIC_API}/category/`, category)
      .then((response) => {
        toast.success(`Category created successfully`);
        return response.data;
      })
      .catch((err) => {
        toast.error(`Error Creating category ${err}`);
      });
  };

  updateCategory = async (category: Category): Promise<Category> => {
    return axios
      .put(`${process.env.NEXT_PUBLIC_API}/category/${category.id}`, category)
      .then((response) => {
        toast.success(`Category updated successfully`);
        return response.data;
      })
      .catch((err) => {
        toast.error(`Error updating category ${err}`);
      });
  };

  deleteCategory = async (id: number): Promise<Category> => {
    return axios
      .delete(`${process.env.NEXT_PUBLIC_API}/category/${id}`)
      .then((response) => {
        toast.success(`Category deleted successfully`);
        return response.data;
      })
      .catch((err) => {
        toast.error(`Error updating category ${err}`);
      });
  };
}
