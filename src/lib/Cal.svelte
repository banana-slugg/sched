<script lang="ts">
    import { hours } from "./hours";
    import Card from "./Card.svelte";
</script>

<div class="h-full w-full relative bg-nord0 overflow-auto">
    <div class="grid grid-cols-5 text-light divide-x divide-nord3 grid-flow-col h-full w-full auto-cols-auto ">
        {#each Array(5) as _}
            <div class="grid grid-rows-9 divide-y divide-nord3">
                {#each Array(9) as _}
                    <div class="w-full h-full " />
                {/each}
            </div>
        {/each}
    </div>
    <div class="grid grid-cols-5 text-black grid-flow-col absolute inset-0">
        {#each Array(5) as _, i}
            <div class="grid grid-rows-9 lg:auto-rows-fr">
                {#each hours as _, j}
                    {#if j === 4 && (i === 0 || i === 2 || i === 4)}
                        <div class="wrapper row-start-5 dropdown dropdown-hover dropdown-top dropdown-end">
                            <div tabindex="0" class="bg-nord14 course">Data Science II</div>

                            <Card title="MAT-319" desc="Making pretty graphs and cleaning data with R." />
                        </div>
                    {:else if j === 5 && (i === 0 || i === 2 || i === 4)}
                        <div class="wrapper row-start-6 dropdown dropdown-hover dropdown-top dropdown-end">
                            <div tabindex="0" class="bg-nord10 course hidden sm:grid">
                                Ethical Theories and Problems
                            </div>
                            <div tabindex="0" class="bg-nord10 course grid sm:hidden">Ethics</div>

                            <Card
                                title="PHL-105"
                                desc="I'm not sure what this class is about yet but I'll let you know when I find out."
                            />
                        </div>
                    {:else if j === 7 && (i === 0 || i === 2)}
                        <div class="wrapper row-span-2 row-start-8 dropdown dropdown-hover dropdown-top dropdown-end">
                            <div tabindex="0" class="bg-nord15 course hidden sm:grid">Large Scale Architectures</div>
                            <div tabindex="0" class="bg-nord15 course grid sm:hidden whitespace-pre-line">
                                {"Large\nScale\nArch."}
                            </div>

                            <Card
                                title="SWE-400"
                                desc="Design Patterns but with databases mixed in. The book for this class was published in 2002. Isn't that interesting? I love Java!!"
                            />
                        </div>
                    {:else if j === 0 && (i === 1 || i === 3)}
                        <div class="wrapper row-span-9 row-start-1">
                            <div tabindex="0" class="bg-nord12 course">Working</div>
                        </div>
                    {:else if j === 0 && i === 2}
                        <div class="wrapper row-span-3 row-start-1">
                            <div tabindex="0" class="bg-nord12 course">Working</div>
                        </div>
                    {:else if j === 0 && i === 4}
                        <div class="wrapper row-span-2 row-start-3 dropdown dropdown-hover dropdown-top dropdown-end">
                            <div tabindex="0" class="bg-nord8 course hidden sm:grid">
                                Senior Research and Development
                            </div>
                            <div tabindex="0" class="bg-nord8 course grid sm:hidden">Senior Research and Dev.</div>

                            <Card
                                title="CSC-499"
                                desc="Capstone class for my Computer Science major. Working on a neural network to classify Magic: The Gathering card art."
                            />
                        </div>
                    {/if}
                {/each}
            </div>
        {/each}
    </div>
</div>

<style>
    .course {
        @apply rounded-md h-full text-xs sm:drop-shadow-md sm:shadow-md hover:brightness-90 shadow-black cursor-default select-none text-left tracking-tighter;
        @apply px-px lg:px-2 lg:text-left 2xl:text-base sm:tracking-normal lg:rounded-2xl;
    }

    .wrapper {
        @apply m-0 sm:m-1 w-5/6 sm:w-3/4 justify-self-center;
    }
</style>
