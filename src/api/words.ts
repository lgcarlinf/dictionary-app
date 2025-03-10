import { WordRequest } from "@/interfaces/request";
import apiClient from "./client";

export const searchWord = async (word: string) => {
  const { data } = await apiClient.get<WordRequest[]>(`/entries/en/${word}`);
  return data;
};
