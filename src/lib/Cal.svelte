<script lang="ts">
    import { hours } from "./hours";
</script>

<div class="h-full w-full relative">
    <div class="grid grid-cols-5 text-light divide-x divide-light grid-flow-col h-full w-full auto-cols-auto">
        {#each Array(5) as _}
            <div class="grid grid-rows-9 divide-y divide-light h-full w-full">
                {#each Array(9) as _}
                    <div class="w-full h-full" />
                {/each}
            </div>
        {/each}
    </div>
    <div class="grid grid-cols-5  text-light grid-flow-col h-full w-full absolute inset-0">
        {#each Array(5) as _, i}
            <div class="grid grid-rows-9 auto-rows-fr relative">
                {#each hours as _, j}
                    {#if j === 4 && (i === 0 || i === 2 || i === 4)}
                        <div class="m-2 text-dark row-start-5">
                            <div
                                class="bg-green rounded-3xl h-full w-full text-dark p-3 shadow-2xl hover:brightness-90"
                            >
                                Data Science II
                            </div>
                        </div>
                    {:else if j === 5 && (i === 0 || i === 2 || i === 4)}
                        <div class="m-2 text-dark row-start-6">
                            <div class="bg-cyan rounded-3xl h-full w-full text-dark p-3 shadow-2xl hover:brightness-90">
                                Ethical Theories and Problems
                            </div>
                        </div>
                    {:else if j === 7 && (i === 0 || i === 2)}
                        <div class="m-2 text-dark row-span-2 row-start-8">
                            <div class="bg-pink rounded-3xl h-full w-full text-dark p-3 shadow-2xl hover:brightness-90">
                                Large Scale Architectures
                            </div>
                        </div>
                    {:else if j === 0 && (i === 1 || i === 3)}
                        <div class="m-2 text-dark row-span-9 row-start-1">
                            <div
                                class="bg-orange rounded-3xl h-full w-full text-dark p-3 shadow-2xl hover:brightness-90"
                            >
                                Working!
                            </div>
                        </div>
                    {:else if j === 0 && i === 2}
                        <div class="m-2 text-dark row-span-3 row-start-1">
                            <div
                                class="bg-orange rounded-3xl h-full w-full text-dark p-3 shadow-2xl hover:brightness-90"
                            >
                                Working!
                            </div>
                        </div>
                    {:else if j === 0 && i === 4}
                        <div class="m-2 text-dark row-span-2 row-start-3">
                            <div
                                class="bg-purple rounded-3xl h-full w-full text-dark p-3 shadow-2xl hover:brightness-90 "
                            >
                                Senior Research and Development
                            </div>
                        </div>
                    {/if}
                {/each}
            </div>
        {/each}
    </div>
</div>
