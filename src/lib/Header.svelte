<script>
    let date = new Date();

    let day = date.getDay();
    let dayOfMonth = date.getDate();
    let month = date.getMonth();
    let unix = Date.now(); //1670734800000
</script>

<div class="flex justify-center prose xl:prose-2xl">
    {#if unix > 1670734800000}
        <h1><span class="gradient from-my-red via-my-green to-my-blue">Drew Graduated!</span> 🥳</h1>
    {:else if month === 10 && (dayOfMonth === 24 || dayOfMonth === 25)}
        <h1>🦃 <span class="gradient from-yellow-800 to-my-orange">Happy Thanksgiving!</span> 🦃</h1>
    {:else if day === 6 || day === 0}
        <h1>
            It's the weekend, <span class="gradient from-my-blue to-my-pink">ya dingus!</span> Drew isn't working today.
        </h1>
    {:else if day === 2 || day === 4}
        <h1>Drew <span class="gradient from-my-cyan to-my-green">is working</span> all day! Woo!</h1>
    {:else if day === 1 || day === 5}
        {#if month === 9 && dayOfMonth === 31}
            <h1>
                🎃 <span class="gradient from-my-orange via-my-more-darker to-my-orange">Happy Halloween!</span> 🎃 (Drew
                isn't working today)
            </h1>
        {:else}
            <h1>Drew <span class="gradient from-my-red to-my-orange">isn't working</span> today. Cringe!</h1>
        {/if}
    {:else if day === 3}
        <h1>Drew <span class="gradient from-my-yellow to-my-purple">is working</span> today but only until 11am!</h1>
    {/if}
</div>

<style>
    h1 {
        @apply text-center w-fit text-my-white;
    }

    .gradient {
        @apply text-transparent bg-clip-text bg-gradient-to-r;
    }
</style>
