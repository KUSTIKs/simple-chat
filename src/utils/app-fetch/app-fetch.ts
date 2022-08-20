import qs from 'qs';

type AppFetchParams = RequestInit & {
  resource: string;
  query?: Record<string, unknown>;
};

export const appFetch = async <T>({
  resource,
  query,
  ...params
}: AppFetchParams): Promise<T> => {
  const queryString = qs.stringify(query, { arrayFormat: 'repeat' });
  const response = await fetch(
    `http://localhost:5000/${resource}?${queryString}`,
    {
      ...params,
    }
  );

  return await response.json();
};
