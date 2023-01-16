<script>
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
  import '../app.css'
	import Sidebar from '$lib/components/Sidebar.svelte';
</script>

<div class="app">
	<Header />
  <div class="flex">
    <Sidebar/>
    <main>
      <slot />
    </main>
  </div>
	
	<Footer/>
</div>
