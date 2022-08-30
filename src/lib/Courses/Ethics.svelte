<script lang="ts">
    import type { CourseProps } from "../types";
    import Course from "./Course.svelte";
    const ethics: CourseProps = {
        title: "Ethical Theories and Problems",
        big: false,
        color: "bg-cyan",
    };
</script>

<Course courseProps={ethics} />
