import qs from 'qs';

type AppFetchParams = Omit<RequestInit, 'body'> & {
  resource: string;
  query?: Record<string, unknown>;
  body?: any;
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
      body: params.body && JSON.stringify(params.body),
      headers: {
        'content-type': 'application/json',
        ...params.headers,
      },
    }
  );

  return await response.json();
};
