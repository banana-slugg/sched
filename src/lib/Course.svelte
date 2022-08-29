<script lang="ts">
    import type { CourseProps } from "./types";

    export let courseProps: CourseProps = {
        title: undefined,
        big: false,
        color: "bg-white",
        colorDark: "bg-white-dark",
    };

    let color = courseProps.color;
    let colorHover = courseProps.colorDark;
</script>

<div class="{courseProps.big ? 'row-span-2' : 'row-span-1'} bg-dracbg p-1">
    <div
        class="{color} p-2 rounded-box h-full  drop-shadow-xl hover:{colorHover} hover:drop-shadow-none"
    >
        {courseProps.title}
    </div>
</div>
