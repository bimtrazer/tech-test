import axios from "axios";
const API_URL = "http://localhost:3000/blocks";
import { blockTest } from "../utils/data";

export const getBLocks = async (token) => {
  try {
    const { data } = await axios.get(API_URL, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return data;
  } catch (error) {
    console.error("Error fetching blocks:", error);
    return blockTest;
  }
};

export const createBlock = async (block, token) => {
  const { data } = await axios.post(API_URL, block, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });

  return data;
};

export const updateBlock = async (id, block, token) => {
  const { data } = await axios.put(`${API_URL}/${id}`, block, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });

  return data;
};

export const deleteBlock = async (id, token) => {
  await axios.delete(`${API_URL}/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
