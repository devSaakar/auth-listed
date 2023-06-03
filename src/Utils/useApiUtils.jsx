import useSWR from "swr";

const useApiUtils = (url, skip = false) => {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error } = useSWR(!skip && url, fetcher);
  return { fetcher, data, error };
};

export default useApiUtils;
