import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";

const useTrailers = (gameId: number) => {
  const apiClient = new APIClient(`games/${gameId}/movies`);
  return useQuery({
    queryKey: ["trailer", gameId],
    queryFn: apiClient.getAll,
  });
};
export default useTrailers;