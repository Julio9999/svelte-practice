<script module lang="ts">
  export async function load({ event }: any) {
    console.log({ event });
    return {
      user: event.locals.user,
    };
  }
</script>

<script>
  let user: any;
  let { children } = $props();
  import "../app.css";
</script>

{@render children()}
