<script lang="ts">
    import Schedule from "./lib/Schedule.svelte";
    import Footer from "./lib/Footer.svelte";
</script>

<main class="h-screen">
    <div class="flex justify-center">
        <h1
            class="text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-nord10 to-nord15 text-center px-52 pt-52 w-fit"
        >
            THIS IS A TITLE
        </h1>
    </div>
    <div class=" pt-52  px-20 pb-20 h-full w-full bg-nord0"><Schedule /></div>
    <Footer />
</main>
