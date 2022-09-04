<script lang="ts">
    export let title: string;
    export let desc: string;
</script>

<div tabindex="0" class="card w-80 bg-nord2 shadow-xl text-nord4 dropdown-content">
    <div class="card-body">
        <h2 class="card-title">{title}</h2>
        <p>{desc}</p>
    </div>
</div>
