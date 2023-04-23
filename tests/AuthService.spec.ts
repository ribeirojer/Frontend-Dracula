import axios from "axios";
import { AuthService } from "../src/services/AuthService";
import { beforeEach, describe, expect, it, vi } from "vitest";

describe("register", () => {
  it("should call axios.post with the correct parameters and return the user", async () => {
    const mockResponse = {
      data: {
        user: { id: 1, email: "test@example.com" },
        token: "some_token",
      },
    };
    const mockRegistration = {
      firstName: "Fulano",
      lastName: "Silva",
      email: "test@example.com",
      password: "password",
    };
    const axiosPostSpy = vi
      .spyOn(AuthService["axios"], "post")
      .mockResolvedValue(mockResponse);

    const result = await AuthService.register(mockRegistration);

    expect(axiosPostSpy).toHaveBeenCalledWith(
      "http://localhost:3000/api/auth/register",
      mockRegistration
    );
    expect(result).toEqual(mockResponse.data.user);
  });

  it("should throw an error if axios.post fails", async () => {
    const mockError = new Error("Registration failed");
    const mockRegistration = {
      firstName: "Fulano",
      lastName: "Silva",
      email: "test@example.com",
      password: "password",
    };
    vi.spyOn(AuthService["axios"], "post").mockRejectedValue(mockError);

    await expect(AuthService.register(mockRegistration)).rejects.toThrow(
      mockError
    );
  });
});

describe("login", () => {
  it("should call axios.post with the correct parameters and return the user", async () => {
    const mockResponse = {
      data: {
        user: { id: 1, email: "test@example.com" },
        token: "some_token",
      },
    };
    const mockCredentials = {
      email: "test@example.com",
      password: "password",
    };
    const axiosPostSpy = vi
      .spyOn(AuthService["axios"], "post")
      .mockResolvedValue(mockResponse);

    const result = await AuthService.login(mockCredentials);

    expect(axiosPostSpy).toHaveBeenCalledWith(
      "http://localhost:3000/api/auth/login",
      mockCredentials
    );
    expect(result).toEqual(mockResponse.data.user);
  });

  it("should throw an error if axios.post fails", async () => {
    const mockError = new Error("Login failed");
    const mockCredentials = {
      email: "test@example.com",
      password: "password",
    };
    vi.spyOn(AuthService["axios"], "post").mockRejectedValue(mockError);

    await expect(AuthService.login(mockCredentials)).rejects.toThrow(mockError);
  });
});

describe("newsletter", () => {
  it("should call axios.post with the correct parameters and return the response", async () => {
    const mockResponse = {
      data: { success: true },
    };
    const mockEmail = "test@example.com";
    const axiosPostSpy = vi
      .spyOn(AuthService["axios"], "post")
      .mockResolvedValue(mockResponse);

    const result = await AuthService.newsletter(mockEmail);

    expect(axiosPostSpy).toHaveBeenCalledWith(
      "http://localhost:3000/api/newsletter",
      mockEmail
    );
    expect(result).toEqual(mockResponse);
  });

  it("should throw an error if axios.post fails", async () => {
    const mockError = new Error("Newsletter subscription failed");
    const mockEmail = "test@example.com";
    vi.spyOn(AuthService["axios"], "post").mockRejectedValue(mockError);

    await expect(AuthService.newsletter(mockEmail)).rejects.toThrow(mockError);
  });
});

describe("update", () => {
  it("should update user and return a valid user when a valid user and access token are passed", async () => {
    // 1. Mock axios behavior
    const mockedUser = {
      id: 1,
      name: "John Doe",
      email: "john.doe@example.com",
    };
    const mockedToken = "valid_token";
    const mockedResponse = {
      data: {
        user: mockedUser,
        token: mockedToken,
      },
    };
    const axiosMock = vi.spyOn(axios, "put").mockResolvedValue(mockedResponse);

    // 2. Call update function
    const updatedUser = await AuthService.update({
      id: 1,
      firstName: "Ciclano",
      lastName: "Silva",
      password: "string",
      email: "jane.doe@example.com",
    });

    // 3. Verify axios was called with the correct arguments
    expect(axiosMock).toHaveBeenCalledWith(
      "http://localhost:3000/api/auth/update",
      {
        id: 1,
        name: "Jane Doe",
        email: "jane.doe@example.com",
      },
      {
        headers: {
          Authorization: `Bearer ${mockedToken}`,
        },
      }
    );

    // 4. Verify a valid user was returned
    expect(updatedUser).toEqual(mockedUser);
  });
});

describe("others functions", () => {
  beforeEach(() => {
    localStorage.clear();
  });
  it("should remove access token from local storage when logout is called", () => {
    localStorage.setItem("accessToken", "token");
    expect(localStorage.getItem("accessToken")).toBe("token");
    AuthService.logout();
    expect(localStorage.getItem("accessToken")).toBeNull();
  });

  it("should return true when a valid access token is present in local storage", () => {
    localStorage.setItem("accessToken", "valid_token");
    expect(AuthService.isLoggedIn()).resolves.toBe(true);
  });

  it("should return true when a valid access token is passed to checkTokenValidity", async () => {
    const token = "valid_token";
    const response = { data: { success: true } };
    vi.spyOn(AuthService, "checkTokenValidity").mockResolvedValue(
      response as any
    );

    const result = await AuthService.checkTokenValidity();
    expect(result).toBe(true);
  });
});
