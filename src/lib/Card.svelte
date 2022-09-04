<script lang="ts">
    export let title: string;
    export let desc: string;
</script>

<div tabindex="0" class="card xl:w-80 bg-nord2 shadow-xl text-nord4 dropdown-content">
    <div class="card-body p-2 xl:p-6">
        <h2 class="text-xs card-title xl:text-2xl">{title}</h2>
        <p class="text-xs xl:text-base">{desc}</p>
    </div>
</div>
