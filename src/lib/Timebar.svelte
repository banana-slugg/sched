<script lang="ts">
    import { hours } from "./hours";
</script>

<div class="h-full">
    <div class="grid grid-rows-9 grid-flow-row auto-rows-fr h-full divide-y divide-light text-light w-12">
        {#each hours as hour}
            <div class="bg-dracbg row-span-1 text-dracfg">{hour}</div>
        {/each}
    </div>
</div>
