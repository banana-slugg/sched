<script lang="ts">
    import type { CourseProps } from "../types";
    import Course from "./Course.svelte";
    const dataScience: CourseProps = {
        title: "Data Science II",
        big: false,
        color: "bg-green",
    };
</script>

<Course courseProps={dataScience} />
