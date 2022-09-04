<script>
    import about from "/assets/about.wav";
    import Disclaimer from "./Disclaimer.svelte";

    let currentYear = new Date().getFullYear();

    let aboutAudio = new Audio(about);

    function playAbout() {
        aboutAudio.play();
    }
</script>

<footer class="footer footer-center p-10 bg-nord3">
    <div class="grid grid-flow-col gap-4">
        <button class="btn btn-link btn-xs text-nord4" on:click={playAbout}>About</button>
        <Disclaimer />
        <a role="button" class="btn btn-link btn-xs text-nord4" href="https://yoshi.crimsin.net/">Yoshi</a>
    </div>
    <div class="text-nord6">
        <p>Copyright © {currentYear} - All right reserved by Bean Incorporated</p>
    </div>
</footer>
