<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido.mb-0
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .full-width-bg.bg-fondo-1.mb-0
      .p-sm-5
        p.mb-5.mt-4.mt-sm-0 El espacio rural ha experimentado transformaciones significativas en las últimas décadas, alejándose de su tradicional asociación con la agricultura y la producción primaria. Hoy en día, el concepto de ruralidad abarca una amplia gama de actividades y funciones, reflejando la necesidad de adaptar el entorno rural a las demandas de las sociedades modernas.

        .row.justify-content-center.mb-4
          .col-lg-10
            .bg-color-p20.mb-4
              .row.justify-content-center.align-items-center.mb-4
                .col-lg-auto
                  img.img-fluid(src="@/assets/curso/intro/1.png", style="min-height:140px", alt="").mx-auto
                .col-lg
                  .p-3
                    h5.mb-1.mt-2 Ampliación de funciones
                    p.mb-0 El espacio rural ahora incluye la conservación del medio ambiente, el desarrollo del turismo y la oferta de servicios recreativos. 
            
            .bg-color-p20.mb-4
              .row.justify-content-center.align-items-center.mb-4
                .col-lg-auto
                    img.img-fluid(src="@/assets/curso/intro/2.png", style="min-height:140px", alt="").mx-auto
                .col-lg
                  .p-3
                    h5.mb-1.mt-2 Multifuncionalidad del suelo
                    p.mb-0 La nueva ruralidad propone un enfoque donde la preservación del paisaje, el uso sostenible de los recursos naturales y la promoción de actividades no agrícolas juegan un papel crucial.

        .bg-color-t.p-4.mb-5.mb-lg-0
          p.mb-0 El enfoque de la nueva ruralidad busca mantener a la población rural en sus territorios de origen, mientras explora nuevas oportunidades económicas que contribuyan al equilibrio territorial y ecológico. 

    
    .row.justify-content-center
      .col-lg-8
        .row.justify-content-center.align-items-stretch.mb-5
          .col-lg-6.mb-4.mb-lg-0
            .tarjeta--boton.bg-fondo-tarjeta.p-4.h-100
              img(src='@/assets/curso/intro/3.svg', style="max-width:89px", alt="").mx-auto.mb-4
              h5.text-center Sostenibilidad y equilibrio
              p.lh-base.text-center.text-small Promover una multifuncionalidad del suelo que equilibre la conservación del medio ambiente con el desarrollo económico.

          .col-lg-6.mb-4.mb-lg-0
            .tarjeta--boton.bg-fondo-tarjeta.p-4.h-100
              img(src='@/assets/curso/intro/4.svg', style="max-width:89px", alt="").mx-auto.mb-4
              h5.text-center Oportunidades económicas
              p.lh-base.text-center.text-small Explorar nuevas actividades que permitan a las comunidades rurales prosperar sin abandonar sus tierras.
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
