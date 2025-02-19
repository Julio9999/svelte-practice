<script lang="ts">
  import { onMount } from "svelte";
  import { UsersService } from "@services/users/users.service";

    onMount(async() => {
        const res = await UsersService.getUsers()
    })
</script>

<p>Pagina principal</p>
