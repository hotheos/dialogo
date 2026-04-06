// ============================================================
// EL FORO DE LAS IDEAS — Tag Detailed Descriptions
// ============================================================
// Rich HTML descriptions for each tag, displayed in the tag modal.
// ============================================================

const TAG_DESCRIPTIONS = {
  academico: `
    <h4>¿Qué significa «Académico»?</h4>
    <p>Un académico es un investigador o profesor con <strong>formación universitaria formal</strong> (maestría, doctorado, o equivalente) en su campo de estudio — ya sea teología, estudios bíblicos, filosofía, historia, o filología.</p>
    <h4>¿Qué los distingue?</h4>
    <ul>
      <li>Publican en <strong>revistas especializadas</strong> o editoriales académicas</li>
      <li>Sus argumentos se basan en <strong>evidencia textual, arqueológica o histórica</strong>, no solo en tradición</li>
      <li>Están sujetos a <strong>revisión por pares</strong> (peer review)</li>
      <li>Pueden enseñar en universidades o seminarios reconocidos</li>
    </ul>
    <h4>Nota importante</h4>
    <p>El hecho de que alguien sea académico <strong>no significa que sea objetivo o neutral</strong>. Todos los académicos tienen presuposiciones. Esta etiqueta sólo indica que tienen credenciales formales en su área.</p>
  `,
  pastor: `
    <h4>¿Qué significa «Pastor / Predicador»?</h4>
    <p>Un pastor o predicador es un <strong>líder eclesiástico</strong> cuya vocación principal es la predicación, la enseñanza bíblica y el cuidado espiritual de una congregación o audiencia.</p>
    <h4>¿Qué los distingue?</h4>
    <ul>
      <li>Su enfoque es <strong>pastoral y aplicativo</strong>: buscan transformar vidas, no solo informar</li>
      <li>Predican regularmente en iglesias, conferencias o plataformas digitales</li>
      <li>Pueden o no tener formación académica formal</li>
      <li>Interpretan la Biblia dentro de un <strong>marco confesional</strong> (evangélico, reformado, etc.)</li>
    </ul>
  `,
  filosofo: `
    <h4>¿Qué significa «Filósofo»?</h4>
    <p>Un filósofo en este contexto es alguien que emplea las herramientas de la <strong>lógica, la metafísica y la epistemología</strong> para analizar cuestiones teológicas.</p>
    <h4>¿Qué los distingue?</h4>
    <ul>
      <li>Formulan <strong>argumentos deductivos e inductivos</strong> sobre la existencia de Dios, la naturaleza del mal, la identidad de Jesús, etc.</li>
      <li>Distinguen entre la <strong>filosofía analítica</strong> (precisión lógica) y la <strong>continental</strong> (hermenéutica)</li>
      <li>Sus preguntas centrales incluyen: <em>¿Es racional creer en Dios?</em> <em>¿Es lógicamente coherente la Trinidad?</em></li>
    </ul>
  `,
  trinitario: `
    <h4>¿Qué es el Trinitarismo?</h4>
    <p>Doctrina central del cristianismo ortodoxo que afirma que <strong>Dios es uno en esencia pero subsiste en tres personas distintas</strong>: Padre, Hijo (Jesucristo) y Espíritu Santo. Las tres personas son coeternas, coiguales y consustanciales.</p>
    <h4>Origen histórico</h4>
    <p>Fue definida formalmente en el <strong>Concilio de Nicea (325 d.C.)</strong> contra el arrianismo, y refinada en el <strong>Concilio de Constantinopla (381 d.C.)</strong>. El Credo Niceno-Constantinopolitano expresa: «Dios verdadero de Dios verdadero, engendrado, no creado, de la misma naturaleza del Padre».</p>
    <h4>Puntos clave</h4>
    <ul>
      <li><strong>Jesús es Dios:</strong> La segunda persona de la Trinidad se encarnó — plenamente Dios y plenamente hombre (unión hipostática)</li>
      <li><strong>El Espíritu Santo es persona:</strong> No una fuerza impersonal, sino la tercera persona divina</li>
      <li><strong>Monoteísmo:</strong> Los trinitarios insisten en que no son triteístas — Dios es <em>uno</em> en ser</li>
      <li><strong>Misterio:</strong> Se reconoce que la Trinidad excede la comprensión humana completa</li>
    </ul>
    <h4>Textos clave citados</h4>
    <p>Juan 1:1, Juan 10:30, Mateo 28:19, 2 Corintios 13:14, Filipenses 2:5-11, Colosenses 1:15-20.</p>
  `,
  unitario: `
    <h4>¿Qué es el Unitarismo Bíblico?</h4>
    <p>Posición teológica que afirma que <strong>solo el Padre es el Dios Todopoderoso</strong> (en el sentido pleno y absoluto). Jesús es el Mesías prometido, el Hijo de Dios, un ser humano ungido y exaltado por Dios — pero <strong>no es Dios mismo</strong>.</p>
    <h4>¿En qué se diferencia del trinitarismo?</h4>
    <ul>
      <li><strong>Jesús:</strong> Es el Hijo literal de Dios, no «Dios Hijo». Es subordinado al Padre por naturaleza, no solo en función</li>
      <li><strong>Espíritu Santo:</strong> Es el poder o presencia activa de Dios, no una tercera persona separada</li>
      <li><strong>Preexistencia:</strong> Muchos unitarios niegan la preexistencia literal de Jesús; creen que existió en el plan de Dios, no como persona literal antes de su nacimiento</li>
    </ul>
    <h4>Base bíblica</h4>
    <p>Se apoyan en textos como <strong>Juan 17:3</strong> («el único Dios verdadero, y a Jesucristo, a quien tú enviaste»), <strong>1 Corintios 8:6</strong> («para nosotros hay un solo Dios, el Padre»), <strong>1 Timoteo 2:5</strong> («un solo mediador entre Dios y los hombres, Jesucristo hombre»), y <strong>Marcos 12:29</strong> (el Shemá).</p>
    <h4>Nota</h4>
    <p>El unitarismo bíblico es diferente del <strong>Unitarismo Universalista</strong> (movimiento liberal). Los unitarios bíblicos se consideran cristianos conservadores que toman la Biblia como autoridad.</p>
  `,
  musulman: `
    <h4>¿Qué es el Islam?</h4>
    <p>Religión monoteísta abrahámica basada en el Corán, revelado al profeta Mahoma. Comparte raíces con el judaísmo y el cristianismo, pero tiene diferencias fundamentales.</p>
    <h4>Posición sobre Jesús</h4>
    <ul>
      <li>Jesús (<strong>Isa</strong>) es reconocido como <strong>profeta y Mesías</strong>, nacido de la virgen María (Maryam)</li>
      <li><strong>No es Dios</strong> ni Hijo de Dios en sentido literal — esto sería <em>shirk</em> (asociación), el pecado más grave en el Islam</li>
      <li>No fue crucificado según la tradición islámica (Corán 4:157)</li>
    </ul>
    <h4>En este directorio</h4>
    <p>Se incluyen pensadores musulmanes que participan en el <strong>diálogo interreligioso</strong> y la teología comparada, aportando la perspectiva islámica al debate cristológico.</p>
  `,
  mormon: `
    <h4>¿Qué es el Mormonismo?</h4>
    <p>Movimiento religioso fundado por Joseph Smith (1830). La Iglesia de Jesucristo de los Santos de los Últimos Días acepta la Biblia pero también el <strong>Libro de Mormón</strong>, Doctrina y Convenios, y la Perla de Gran Precio como escritura adicional.</p>
    <h4>Diferencias con el cristianismo tradicional</h4>
    <ul>
      <li><strong>Naturaleza de Dios:</strong> El Padre tiene un cuerpo físico glorificado; Padre, Hijo y Espíritu Santo son tres seres separados unidos en propósito</li>
      <li><strong>Preexistencia:</strong> Todas las almas humanas existieron antes de nacer</li>
      <li><strong>Profecía continua:</strong> La iglesia tiene un profeta viviente que recibe revelación</li>
    </ul>
    <h4>En este directorio</h4>
    <p>Se incluyen académicos de trasfondo mormón cuyo trabajo académico puede ser independiente de su afiliación religiosa.</p>
  `,
  agnostico: `
    <h4>¿Qué es el Agnosticismo?</h4>
    <p>Posición filosófica que sostiene que la <strong>existencia o inexistencia de Dios es desconocida o incognoscible</strong>. El agnóstico no afirma ni niega — suspende el juicio.</p>
    <h4>Tipos de agnosticismo</h4>
    <ul>
      <li><strong>Agnosticismo débil:</strong> «No sé si Dios existe, pero quizás sea posible saberlo»</li>
      <li><strong>Agnosticismo fuerte:</strong> «Es imposible saber si Dios existe»</li>
      <li><strong>Agnosticismo práctico:</strong> La pregunta es irrelevante para la vida cotidiana</li>
    </ul>
    <h4>En este directorio</h4>
    <p>Académicos que se identifican como agnósticos pero cuyo trabajo académico sobre el Nuevo Testamento o la historia del cristianismo sigue siendo valioso para el estudio teológico.</p>
  `,
  critico_secular: `
    <h4>¿Qué es la Crítica Secular?</h4>
    <p>Enfoque metodológico que estudia los textos bíblicos <strong>sin asumir su inspiración divina como premisa</strong>. Emplea las mismas herramientas que se usan para analizar cualquier texto antiguo.</p>
    <h4>Características</h4>
    <ul>
      <li>Aplica el <strong>método histórico-crítico</strong>: análisis de fuentes, redacción, contexto social</li>
      <li>No presupone milagros ni intervención sobrenatural</li>
      <li>Busca reconstruir lo que <em>probablemente</em> ocurrió, basándose en evidencia</li>
      <li>Un crítico secular puede ser creyente, ateo o agnóstico — lo que importa es el <strong>método</strong></li>
    </ul>
  `,
  calvinista: `
    <h4>¿Qué es el Calvinismo?</h4>
    <p>Sistema teológico basado en las enseñanzas de <strong>Juan Calvino</strong> (1509–1564), reformador francés. Es la columna vertebral de la tradición <strong>reformada</strong>.</p>
    <h4>Los 5 puntos del Calvinismo (TULIP)</h4>
    <ul>
      <li><strong>T — Depravación Total:</strong> El ser humano está espiritualmente muerto y es incapaz de buscar a Dios por sí mismo</li>
      <li><strong>U — Elección Incondicional:</strong> Dios elige a los salvos antes de la fundación del mundo, sin basarse en méritos o fe prevista</li>
      <li><strong>L — Expiación Limitada:</strong> Cristo murió eficazmente solo por los elegidos</li>
      <li><strong>I — Gracia Irresistible:</strong> Los elegidos no pueden resistir el llamado eficaz del Espíritu Santo</li>
      <li><strong>P — Perseverancia de los Santos:</strong> Los verdaderos elegidos nunca perderán su salvación</li>
    </ul>
    <h4>Controversia</h4>
    <p>Sus críticos argumentan que hace a Dios autor del mal, que es determinismo teológico, y que contradice textos sobre el amor universal de Dios (1 Tim 2:4, 2 Pedro 3:9).</p>
  `,
  molinista: `
    <h4>¿Qué es el Molinismo?</h4>
    <p>Sistema teológico desarrollado por el jesuita español <strong>Luis de Molina</strong> (1535–1600) que busca reconciliar la <strong>soberanía de Dios</strong> con el <strong>libre albedrío humano</strong>.</p>
    <h4>Concepto clave: Conocimiento Medio</h4>
    <p>Dios tiene tres tipos de conocimiento:</p>
    <ul>
      <li><strong>Natural:</strong> Sabe todo lo que <em>podría</em> pasar (todas las posibilidades)</li>
      <li><strong>Medio:</strong> Sabe lo que cada persona <em>haría libremente</em> en cualquier circunstancia posible</li>
      <li><strong>Libre:</strong> Sabe lo que <em>efectivamente</em> ocurrirá (porque eligió crear este mundo)</li>
    </ul>
    <h4>¿Cómo funciona?</h4>
    <p>Dios, conociendo lo que tú harías libremente en cada escenario posible, <strong>creó el mundo donde se cumple su plan</strong> — sin violar tu libertad. Es como un ajedrecista que conoce todos los movimientos que su oponente haría.</p>
  `,
  ex_calvinista: `
    <h4>¿Qué significa «Ex-Calvinista»?</h4>
    <p>Persona que <strong>antes sostuvo la teología calvinista</strong> (los 5 puntos o parte de ellos) pero la abandonó tras un proceso de estudio, reflexión personal, o crisis teológica.</p>
    <h4>¿Por qué es relevante?</h4>
    <ul>
      <li>Conocen el sistema <strong>desde adentro</strong> — pueden articular sus fortalezas y debilidades con experiencia directa</li>
      <li>Suelen ofrecer críticas más <strong>matizadas</strong> que alguien que nunca fue calvinista</li>
      <li>Su transición puede ser hacia el arminianismo, provisionismo, unitarismo, u otras posiciones</li>
    </ul>
    <h4>Razones comunes para dejar el calvinismo</h4>
    <p>Problemas con la expiación limitada, cuestionamiento de la elección incondicional, lectura directa de textos como 1 Timoteo 2:4 y Juan 3:16, y dificultades con la compatibilidad entre la soberanía y la responsabilidad moral.</p>
  `,
  provisionista: `
    <h4>¿Qué es el Provisionismo?</h4>
    <p>Posición soteriológica articulada principalmente por <strong>Leighton Flowers</strong> que se distingue tanto del calvinismo como del arminianismo tradicional.</p>
    <h4>Principios fundamentales</h4>
    <ul>
      <li><strong>Provisión universal:</strong> Dios provee salvación genuinamente para <em>todas</em> las personas, no solo para un grupo elegido</li>
      <li><strong>Capacidad natural:</strong> El ser humano tiene la capacidad de responder al evangelio sin necesidad de una «gracia irresistible» previa</li>
      <li><strong>Fe genuina:</strong> La fe es la respuesta libre y personal del individuo, no un don predeterminado</li>
      <li><strong>Responsabilidad real:</strong> Si el ser humano puede verdaderamente rechazar a Dios, su aceptación es genuina</li>
    </ul>
    <h4>¿En qué se diferencia del arminianismo?</h4>
    <p>Mientras el arminianismo acepta la «gracia preveniente» (Dios debe habilitar al individuo primero), el provisionismo sostiene que el ser humano <strong>ya tiene la capacidad de responder</strong> sin intervención previa especial.</p>
  `,
  cristianismo_primitivo: `
    <h4>¿Qué es el Cristianismo Primitivo?</h4>
    <p>El estudio de las creencias, prácticas y comunidades cristianas de los <strong>primeros siglos (I–IV d.C.)</strong>, antes de la consolidación definitiva del canon bíblico y los grandes credos ecuménicos.</p>
    <h4>¿Por qué es importante?</h4>
    <ul>
      <li>Revela <strong>qué creían los primeros cristianos</strong> antes de los concilios — ¿era la Trinidad una doctrina original?</li>
      <li>Analiza la <strong>diversidad</strong> del movimiento cristiano temprano: había múltiples cristologías, no una sola «ortodoxia»</li>
      <li>Estudia los escritos de los <strong>Padres de la Iglesia</strong>: Ignacio, Justino Mártir, Ireneo, Tertuliano, Orígenes</li>
    </ul>
    <h4>Preguntas centrales</h4>
    <p>¿Cuándo se empezó a adorar a Jesús como Dios? ¿Era el unitarismo la posición original? ¿Cómo evolucionó la doctrina? Estas son las preguntas que impulsan este campo.</p>
  `,
  soteriologia: `
    <h4>¿Qué es la Soteriología?</h4>
    <p>Rama de la teología que estudia la <strong>doctrina de la salvación</strong>: cómo, por qué y a quién salva Dios.</p>
    <h4>Las grandes preguntas soteriológicas</h4>
    <ul>
      <li>¿La salvación depende de la <strong>elección de Dios</strong> o de la <strong>fe del individuo</strong>?</li>
      <li>¿Puede un creyente <strong>perder la salvación</strong>?</li>
      <li>¿Murió Cristo por <strong>todos</strong> o solo por los <strong>elegidos</strong>?</li>
      <li>¿Es la fe un <strong>don de Dios</strong> o una <strong>respuesta humana</strong>?</li>
    </ul>
    <h4>Posiciones principales</h4>
    <p><strong>Calvinismo</strong> (soberanía de Dios), <strong>Arminianismo</strong> (gracia preveniente + libre albedrío), <strong>Provisionismo</strong> (capacidad natural), y <strong>Universalismo</strong> (todos serán salvos).</p>
  `,
  critica_textual: `
    <h4>¿Qué es la Crítica Textual?</h4>
    <p>Disciplina académica que analiza los <strong>manuscritos antiguos</strong> de la Biblia para reconstruir el texto más cercano al original, comparando miles de copias con sus variantes.</p>
    <h4>¿Por qué es necesaria?</h4>
    <ul>
      <li>No tenemos los <strong>manuscritos originales</strong> de ningún libro bíblico</li>
      <li>Existen más de <strong>5,800 manuscritos griegos</strong> del NT, con cientos de miles de variantes entre ellos</li>
      <li>La mayoría son diferencias menores (ortografía), pero algunas afectan el significado teológico</li>
    </ul>
    <h4>Ejemplos famosos</h4>
    <p>La <strong>Comma Johanneum</strong> (1 Juan 5:7 — la referencia trinitaria más explícita, ausente en los manuscritos más antiguos), y el <strong>final largo de Marcos</strong> (Marcos 16:9-20, añadido posterior).</p>
  `,
  ateismo: `
    <h4>¿Qué significa esta etiqueta?</h4>
    <p>Indica que el trabajo del referente se relaciona con el ateísmo. Puede significar dos cosas:</p>
    <ul>
      <li>El referente <strong>es ateo o dialogó significativamente con el ateísmo</strong></li>
      <li>El referente <strong>se especializa en responder al ateísmo</strong> (apologético)</li>
    </ul>
    <h4>En el contexto de este directorio</h4>
    <p>La mayoría de los referentes con esta etiqueta son <strong>apologistas que debaten con ateos</strong>, abordando temas como la existencia de Dios, el argumento cosmológico, el problema del mal, y la moralidad objetiva.</p>
  `,
  ex_newage: `
    <h4>¿Qué es el Movimiento New Age?</h4>
    <p>Corriente espiritual ecléctica que combina elementos de <strong>misticismo oriental, esoterismo, psicología transpersonal y paganismo</strong>. No tiene organización central; es un movimiento difuso.</p>
    <h4>Creencias comunes del New Age</h4>
    <ul>
      <li><strong>«Todos somos Dios»:</strong> Panteísmo o panenteísmo — la divinidad está en todo</li>
      <li><strong>Ley de atracción:</strong> Tus pensamientos crean tu realidad</li>
      <li><strong>Reencarnación</strong> y karma</li>
      <li><strong>Canalización:</strong> Comunicación con «seres de luz» o «maestros ascendidos»</li>
      <li><strong>Cristales, astrología y meditación trascendental</strong></li>
    </ul>
    <h4>¿Por qué «Ex-New Age»?</h4>
    <p>Esta etiqueta indica que el referente <strong>practicó activamente el New Age y lo abandonó</strong>. Ofrece una perspectiva crítica desde la <strong>experiencia personal</strong>, lo cual es distinto a criticar algo sin haberlo vivido.</p>
  `,
  griego: `
    <h4>¿Por qué importan los idiomas originales?</h4>
    <p>La Biblia fue escrita en <strong>hebreo</strong> (Antiguo Testamento), <strong>arameo</strong> (partes de Daniel y Esdras), y <strong>griego koiné</strong> (Nuevo Testamento). Las traducciones siempre pierden matices.</p>
    <h4>Ejemplos de por qué importa</h4>
    <ul>
      <li><strong>Juan 1:1:</strong> ¿«el Verbo era Dios» o «el Verbo era divino»? La gramática griega es debatida</li>
      <li><strong>La palabra <em>proskunéo</em>:</strong> ¿significa «adorar» (implicando deidad) o «rendir homenaje»?</li>
      <li><strong><em>Elohim</em> en hebreo:</strong> ¿Plural de majestad o indicación de pluralidad en Dios?</li>
    </ul>
    <h4>Esta etiqueta</h4>
    <p>Indica que el referente tiene <strong>conocimiento especializado</strong> en griego bíblico y/o hebreo, y que sus análisis frecuentemente recurren al texto original.</p>
  `,
  doctrina_dios: `
    <h4>¿Qué es la Doctrina de Dios?</h4>
    <p>También llamada <strong>teología propia</strong>, es el estudio de la naturaleza, los atributos y la identidad de Dios. Es el debate más fundamental de la teología.</p>
    <h4>Las grandes preguntas</h4>
    <ul>
      <li>¿<strong>Es Dios una Trinidad</strong> (Padre, Hijo, Espíritu Santo en una esencia)?</li>
      <li>¿<strong>Es Jesús Dios</strong>, o es el Hijo humano de Dios?</li>
      <li>¿Es el <strong>Espíritu Santo una persona</strong> o el poder de Dios?</li>
      <li>¿Cuál era la <strong>creencia original</strong> de los primeros cristianos?</li>
    </ul>
    <h4>En este directorio</h4>
    <p>Esta etiqueta marca referentes cuyo trabajo se centra particularmente en esta cuestión — el debate <strong>trinitario vs. unitario</strong>, la cristología (identidad de Cristo) y la naturaleza de Dios.</p>
  `
};
