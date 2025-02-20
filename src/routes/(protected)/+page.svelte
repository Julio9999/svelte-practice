<script lang="ts">
  import * as Table from "$lib/components/ui/table/index.js";
  import { UsersService } from "@services/users/users.service";
  import { createFetcher } from "$lib/fetcher.svelte";

    const {
      getData,
      isLoading
    } = createFetcher({fetcher: () => UsersService.getUsers().then(res => res.data)})
  
</script>


{#if isLoading()}
  <p>Cargando</p>
{:else if getData()}
<Table.Root>
  <Table.Header>
    <Table.Row>
      <Table.Head class="w-[100px]">Id</Table.Head>
      <Table.Head>Nombre</Table.Head>
      <Table.Head>Correo</Table.Head>
    </Table.Row>
  </Table.Header>
  <Table.Body>
    {#each getData() || [] as user, i (i)}
      <Table.Row>
        <Table.Cell>{user.id}</Table.Cell>
        <Table.Cell>{user.name}</Table.Cell>
        <Table.Cell>{user.email}</Table.Cell>
      </Table.Row>
    {/each}
  </Table.Body>
</Table.Root>
{/if}

