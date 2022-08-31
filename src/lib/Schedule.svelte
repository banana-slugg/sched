<script lang="ts">
    import Timebar from "./Timebar.svelte";
    import Cal from "./Cal.svelte";
    export const days: string[] = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
</script>

<div class="h-screen">
    <div class="h-full flex flex-col">
        <div class="flex flex-row w-full border-b border-nord3">
            <div class="w-[50px] h-full" />
            <div class="grid grid-cols-5 grid-flow-col auto-col-fr w-full divide-x divide-nord3">
                {#each days as day}
                    <div class=" text-nord4 w-full text-center">{day}</div>
                {/each}
            </div>
        </div>
        <div class="w-full h-full flex flex-row divide-x divide-nord3">
            <Timebar />

            <Cal />
        </div>
    </div>
</div>
