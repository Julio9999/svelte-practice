<script>
  let { children } = $props();
  import { beforeNavigate } from "$app/navigation";
  import { createFetcher } from "$lib/fetcher.svelte";
  import { AuthService } from "@services/auth/auth.service";

  const { 
    getData, 
    isLoading 
  } = createFetcher({ fetcher: () => AuthService.checkSession().then(res => res.data) });
  
  beforeNavigate(() => {
    console.log("first");
  });
</script>



{@render children()}
