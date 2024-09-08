<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    #Actividad                
      <Actividad :cuestionario="cuestionario" />

</template>

<script>
import Actividad from '@/components/actividad/Actividad'
export default {
  name: 'ActividadDidactica',
  components: { Actividad },
  data: () => ({
    cuestionario: {
      tema: 'La nueva ruralidad',
      titulo: 'Cuestionario',
      introduccion:
        'Esta actividad le permitirá determinar el grado de apropiación de los contenidos del componente formativo: <b>El espacio rural y las nuevas posibilidades</b>.<br> Lea cada enunciado y luego seleccione la respuesta correcta según corresponda.',
      barajarPreguntas: true,
      preguntas: [
        {
          id: 1,
          texto:
            '¿Qué concepto ha evolucionado más allá de la agricultura en el contexto rural?',
          imagen: require('@/assets/actividad/p1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Nueva ruralidad.', esCorrecta: true },
            { id: 'b', texto: 'Espacio urbano.', esCorrecta: false },
            { id: 'c', texto: 'Agricultura sostenible.', esCorrecta: false },
            { id: 'd', texto: 'Ganadería intensiva.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            '¿Cuál es uno de los objetivos principales de la multifuncionalidad del suelo en la nueva ruralidad?',
          imagen: require('@/assets/actividad/p2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Expandir las áreas urbanas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Mantener y sostener la población rural en sus lugares de origen.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Aumentar la producción industrial.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Reducir el turismo en zonas rurales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            '¿Qué espacio se refiere a un área completamente desarrollada por el hombre?',
          imagen: require('@/assets/actividad/p3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Espacio Artificial (Urbano).',
              esCorrecta: true,
            },
            { id: 'b', texto: 'Espacio Prístino.', esCorrecta: false },
            { id: 'c', texto: 'Espacio Natural.', esCorrecta: false },
            { id: 'd', texto: 'Espacio Vital.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            '¿Cuál de los siguientes es un ejemplo de espacio natural adaptado?',
          imagen: require('@/assets/actividad/p4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Ciudad.', esCorrecta: false },
            {
              id: 'b',
              texto: 'Área rural modificada para actividades turísticas.',
              esCorrecta: true,
            },
            { id: 'c', texto: 'Parque industrial.', esCorrecta: false },
            { id: 'd', texto: 'Zona comercial.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            '¿Qué tipo de espacio se caracteriza por la ausencia de intervención humana significativa?',
          imagen: require('@/assets/actividad/p1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Espacio artificial.', esCorrecta: false },
            { id: 'b', texto: 'Espacio potencial.', esCorrecta: false },
            { id: 'c', texto: 'Espacio prístino.', esCorrecta: true },
            { id: 'd', texto: 'Espacio vital.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto:
            '¿Qué actividad es promovida como una forma de valorizar el mundo rural?',
          imagen: require('@/assets/actividad/p2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Turismo educativo.', esCorrecta: true },
            { id: 'b', texto: 'Expansión urbana.', esCorrecta: false },
            { id: 'c', texto: 'Agricultura intensiva.', esCorrecta: false },
            { id: 'd', texto: 'Minería a gran escala.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto:
            '¿Cuál de las siguientes es una opción económica para incrementar los ingresos en el entorno rural?',
          imagen: require('@/assets/actividad/p3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Migrar a las ciudades.', esCorrecta: false },
            {
              id: 'b',
              texto: 'Diversificar las actividades en el campo.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Reducir la actividad turística.',
              esCorrecta: false,
            },
            { id: 'd', texto: 'Monocultivo agrícola.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto:
            '¿Qué tipo de espacio se refiere a áreas que existen en la imaginación de los planificadores?',
          imagen: require('@/assets/actividad/p4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Espacio artificial.', esCorrecta: false },
            { id: 'b', texto: 'Espacio potencial.', esCorrecta: true },
            { id: 'c', texto: 'Espacio prístino.', esCorrecta: false },
            { id: 'd', texto: 'Espacio vital.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            '¿Qué elemento es fundamental para establecer una relación sostenible entre lo rural y lo urbano?',
          imagen: require('@/assets/actividad/p1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Industrialización rural.', esCorrecta: false },
            {
              id: 'b',
              texto: 'Aumento de la población urbana.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Reconocer la interdependencia entre ambos espacios.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Expansión de zonas comerciales en áreas rurales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            '¿Cuál es uno de los cambios demográficos que ha experimentado el medio rural?',
          imagen: require('@/assets/actividad/p2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Aumento de la población rural.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Estabilidad en la agricultura.',
              esCorrecta: false,
            },
            { id: 'c', texto: 'Éxodo masivo.', esCorrecta: true },
            { id: 'd', texto: 'Centralización del poder.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
  computed: {},
  methods: {},
}
</script>
