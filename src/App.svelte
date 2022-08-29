<script lang="ts">
    import { hourNames, dayNames } from "./lib/names";
    import Monday from "./lib/Monday.svelte";
    import Wednesday from "./lib/Wednesday.svelte";
    import Workday from "./lib/Workday.svelte";
</script>

<main>
    <div class="h-screen bg-dracbg">
        <div class="w-full h-full p-10 ">
            <div
                class="w-full h-full flex flex-row rounded-md bg-comment items-center shadow-2xl p-1"
            >
                <div class="h-full bg-dracbg w-12 mr-0.5 flex-col flex">
                    {#each hourNames as _, j}
                        <div class="flex-grow text-dracfg">
                            {hourNames[j]}
                        </div>
                    {/each}
                </div>
                <Monday /><Workday /><Wednesday /><Workday /><Monday />
            </div>
        </div>
    </div>
</main>
