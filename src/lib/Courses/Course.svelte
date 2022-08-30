<script lang="ts">
    import type { CourseProps } from "../types";

    export let courseProps: CourseProps = {
        title: undefined,
        big: false,
        color: "bg-white",
    };

    let color = courseProps.color;
</script>

<div class="{courseProps.big ? 'row-span-2' : 'row-span-1'} bg-dracbg p-1">
    <div
        class="{color} p-2 rounded-box h-full  drop-shadow-xl hover:brightness-90 hover:drop-shadow-none"
    >
        <p>{courseProps.title}</p>
    </div>
</div>
