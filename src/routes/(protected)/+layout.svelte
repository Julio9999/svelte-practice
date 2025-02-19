<script>
  let { children } = $props();
  import { beforeNavigate } from "$app/navigation";
  import { createCounter } from "$lib/counter.svelte";
  import { createFetcher } from "$lib/fetcher.svelte";  
  import { AuthService } from "@services/auth/auth.service";

  let counter = createCounter();

  let counter2 = createCounter();

  const fetchState = createFetcher({ fetcher: () => AuthService.checkSession().then(res => res.data) });

  $effect(() => {
    console.log(fetchState.isLoading())
  })
  
  beforeNavigate(() => {
    console.log("first");
  });
</script>


<button onclick={() => counter.increment()}>
   {counter.get()}
</button>

<button onclick={() => counter2.increment()}>
  {counter2.get()}
</button>


{#if fetchState.isLoading()}
  <p>Cargando..</p>
{:else}
  <p>{fetchState.getData()?.remainingDuration}</p>
{/if}

{@render children()}
