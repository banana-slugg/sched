<script>
    import about from "/assets/about.wav";
    import augh from "/assets/augh.wav";
    import bong from "/assets/bong.wav";
    import bonk from "/assets/bonk.wav";
    import gnome from "/assets/gnome.wav";
    import thwomp from "/assets/thwomp.wav";
    import Disclaimer from "./Disclaimer.svelte";

    let currentYear = new Date().getFullYear();

    let sounds = [about, augh, bong, bonk, gnome, thwomp];

    function playAbout() {
        let sound = sounds[Math.floor(Math.random() * sounds.length)];
        let soundObj = new Audio(sound);
        soundObj.volume = 0.1;
        soundObj.play();
    }
</script>

<footer class="footer footer-center p-10 bg-my-darker">
    <div class="grid grid-flow-col gap-4">
        <button class="btn btn-link btn-xs text-my-white" on:click={playAbout}>About</button>
        <Disclaimer />
        <a role="button" class="btn btn-link btn-xs text-my-white" href="https://yoshi.crimsin.net/">Yoshi</a>
    </div>
    <div class=" text-my-gray">
        <p>Copyright © {currentYear} - All rights reserved by Drewthony Boramtano</p>
    </div>
</footer>
