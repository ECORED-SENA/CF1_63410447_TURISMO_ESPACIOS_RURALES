<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 La nueva ruralidad: conceptos y características 


    p.mb-5(data-aos="flip-up") La función tradicional del espacio rural, centrada en la producción agrícola, de madera y de materia prima para las industrias, entre otras actividades que han sustentado el desarrollo económico, ha cambiado. Hoy, estos espacios tienen nuevas funciones, centradas no solo en la producción, sino también en la prestación de servicios, como garantizar la conservación de la naturaleza y el ambiente para las generaciones futuras, así como la vida y el bienestar de la población rural y urbana, en última instancia, el bienestar humano. 

    .tarjeta.bg-color-t.shadow-soft.mb-5(data-aos="zoom-in")
      .row.justify-content-center.align-items-center
        .col-lg
          .py-3.px-5.pe-lg-0
            .row.justify-content-center.align-items-center
              .col-lg-auto
                img.img-fluid(src="@/assets/curso/tema2/2.svg", style="max-width:85px", alt="").mx-auto.mb-4.mb-lg-0
              .col-lg
                p.mb-0 Los espacios rurales cuentan con recursos como el paisaje y los espacios verdes para la recreación y el turismo, que pueden contribuir al equilibrio territorial. Estas nuevas funciones, impulsadas por los cambios en las sociedades urbanas modernas, exigen del espacio rural una mayor calidad de vida.
        .col-lg-auto.d-none.d-lg-block
          img.img-fluid(src="@/assets/curso/tema2/1.svg", style="max-width:100%", alt="").mx-auto.mb-4.mb-lg-0


    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
      .bloque-texto-g__img(
        :style="{'background-image':`url(${require('@/assets/curso/tema2/3.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Lo rural ya no es equivalente a lo agrícola, y la tercera revolución implica que lo agropecuario ya no sea la producción primaria. Tampoco se puede entender hoy lo rural como algo atrasado. Por ello, se define el medio rural como “el conjunto de zonas o regiones con actividades diversas (agricultura, pequeñas y medianas industrias, comercio, servicios) en las que se asientan pueblos, aldeas, pequeñas ciudades y centros regionales, así como espacios naturales y cultivados” (Pérez, 2001, p.384). 


    .full-width-bg.bg-fondo-3
      .p-4.p-md-5.py-md-0.pb-md-2
        p.mb-5(data-aos="fade-left") Sin embargo, estas no son las únicas actividades. También se incluyen la pesca, la ganadería, la minería, la extracción de recursos naturales, el turismo y la recreación. Los problemas que afectan a quienes habitan los espacios urbanos y rurales, así como la búsqueda del equilibrio territorial entre ambos, plantean nuevas funciones al espacio rural, que serán la oportunidad para alcanzar el equilibrio y el desarrollo. #[strong Estas funciones incluyen:] 

      .carousel-bg
        .row.justify-content-center.align-items-center.my-5
          .col-lg-3.d-none.d-lg-block(data-aos="zoom-in")
            img(src='@/assets/curso/tema2/4.png', style="max-width: 100%", alt='').m-auto
          .col-lg-8
            SlyderF.mb-5(columnas="col-lg-6 col-xxl-4")(data-aos="zoom-in-up")
              .tarjeta.bg-white.p-4.shadow-top-left-right
                  img(src='@/assets/curso/tema2/5.svg', style="max-width: 89px", alt='').mx-auto.mb-4
                  h6.text-center #[strong Equilibrio ecológico] 
                  p.text-center.text-small.lh-sm Conservación de los recursos naturales y mantenimiento y producción del paisaje. 

              .tarjeta.bg-white.p-4.shadow-top-left-right
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/tema2/6.svg', style="max-width: 89px", alt='').m-auto
                h6.text-center Producción de agua limpia 
                p.text-center.text-small.lh-sm Conservación de las fuentes de agua y aseguramiento de la producción de agua limpia. 
              
              .tarjeta.bg-white.p-4.shadow-top-left-right
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/tema2/7.svg', style="max-width: 89px", alt='').m-auto
                h6.text-center Espacios de recreación 
                p.text-center.text-small.lh-sm Provisión de áreas para la recreación y el esparcimiento al aire libre, cada vez más necesarios para la población urbana.

              .tarjeta.bg-white.p-4.shadow-top-left-right
                  img(src='@/assets/curso/tema2/8.svg', style="max-width: 89px", alt='').mx-auto.mb-4
                  h6.text-center #[strong Equilibrio territorial] 
                  p.text-center.text-small.lh-sm Logro de la fijación de la población en el área rural y freno al despoblamiento. 

              .tarjeta.bg-white.p-4.shadow-top-left-right
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/tema2/9.svg', style="max-width: 89px", alt='').m-auto
                h6.text-center Producción de recursos 
                p.text-center.text-small.lh-sm Producción de fibras, energía y recursos minerales en el espacio rural. 
              
              .tarjeta.bg-white.p-4.shadow-top-left-right
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/tema2/10.svg', style="max-width: 89px", alt='').m-auto
                h6.text-center Captura de contaminantes 
                p.text-center.text-small.lh-sm Captura y mitigación de contaminantes en el agua, aire y suelo, contribuyendo a la sostenibilidad ambiental. 


      .row.justify-content-center.mb-4
        .col-lg-10
          .tarjeta.bg-color-p20.p-4.p-lg-5
            p.mb-0(data-aos="fade-left") El reto ahora es para las regiones rurales y sus pobladores, que aún persisten en abandonar sus predios, así como para los urbanos, que deben asumir nuevas formas de consumo y reconocer monetariamente el valor de los recursos que ofrece el medio rural. Esto implica una nueva relación entre lo urbano y lo rural, un pacto, acuerdo o contrato que reconozca la interdependencia entre ambos, defina el papel del mundo rural y lo dote de los instrumentos y elementos necesarios para su desarrollo. 

      .p-4.p-md-5
        p.mb-0 #[strong Según Edelmira Pérez (2001) el medio rural se debe entender dentro de sus cuatro componentes:]

    .row.justify-content-center.my-4
      .col-lg-10
        .row.justify-content-center.align-items-stretch
          .col-lg-3.mb-4.mb-lg-0
            .tarjeta--boton.bg-color-ac20.p-4.h-100(data-aos="zoom-in-up")
              .row.justify-content-center.mb-3
                .col-7
                  figure
                    img(src='@/assets/curso/tema2/11.svg', style="max-width: 89px", alt='').m-auto
              h5.text-center Un territorio.
          
          .col-lg-3.mb-4.mb-lg-0
            .tarjeta--boton.bg-color-ac20.p-4.h-100(data-aos="zoom-in-up")
              .row.justify-content-center.mb-3
                .col-7
                  figure
                    img(src='@/assets/curso/tema2/12.svg', style="max-width: 89px", alt='').m-auto
              h5.text-center Una población.

          .col-lg-3.mb-4.mb-lg-0
            .tarjeta--boton.bg-color-ac20.p-4.h-100(data-aos="zoom-in-up")
              .row.justify-content-center.mb-3
                .col-7
                  figure
                    img(src='@/assets/curso/tema2/13.svg', style="max-width: 89px", alt='').m-auto
              h5.text-center Un conjunto de asentamientos.

          .col-lg-3.mb-4.mb-lg-0
            .tarjeta--boton.bg-color-ac20.p-4.h-100(data-aos="zoom-in-up")
              .row.justify-content-center.mb-3
                .col-7
                  figure
                    img(src='@/assets/curso/tema2/14.svg', style="max-width: 89px", alt='').m-auto
              h5.text-center Unas instituciones tanto públicas como privadas.

</template>

<script>
export default {
  name: 'Tema2',
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
