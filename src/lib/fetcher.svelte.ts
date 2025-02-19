interface Params<T> {
  fetcher: () => Promise<T>;
}

export function createFetcher<T>({ fetcher }: Params<T>) {
  let loading = $state(true);
  let data = $state.raw<T | null>(null);
  let error = $state<string | null>(null);

  async function fetchData() {
    loading = true;
    data = null;
    error = null;
    
    try {
      const result = await fetcher();
      data = result;
    } catch (err: any) {
      error = err.message;
    } finally {
      loading = false;
    }
  }

  fetchData();

  return {
    getData() {
      return data;
    },
    getError() {
      return error;
    },
    isLoading() {
      return loading;
    }
  };
}
