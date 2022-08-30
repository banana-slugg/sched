<script lang="ts">
    import { hourNames } from "./names";
    import Spacer from "./Spacer.svelte";
    import Ethics from "./Courses/Ethics.svelte";
    import LSArch from "./Courses/LSArch.svelte";
    import DataScience from "./Courses/DataScience.svelte";
</script>

<div
    class="grid grid-rows-{hourNames.length} grid-flow-row auto-rows-fr h-full w-full gap-1 m-0.5"
>
    {#each hourNames as _, i}
        {#if i === 4}
            <DataScience />
        {:else if i === 5}
            <Ethics />
        {:else if i === 7}
            <LSArch />
        {:else if i !== 8}
            <Spacer />
        {/if}
    {/each}
</div>
