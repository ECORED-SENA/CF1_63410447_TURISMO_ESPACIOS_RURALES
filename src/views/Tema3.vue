<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido.mb-0
      .titulo-principal__numero
        span 3
      h1 Opciones y oportunidades que plantea y propone la nueva ruralidad

    .full-width-bg.bg-fondo-4
      .p-0.p-md-5
        p.mb-5.mt-4.mt-sm-0(data-aos="fade-left") La nueva ruralidad propone tres tipos de opciones y oportunidades: la multifuncionalidad, la pluriactividad y el empleo rural no agrícola. 

        .row.justify-content-center.mb-4
          .col-lg-10
            .bg-color-p20.mb-4(data-aos="zoom-in")
              .row.justify-content-center.align-items-center.mb-4
                .col-lg-auto
                  img.img-fluid(src="@/assets/curso/tema3/1.png", style="min-height:140px", alt="").mx-auto
                .col-lg
                  .p-3
                    h5.mb-1 La multifuncionalidad
                    p.mb-0 Tiene como objetivo mantener y sostener la población rural en sus lugares de origen, haciendo énfasis en los múltiples usos del suelo, entendido este último como sustento de la cultura y el paisaje, el cual debe ser preservado para la promoción de actividades como el turismo rural.
            
            .bg-color-p20.mb-4(data-aos="zoom-in")
              .row.justify-content-center.align-items-center.mb-4
                .col-lg-auto
                    img.img-fluid(src="@/assets/curso/tema3/2.png", style="min-height:140px", alt="").mx-auto
                .col-lg
                  .p-3
                    h5.mb-1 La pluriactividad
                    p.mb-0 Se refiere a las nuevas y diversas actividades que desarrollan los agricultores, y la multifuncionalidad como los nuevos usos o funciones del suelo rural.

        .tarjeta.bg-fondo-diapositiva-1.py-4.mb-5
          LineaTiempoC.color-acento-contenido(text-small).px-4(data-aos="fade-up")
            .row(titulo="Semiagrícolas").justify-content-center.mt-5
              .col-lg-7.mb-4.mb-md-0
                h4 Semiagrícolas 
                p Venta de productos en el propio predio con valor agregado. 
              .col-lg-4
                img.img-fluid(src="@/assets/curso/tema3/3.png", style="max-width:100%", alt="").mx-auto.mb-4

            .row(titulo="Recreación y turismo").justify-content-center.mt-5
              .col-lg-7.mb-4.mb-md-0
                h4 Recreación y turismo  
                p Ofertas de alojamiento, granjas museo o demostrativas, agroturismo, pesca recreativa, turismo educativo, turismo de congresos, ecoturismo, rutas alimentarias, senderismo. 
              .col-lg-4
                img.img-fluid(src="@/assets/curso/tema3/4.png", style="max-width:100%", alt="").mx-auto.mb-4

            .row(titulo="Sostenibilidad y energía").justify-content-center.mt-5
              .col-lg-7.mb-4.mb-md-0
                h4 Sostenibilidad y energía 
                p Actividades como acuerdos para el mantenimiento del paisaje, producción de energía eólica, y captura de CO2. 
              .col-lg-4
                img.img-fluid(src="@/assets/curso/tema3/5.png", style="max-width:100%", alt="").mx-auto.mb-4


        p.mb-5.mb-lg-0 #[strong Es necesario establecer que el éxito o fracaso de estas actividades planteadas dependerá de:]
    
    .tarjeta.bg-fondo-diapositiva-2.pb-4.pt-3.py-lg-5.px-4.mb-5
      SlyderA(tipo='b').mt-4(data-aos="zoom-in")
        .row.justify-content-center
          .col-lg-6
            h5.mb-4 Factores económicos
            p Complementariedad entre actividades económicas, competitividad de los precios de los productos, y calidad de la oferta.
          .col-lg-4
            figure
              img(src='@/assets/curso/tema3/6.png', alt='').mx-auto

        .row.justify-content-center
          .col-lg-6
            h5.mb-4 Factores espaciales
            p Accesibilidad, facilidades de conexión, medios de transporte, estado de conservación del paisaje, condiciones climáticas, y calidad y cantidad de actividades de esparcimiento.
          .col-lg-4
            figure
              img(src='@/assets/curso/tema3/7.png', alt='').mx-auto

        .row.justify-content-center
          .col-lg-6
            h5.mb-4 Factores socioculturales
            p Imagen regional que se maneja, influyendo en la percepción y atractivo de la región.
          .col-lg-4
            figure
              img(src='@/assets/curso/tema3/8.png', alt='').mx-auto

        .row.justify-content-center
          .col-lg-6
            h5.mb-4 Factores gubernamentales
            p Estímulo, promoción, apoyo y capacidad de gestión regional, que son clave para el desarrollo económico y social de la región.
          .col-lg-4
            figure
              img(src='@/assets/curso/tema3/9.png', alt='').mx-auto

    p.mb-4(data-aos="fade-left") El empleo rural no agrícola se refiere a las actividades desarrolladas por los hogares rurales en áreas económicas distintas al empleo en su propia explotación agrícola. Estas actividades incluyen una amplia gama de labores, desde manufactureras, como la agroindustria, hasta diversos servicios, incluido el comercio. 

    .full-width-bg.bg-fondo-2
      .p-0.p-md-5.pb-md-2
        .row.justify-content-center.my-5.mt-lg-0
          .col-lg-3.d-none.d-lg-block(data-aos="zoom-in")
            img.img-fluid(src='@/assets/curso/tema3/10.png', style="max-width: 100%", alt='').m-auto

          .col-lg-9(data-aos="fade-right")
            AcordionA(tipo="a" clase-tarjeta="tarjeta bg-color-ac20")
              div(titulo="Atracción para la población rural")
                p.mb-0 El empleo rural no agrícola es atractivo porque ofrece alternativas para superar la pobreza, algo que la actividad agrícola por sí sola a menudo no garantiza. 
              div(titulo="Estabilización y diversificación")
                p.mb-0 Este tipo de empleo estabiliza los ingresos durante las temporadas, diversifica las fuentes de ingreso y fomenta la conexión con la industria, el comercio y los servicios. 
              div(titulo="Transformación de la empresa agrícola ")
                p.mb-0 El reto para la empresa agrícola es transformarse en una empresa rural que se vincule con otros sectores para generar valor agregado, más allá de la producción agrícola. 

        p.mb-5 #[strong Las opciones para incrementar ingresos en el medio rural son:]

        .row.justify-content-center.mb-5
          .col-lg-10
            .row.justify-content-center.align-items-stretch
              .col-lg-6.mb-4.mb-lg-0
                .tarjeta--boton.card-bg.p-4.h-100.mb-4.mb-lg-0(data-aos="zoom-in")
                  img(src='@/assets/curso/tema3/11.png', style="max-width:100%", alt="").mx-auto.mb-4
                  h5.text-center Migración a las ciudades
                  p.lh-base.text-center.text-lg-left.text-small Una opción para los habitantes del medio rural es migrar a las ciudades en busca de mejores oportunidades económicas.

              .col-lg-6.mb-4.mb-lg-0
                .tarjeta--boton.card-bg.p-4.h-100.mb-4.mb-lg-0(data-aos="zoom-in")
                  img(src='@/assets/curso/tema3/12.png', style="max-width:100%", alt="").mx-auto.mb-4
                  h5.text-center Diversificación de actividades en el campo
                  p.lh-base.text-center.text-lg-left.text-small La otra opción es diversificar las actividades dentro del campo, aprovechando el empleo rural no agrícola para incrementar los ingresos y mejorar las condiciones de vida sin abandonar el entorno rural.

        p.mb-5(data-aos="fade-right") Este enfoque subraya la importancia de diversificar las fuentes de ingreso en las áreas rurales, promoviendo un desarrollo más integral que vincule la agricultura con otras actividades económicas para asegurar la sostenibilidad y el bienestar de las comunidades rurales. 

        .tarjeta.bg-color-t.shadow-soft(data-aos="zoom-in")
          .row.justify-content-center.align-items-center
            .col-xl
              .py-4.px-5.py-xl-3.pe-xl-0
                .row.justify-content-center.align-items-center
                  .col-lg-auto
                    img.img-fluid(src="@/assets/curso/tema3/13.svg", style="max-width:85px", alt="").mx-auto.mb-4.mb-lg-0
                  .col-lg
                    h5 Para reflexionar
                    p.mb-0 Es importante considerar que una manera efectiva de valorizar el mundo rural es a través del fomento del turismo. Las nuevas actividades están estrechamente vinculadas con el entorno natural, lo que convierte al turismo educativo, como las giras y visitas, y la educación ambiental, en opciones viables para impulsar el desarrollo y la sostenibilidad del medio rural.
            .col-xl-auto.d-none.d-xl-block
              img.img-fluid(src="@/assets/curso/tema2/1.svg", style="max-width:100%", alt="").mx-auto.mb-4.mb-lg-0

    Separador
    
    .titulo-segundo.color-acento-contenido#t_3_1.mb-lg-0(data-aos="flip-up")
      h2 3.1 Definición de espacio rural

    .full-width-bg.bg-fondo-5
      .p-0.p-md-5
        p.mb-5(data-aos="fade-left") El término espacio rural se refiere a una región o lugar determinado donde se llevan a cabo diversas actividades económicas, concretando así su relación con un espacio físico específico. 

        .row.justify-content-center.align-items-center.mb-5
          .col-lg-10
            .bg-color-ac20.p-5(data-aos="zoom-in")
              .row.justify-content-center.align-items-center
                .col-lg-auto
                  img.img-fluid(src="@/assets/curso/tema3/14.svg", style="max-width: 100%", alt="").mx-auto
                .col-lg
                  h5.mt-4.mt-lg-0 Vinculación con actividades económicas
                  p.mb-0 Cualquier actividad económica, incluida la actividad turística, se desarrolla en un espacio físico, haciendo tangible la experiencia y permitiendo que el turista, según su motivación o expectativa, pueda descansar, recrearse, aprender e interactuar.

        p.mb-5(data-aos="fade-left") Para entender el concepto de espacio rural, es esencial reconocer que el espacio físico es solo una de las muchas tipologías de espacio que tanto arquitectos como geógrafos han intentado organizar a través de la planificación y el ordenamiento territorial. 

        .row.justify-content-center.align-items-center.mb-5
          .col-lg-10
            .bg-color-ac20.p-5(data-aos="zoom-in")
              .row.justify-content-center.align-items-center
                .col-lg-auto
                  img.img-fluid(src="@/assets/curso/tema3/15.svg", style="max-width: 100%", alt="").mx-auto
                .col-lg
                  h5.mt-4.mt-lg-0 Dimensiones del espacio físico
                  p.mb-0 El espacio físico es tangible y se define por sus dimensiones (por ejemplo, largo por ancho), su volumen, y el tiempo que se tarda en recorrerlo.

        p(data-aos="fade-left") El espacio rural es una entidad concreta y física que alberga actividades económicas y turísticas, organizadas y planificadas para optimizar su uso y asegurar una experiencia significativa para quienes lo visitan o lo habitan. 

        p.mb-5.mb-lg-0(data-aos="fade-right") #[strong De esta manera, la siguiente figura explica rápidamente los tipos de espacio turístico:]

    .row.justify-content-center
      .col-lg-8(data-aos="zoom-in")
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Figura 1.
          span Espacios físicos  
            
        figure.d-none.d-lg-block
          img(src='@/assets/curso/tema3/figura1.svg', alt='El diagrama organiza los tipos de espacios físicos en dos categorías principales: espacio real y espacio potencial. Dentro del espacio real, se destaca el espacio vital. El espacio potencial se subdivide en espacio artificial (urbano) y espacio natural, el cual a su vez se divide en adaptado (rural) y prístino.')

        figure.d-lg-none
          img(src='@/assets/curso/tema3/figura1-r.svg', alt='El diagrama organiza los tipos de espacios físicos en dos categorías principales: espacio real y espacio potencial. Dentro del espacio real, se destaca el espacio vital. El espacio potencial se subdivide en espacio artificial (urbano) y espacio natural, el cual a su vez se divide en adaptado (rural) y prístino.')
    
    Separador

    .titulo-segundo.color-acento-contenido#t_3_2(data-aos="flip-up")
      h2 3.2 Tipologías del espacio físico

    p.mb-5(data-aos="fade-left") Las tipologías del espacio físico pueden clasificarse en varias categorías, dependiendo del enfoque y los criterios utilizados. A continuación, se presentan algunas de las tipologías más comunes: 

    .tarjeta.bg-fondo-diapositiva-2.py-5.px-4.mb-5(data-aos="zoom-in")
      SlyderA(tipo='b').mt-4
        .row.justify-content-center
          .col-lg-6
            h5.mb-4 Espacio potencial
            p Espacio que aún no existe o que solo existe en la imaginación de planificadores y personas, basado en las potencialidades de un área.
          .col-lg-4
            figure
              img(src='@/assets/curso/tema3/16.png', alt='').mx-auto

        .row.justify-content-center
          .col-lg-6
            h5.mb-4 Espacio real
            p Espacio que define sus posibilidades de uso a futuro, siendo prospectivo y proyectado.
          .col-lg-4
            figure
              img(src='@/assets/curso/tema3/17.png', alt='').mx-auto


        .row.justify-content-center
          .col-lg-6
            h5.mb-4 Espacio artificial
            p Espacio urbano creado por el hombre, adaptado según sus necesidades, opuesto al espacio rural.
          .col-lg-4
            figure
              img(src='@/assets/curso/tema3/18.png', alt='').mx-auto


        .row.justify-content-center
          .col-lg-6
            h5.mb-4 Espacio natural virgen
            p Espacio poco intervenido por el hombre, manteniendo características y condiciones naturales, como parques naturales o áreas protegidas.
          .col-lg-4
            figure
              img(src='@/assets/curso/tema3/19.png', alt='').mx-auto


        .row.justify-content-center
          .col-lg-6
            h5.mb-4 Espacio vital o ecológico
            p Espacio que ofrece un entorno favorable para la existencia de seres humanos, animales y vegetales, relacionado con ecología o nicho ecológico.
          .col-lg-4
            figure
              img(src='@/assets/curso/tema3/20.png', alt='').mx-auto


        .row.justify-content-center
          .col-lg-6
            h5.mb-4 Espacio turístico
            p Área geográfica o región caracterizada por actividades turísticas, con infraestructura y servicios que facilitan y enriquecen la experiencia del visitante.
          .col-lg-4
            figure
              img(src='@/assets/curso/tema3/21.png', alt='').mx-auto


    p.mb-5(data-aos="fade-left") Ahora bien, otra forma de caracterizar el espacio turístico es tener en cuenta el recurso (atractivos), sobre los cuales se basa la práctica turística y la condición geográfica del espacio. De esta manera se definen cuatro tipos de entornos turísticos, como lo explica el siguiente cuadro conceptual: 

    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-lg-8
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Figura 2.
          span Entornos turísticos
            
        figure.d-none.d-lg-block
          img(src='@/assets/curso/tema3/figura2.svg', alt='El diagrama clasifica los entornos turísticos en cinco categorías principales: atributos, espacios litorales, espacios urbanos, espacios rurales y espacios naturales. Dentro de la categoría de atributos, se encuentran los naturales y los culturales. En los espacios rurales, se destacan el agroturismo, y en los espacios naturales, el ecoturismo.')

        figure.d-lg-none
          img(src='@/assets/curso/tema3/figura2-r.svg', alt='El diagrama clasifica los entornos turísticos en cinco categorías principales: atributos, espacios litorales, espacios urbanos, espacios rurales y espacios naturales. Dentro de la categoría de atributos, se encuentran los naturales y los culturales. En los espacios rurales, se destacan el agroturismo, y en los espacios naturales, el ecoturismo.')

    p.mb-5(data-aos="fade-right") Ante todo, se debe concebir el turismo como un "fenómeno espacial," basado en la valoración que la sociedad otorga a ciertos recursos (atractivos) o componentes geofísicos y geoculturales. El viaje es, ante todo, un cambio, una transición de espacios, como el paso del espacio de trabajo al espacio de ocio. 

    .titulo-tres(data-aos="flip-up")
      h4 El hombre y el uso de los espacios 

    p.mb-5.mt-4(data-aos="fade-left") Observe el siguiente cuadro conceptual y analice el uso que el ser humano le da a cada uno de los espacios estudiados. 

    .row.justify-content-center.mb-5(data-aos="zoom-in")
      .col-lg-8
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Figura 3.
          span El hombre y el uso de los espacios 
            
        figure.d-none.d-lg-block
          img(src='@/assets/curso/tema3/figura3.svg', alt='El diagrama en el que se relacionan las necesidades y opciones del ser humano respecto al turismo. El diagrama empieza con la palabra hombre y se divide en dos ramas principales: necesidad y opción. La necesidad se subdivide en dos tipos: física y mental. A su vez, la opción se bifurca en descanso y relajarse, las cuales conducen al espacio turístico, que incluye turismo en playa y turismo de salud SPA.')

        figure.d-lg-none
          img(src='@/assets/curso/tema3/figura3-r.svg', alt='El diagrama en el que se relacionan las necesidades y opciones del ser humano respecto al turismo. El diagrama empieza con la palabra hombre y se divide en dos ramas principales: necesidad y opción. La necesidad se subdivide en dos tipos: física y mental. A su vez, la opción se bifurca en descanso y relajarse, las cuales conducen al espacio turístico, que incluye turismo en playa y turismo de salud SPA.')

</template>

<script>
export default {
  name: 'Tema3',
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
