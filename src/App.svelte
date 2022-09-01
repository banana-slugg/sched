<script lang="ts">
    import Schedule from "./lib/Schedule.svelte";
    import Footer from "./lib/Footer.svelte";
    //pt-52  px-20 pb-20
    //px-52 pt-52
</script>

<main class="h-screen">
    <div class="flex justify-center">
        <h1
            class="text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-nord10 to-nord15 text-center w-fit md:px-52 md:pt-52"
        >
            THIS IS A TITLE
        </h1>
    </div>
    <div class="h-full w-full bg-nord0 pt-0 px-0 pb-0 xl:pt-52 xl:px-20 xl:pb-20"><Schedule /></div>
    <Footer />
</main>
