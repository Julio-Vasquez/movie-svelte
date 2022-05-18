<script lang="ts">
  import { Router } from 'svelte-navigator'
  import PublicRoutes from './Public.svelte'
  import PrivateRoutes from './Private.svelte'
  export let auth: boolean = false
</script>

<Router primary={false}>
  {#if auth}
    <PrivateRoutes />
  {:else}
    <PublicRoutes />
  {/if}
</Router>