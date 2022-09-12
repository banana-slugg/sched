<script>
    import about from "/assets/about.wav";
    import Disclaimer from "./Disclaimer.svelte";

    let currentYear = new Date().getFullYear();

    let aboutAudio = new Audio(about);

    function playAbout() {
        aboutAudio.play();
    }
</script>

<footer class="footer footer-center p-10 bg-my-dark">
    <div class="grid grid-flow-col gap-4">
        <button class="btn btn-link btn-xs text-my-white" on:click={playAbout}>About</button>
        <Disclaimer />
        <a role="button" class="btn btn-link btn-xs text-my-white" href="https://yoshi.crimsin.net/">Yoshi</a>
    </div>
    <div class="text-my-whitest">
        <p>Copyright © {currentYear} - All right reserved by Drewthony Boramtano</p>
    </div>
</footer>
