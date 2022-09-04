<script>
    let date = new Date();

    let day = date.getDay();
    let dayOfMonth = date.getDate();
    let month = date.getMonth();
</script>

<div class="flex justify-center">
    {#if month === 10 && (dayOfMonth === 24 || dayOfMonth === 25)}
        <h1>🦃 <span class="gradient from-yellow-800 to-nord12">Happy Thanksgiving!</span> 🦃</h1>
    {:else if day === 6 || day === 0}
        <h1>
            It's the weekend, <span class="gradient from-nord10 to-nord15">ya dingus!</span> Drew isn't working today.
        </h1>
    {:else if day === 2 || day === 4}
        <h1>Drew <span class="gradient from-nord7 to-nord14">is working</span> all day! Woo!</h1>
    {:else if day === 1 || day === 5}
        {#if month === 9 && dayOfMonth === 31}
            <h1>
                🎃 <span class="gradient from-nord12 via-nord1 to-nord12">Happy Halloween!</span> 🎃 (Drew isn't working
                today)
            </h1>
        {:else}
            <h1>Drew <span class="gradient from-nord11 to-nord12">isn't working</span> today. Yuck!</h1>
        {/if}
    {:else if day === 3}
        <h1>Drew <span class="gradient from-nord13 to-nord8">is working</span> today but only until 11am!</h1>
    {/if}
</div>

<style>
    h1 {
        @apply text-xl p-2 font-extrabold text-center w-fit pt-20 md:px-32 md:pt-32 md:text-5xl lg:text-8xl  text-nord4;
    }

    .gradient {
        @apply text-transparent bg-clip-text bg-gradient-to-r;
    }
</style>
