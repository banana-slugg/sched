<script lang="ts">
    import { hours } from "./hours";
</script>

<div class="h-full bg-nord0">
    <div class="grid grid-rows-9 grid-flow-row auto-rows-fr h-full divide-y divide-nord3 text-nord4 w-12">
        {#each hours as hour}
            <div class="bg-dracbg row-span-1 text-nord4 text-right px-1">{hour}</div>
        {/each}
    </div>
</div>
