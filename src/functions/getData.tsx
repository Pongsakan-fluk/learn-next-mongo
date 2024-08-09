import axios from "axios";
import useSWR from "swr";


const options = {
  revalidateOnFocus: false,
  /* suspense: true */
};


//Get All Data  AND  Get One Data
export const listData = (url: string) => {
  const fetcher = () => axios(url).then((res) => res.data);

  const { data, error, isLoading, mutate } = useSWR(url, fetcher, options);

  return {
    data: data,
    isLoading,
    error: error,
    mutate,
  };
};
