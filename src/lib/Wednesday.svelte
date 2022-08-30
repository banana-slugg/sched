<script lang="ts">
    import { hourNames } from "./names";
    import Course from "./Courses/Course.svelte";
    import Spacer from "./Spacer.svelte";
    import Working from "./Working.svelte";
    import type { CourseProps } from "./types";
    import LSArch from "./Courses/LSArch.svelte";

    const dataScience: CourseProps = {
        title: "Data Science II",
        big: false,
        color: "bg-green",
    };

    const ethics: CourseProps = {
        title: "Ethical Theories and Problems",
        big: false,
        color: "bg-cyan",
    };
</script>

<div
    class="grid grid-rows-{hourNames.length} grid-flow-row auto-rows-fr h-full w-full gap-1 m-0.5"
>
    {#each hourNames as _, i}
        {#if i === 0}
            <Working length="row-span-3" />
        {:else if i === 4}
            <Course courseProps={dataScience} />
        {:else if i === 5}
            <Course courseProps={ethics} />
        {:else if i === 7}
            <LSArch />
        {:else if i !== 8 && i !== 1 && i !== 2}
            <Spacer />
        {/if}
    {/each}
</div>
