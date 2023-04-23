import axios from "axios";
import { CartExtract } from "../interfaces/Product";
import { IOrder } from "../interfaces/User";

export class CheckoutService {
  static async placeOrder(
    items: CartExtract[],
    shippingAddress: string,
    paymentMethod: string,
    totalPrice: number
  ): Promise<IOrder> {
    const accessToken = localStorage.getItem("accessToken");

    if (!accessToken) {
      throw new Error("Token not found");
    }

    const response = await axios.post<IOrder>(
      "http://localhost:3000/api/orders",
      {
        items,
        shippingAddress,
        paymentMethod,
        totalPrice,
      },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    return response.data;
  }

  static async getOrderById(id: string): Promise<IOrder> {
    const accessToken = localStorage.getItem("accessToken");

    if (!accessToken) {
      throw new Error("Token not found");
    }

    const response = await axios.get<IOrder>(
      `http://localhost:3000/api/orders/${id}`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    return response.data;
  }

  static async getOrders(): Promise<IOrder[]> {
    const accessToken = localStorage.getItem("accessToken");

    if (!accessToken) {
      throw new Error("Token not found");
    }

    const response = await axios.get<IOrder[]>(
      "http://localhost:3000/api/orders",
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    return response.data;
  }

  static async trackOrder(orderId: string): Promise<string> {
    try {
      const response = await axios.get<string>(
        `http://localhost:3000/api/orders/${orderId}/status`
      );
      return response.data;
    } catch (error) {
      console.error(error);
      throw new Error("Failed to track order");
    }
  }

  static async cancelOrder(orderId: string): Promise<boolean> {
    try {
      const response = await axios.delete<boolean>(
        `http://localhost:3000/api/orders/${orderId}`
      );
      return response.data;
    } catch (error) {
      console.error(error);
      throw new Error("Failed to cancel order");
    }
  }
}
