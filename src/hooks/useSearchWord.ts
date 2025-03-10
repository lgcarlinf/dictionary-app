import { searchWord } from "@/api/words";
import { useQuery } from "@tanstack/react-query";

export const useSearchWord = (word: string) => {
  return useQuery({
    queryKey: ["searchWord", word],
    queryFn: () => searchWord(word),
    enabled: !!word,
  });
};
