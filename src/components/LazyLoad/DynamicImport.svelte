<script lang="ts">
  import Loading from '../Loading/Loading.svelte'

  export let path: string, module: string

  const lazy = import(`./../../pages/${module}/${path}/${path}.svelte`).then(
    module => module.default
  )
</script>

{#await lazy}
  <Loading message="Loading Component" />
{:then Component}
  <Component />
{:catch error}
  <p>Something went wrong: {error.message}</p>
{/await}
