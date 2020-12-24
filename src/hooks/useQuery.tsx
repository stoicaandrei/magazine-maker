import { useLocation } from 'react-router-dom';

function useQuery() {
  const searchParams: any = new URLSearchParams(useLocation().search);
  const result: { [key: string]: string } = {};

  for (const [key, val] of searchParams) result[key] = val;

  return result;
}

export default useQuery;
