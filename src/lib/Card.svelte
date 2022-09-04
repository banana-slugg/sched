<script lang="ts">
    export let title: string;
    export let desc: string;
</script>

<div tabindex="0" class="card xl:w-4/5 bg-nord2 shadow-xl text-nord4 dropdown-content">
    <div class="card-body p-2">
        <h2 class="text-xs card-title xl:text-lg">{title}</h2>
        <p class="text-xs xl:text-base">{desc}</p>
    </div>
</div>
