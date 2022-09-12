<script lang="ts">
    import Header from "./lib/Header.svelte";
    import Schedule from "./lib/Schedule.svelte";
    import Footer from "./lib/Footer.svelte";
</script>

<main class="h-screen">
    <div
        class="grid grid-rows-auto grid-flow-row h-full justify-items-center place-items-stretch gap-y-5 auto-cols-fr overflow-y-scroll overflow-x-hidden"
    >
        <div class="grid place-content-stretch p-10">
            <Header />
        </div>
        <div class="grid place-content-stretch w-full row-span-6 h-[45rem]">
            <Schedule />
        </div>
        <div class="grid place-items-end w-full">
            <Footer />
        </div>
    </div>
</main>
