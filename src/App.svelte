<script lang="ts">
  import DinamycComponent from './components/LazyLoad/DynamicComponent.svelte'
  import { _ as t } from 'svelte-i18n'
</script>

<main>
  {$t('buttons.login')}
  <br />
  <DinamycComponent module="public" component="Login" />
</main>
