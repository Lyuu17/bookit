<template>
    <section class="font-nunito relative">
        <div class=" min-h-screen flex items-center justify-center relative">

            <!-- Video por defecto -->
            <div class="absolute top-0 left-0 z-1 h-full w-full">
                <img src="../imgs/header-bg.jpg" 
                    class="absolute top-0 left-0 h-full w-full object-cover">
            </div>
           
            <div  class="content absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-center z-10">
                <h3 class="text-white text-6xl uppercase text-shadow">Ve, encuentra, explora</h3>
                <p class="text-white text-4xl py-2">La esencia del verdadero descubrimiento</p>
                
            </div>

            <div class="formulario content absolute bottom-1/4 text-2xl bg-backgroundForm p-5">
                <h2></h2>
                <form action="" class="form-horizontal flex space-x-5">
                    <input type="text" class="form-control" placeholder="Nombre destino">
                    <input type="date" class="form-control" placeholder="Fecha">
                    <input type="number" class="form-control" placeholder="Precio (€)">
                    <input type="submit" class="btn" value="Buscar">
                </form>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts" type="module">

</script>

<style scoped></style>