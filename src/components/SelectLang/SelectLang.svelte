<script>
  import { isLoading, _, locale, locales } from 'svelte-i18n'
</script>

<div>
  <img alt="svelte logo" src="img/svelte-logo.png" />
  {#if $isLoading}
    <p>loading translations...</p>
  {:else}
    <h1>{$_('welcome')}</h1>
    <p>
      {@html $_('descr', {
        values: {
          link: `<a href="https://svelte.dev/tutorial" target="_blank">${$_(
            'doc'
          )}</a>`,
        },
      })}
    </p>
    <select bind:value={$locale}>
      {#each $locales as locale}
        <option value={locale}>{locale}</option>
      {/each}
    </select>
  {/if}
</div>
