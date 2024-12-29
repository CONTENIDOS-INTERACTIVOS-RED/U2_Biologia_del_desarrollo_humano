<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from '@/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema: 'Desarrollo Cognitivo según Piaget',
      titulo: 'Cuestionario',
      introduccion:
        '<b>Objetivo:</b> Evaluar la comprensión de las teorías de Piaget sobre el desarrollo cognitivo.',
      barajarPreguntas: true,
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál es la primera etapa del desarrollo cognitivo según Piaget?',
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Etapa sensoriomotora', esCorrecta: true },
            { id: 'b', texto: 'Etapa preoperacional', esCorrecta: false },
            {
              id: 'c',
              texto: 'Etapa de las operaciones formales',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Etapa de las operaciones concretas',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto: 'En el contexto de Piaget, ¿qué son los esquemas?',
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Teorías inalterables', esCorrecta: false },
            {
              id: 'b',
              texto: 'Procesos solamente verbales',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Cambios pasivos en el conocimiento',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Conjuntos de acciones físicas y operaciones mentales',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            'Teniendo como referencia los estadios del desarrollo de la infancia, según Piaget, un niño entre los 3 – 6 años:',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'avanza en los intentos de comprender, explicar, organizar, manipular y construir. Ven patrones en objetos y eventos del mundo y luego intentan organizar esos patrones para explicar el mundo',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'No tienen avances en el control de su atención y memoria, confunden las apariencias superficiales con la realidad y se concentran profundamente en la experiencia',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Aumentan de manera limitada en el uso del lenguaje y otros símbolos como el juego. Dejan de jugar con fantasía',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Los niños tienen dificultas con desarrollar relaciones amorosas, estables y de aceptación con sus padres y hermanos',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto: '¿Qué proceso describe Piaget al referirse a la asimilación?',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Ajustar la estructura mental a la nueva información',
              esCorrecta: true,
            },
            { id: 'b', texto: 'Rechazar información nueva', esCorrecta: false },
            {
              id: 'c',
              texto: 'Modificar los esquemas actuales',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Comparar ideas sin integrarlas',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto: 'Un ejemplo de asimilación aplicado a los humanos es:',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Un niño que tiene una mascota gato naranja y grande ve en la calle un gato gris y mucho más pequeño, y afirma que eso no es un gato',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'El padre le explica que los gatos pueden ser más grandes o pequeños, y de distintos colores. El niño modifica su concepto de gato',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Con la práctica, el bebé aprende a sostener el biberón para poder chuparlo, acción que no era necesaria con el seno materno, incorporando una diferencia entre los dos objetos',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Ninguno de los anteriores es ejemplo de asimilación',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
