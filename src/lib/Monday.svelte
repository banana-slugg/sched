<script lang="ts">
    import { hourNames } from "./names";
    import Course from "./Course.svelte";
    import Spacer from "./Spacer.svelte";
    import type { CourseProps } from "./types";

    const dataScience: CourseProps = {
        title: "Data Science II",
        big: false,
        color: "bg-green",
        colorDark: "bg-green-dark",
    };

    const ethics: CourseProps = {
        title: "Ethical Theories and Problems",
        big: false,
        color: "bg-cyan",
        colorDark: "bg-cyan-dark",
    };

    const beegArchitectures: CourseProps = {
        title: "Large Scale Architectures",
        big: true,
        color: "bg-pink",
        colorDark: "bg-pink-dark",
    };
</script>

<div
    class="grid grid-rows-{hourNames.length} grid-flow-row auto-rows-fr h-full w-full gap-1 m-0.5"
>
    {#each hourNames as _, i}
        {#if i === 4}
            <Course courseProps={dataScience} />
        {:else if i === 5}
            <Course courseProps={ethics} />
        {:else if i === 7}
            <Course courseProps={beegArchitectures} />
        {:else if i !== 8}
            <Spacer />
        {/if}
    {/each}
</div>
