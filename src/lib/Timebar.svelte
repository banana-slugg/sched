<script lang="ts">
    import { hours } from "./hours";
</script>

<div class="h-full bg-my-darkest">
    <div class="grid grid-rows-9 grid-flow-row auto-rows-fr h-full divide-y divide-my-dark text-my-white">
        {#each hours as hour}
            <p class="bg-dracbg row-span-1 text-my-white text-right px-1 text-sm lg:text-base">{hour}</p>
        {/each}
    </div>
</div>
