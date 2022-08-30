<script lang="ts">
    import type { CourseProps } from "../types";
    import Course from "./Course.svelte";

    const beegArchitectures: CourseProps = {
        title: "Large Scale Architectures",
        big: true,
        color: "bg-pink",
    };
</script>

<Course courseProps={beegArchitectures} />
