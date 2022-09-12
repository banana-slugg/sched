<script lang="ts">
    import Timebar from "./Timebar.svelte";
    import Cal from "./Cal.svelte";
    export const days: string[] = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
</script>

<div class="h-full w-full">
    <div class="h-full flex flex-col">
        <div class="flex flex-row w-full border-b border-my-dark">
            <div class="w-0 sm:w-[50px] h-full" />
            <div class="hidden sm:grid grid-cols-5 grid-flow-col auto-col-fr w-full">
                {#each days as day}
                    <div class=" text-my-gray w-full text-center text-xs md:text-base">{day}</div>
                {/each}
            </div>
        </div>
        <div class="w-full h-full flex flex-row divide-x divide-my-dark">
            <Timebar />

            <Cal />
        </div>
    </div>
</div>
