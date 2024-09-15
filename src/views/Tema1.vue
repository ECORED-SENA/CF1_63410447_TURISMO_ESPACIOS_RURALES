<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Panorama y crisis del mundo rural
      
    p.mb-4 Según Edelmira Pérez (2001), el medio rural ha experimentado tres grandes cambios en los últimos años: 

    .row.justify-content-center.align-items-stretch
      .col-lg-4.mb-4.mb-lg-0
        .tarjeta.bg-color-ac20.p-3.h-100
          .row.justify-content-center.align-items-center
            .col-lg-auto
              img.img-fluid(src="@/assets/curso/tema1/1.svg", style="max-width:80px", alt="").mx-auto.mb-4.mb-lg-0
            .col-lg
              p.mb-0.text-center.text-lg-left.lh-sm.text-md #[strong A nivel demográfico:] el éxodo masivo.

      .col-lg-4.mb-4.mb-lg-0
        .tarjeta.bg-color-ac20.p-3.h-100
          .row.justify-content-center.align-items-center
            .col-lg-auto
              img.img-fluid(src="@/assets/curso/tema1/2.svg", style="max-width:80px", alt="").mx-auto.mb-4.mb-lg-0
            .col-lg
              p.mb-0.text-center.text-lg-left.lh-sm.text-md #[strong A nivel económico:] el declive de la agricultura.

      .col-lg-4.mb-4.mb-lg-0
        .tarjeta.bg-color-ac20.p-3.h-100
          .row.justify-content-center.align-items-center
            .col-lg-auto
              img.img-fluid(src="@/assets/curso/tema1/3.svg", style="max-width:80px", alt="").mx-auto.mb-4.mb-lg-0
            .col-lg
              p.mb-0.text-center.text-lg-left.lh-sm.text-md #[strong A nivel institucional:] la descentralización, que otorga mayor poder a lo local y regional.

    .full-width-bg.bg-fondo-2
      .p-4.p-md-5
        .bg-color-p10.mb-5
          .row.justify-content-center.align-items-center
            .col-lg-auto.d-lg-none.d-xl-block
              img.img-fluid(src="@/assets/curso/tema1/4.png", style="min-height:417px", alt="").mx-auto
            .col-lg
              .p-4.pe-xl-5
                p.mb-0 El modelo de desarrollo rural se encuentra en una crisis profunda, y es difícil definir su papel en el mundo actual. Apenas se está empezando a comprender cuáles son las nuevas funciones que debe asumir. Esta incertidumbre ha generado desmotivación entre la población rural, especialmente entre los jóvenes que ya no desean trabajar en el campo. Además, los recursos se están degradando, las instituciones no cumplen con su rol adecuadamente, y existen vacíos en sus competencias. En este contexto, los agricultores se encuentran a merced del mercado, sin saber cómo asegurar su manutención, producir y ser competitivos. Es urgente que el medio rural asuma rápidamente las nuevas funciones que el posmodernismo y las sociedades modernas le exigen. 

        p.mb-5 #[strong Los desafíos y oportunidades en el medio rural son:]


        .row.justify-content-center
          .col-lg-10
            .row.justify-content-center.align-items-stretch
              .col-lg-6.mb-4.mb-lg-0
                .tarjeta--boton.card-bg.p-4.h-100.mb-4.mb-lg-0
                  img(src='@/assets/curso/tema1/5.png', style="max-width:100%", alt="").mx-auto.mb-4
                  h5.text-center Crisis del sector agropecuario
                  p.lh-base.text-center.text-lg-left.text-small La crisis en el sector agropecuario ha obligado a buscar nuevas oportunidades, destacando el aprovechamiento de un paisaje relativamente poco contaminado como el principal recurso de las áreas rurales.

              .col-lg-6.mb-4.mb-lg-0
                .tarjeta--boton.card-bg.p-4.h-100.mb-4.mb-lg-0
                  img(src='@/assets/curso/tema1/6.png', style="max-width:100%", alt="").mx-auto.mb-4
                  h5.text-center Dificultades tecnológicas e industrialización
                  p.lh-base.text-center.text-lg-left.text-small La tecnología ha impulsado la industrialización de la agricultura, intensificando el uso de recursos de capital. Sin embargo, sectores agrícolas que no pueden acceder al mercado de capitales y que cuentan con pequeños predios han sido marginados, lo que ha generado el abandono de los campos.

        p.mt-5 Se hace necesario plantear un nuevo enfoque de desarrollo basado en el territorio, pues este será determinante en el éxito o fracaso de cualquier estrategia. Es importante configurar un proyecto que permita a los actores locales e instituciones adquirir cuatro capacidades clave:

    .row.justify-content-center.align-items-center.bg-h80-p10
      .col-lg-10
        .row.justify-content-center.align-items-center
          .col-lg-6
            img.img-fluid(src='@/assets/curso/tema1/7.png', style="max-width:403px", alt="").mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0
          .col-lg-6
            ul.custom-list.mb-0
              li.mb-1 Valorar su entorno.
              li.mb-1 Actuar juntos.
              li.mb-1 Crear vínculos entre sectores.
              li.mb-0 Establecer relaciones con otros territorios y el resto del mundo.

</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
