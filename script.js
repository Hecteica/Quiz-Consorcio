let questions = [
    {
    numb: 1,
    question: "¿Cuántos miembros integran el Consorcio Regional de Transportes?",
    answer: "18",
    options: [
      '18',
      '19',
      '20',
      '6'
    ]
    },
    {
    numb: 2,
    question: "¿Cuál es la función principal del Consejo de Administración del Consorcio Regional de Transportes?",
    answer: 'Aprobar los planes y programas de actuación del CRT',
    options: [
      'Supervisar las cuentas bancarias del CRT',
      'Aprobar los planes y programas de actuación del CRT',
      'Redactar la Ley de la Comunidad de Madrid',
      'Designar a los titulares de los órganos internos del CRT'
    ]
    },
    {
    numb: 3,
    question:"¿Qué funciones tiene la Comisión Mixta de Transferencias?",
    answer: 'Todas las anteriores son correctas',
    options: [
      'Identificar y valorar los medios financieros, materiales y personales que se transfieren',
      'Realizar un inventario de la documentación administrativa relativa al servicio o competencias transferidas',
      'Elaborar el presupuesto anual del CRT',
      'Todas las anteriores son correctas'
    ]
    },
    {
      numb: 4,
      question:"¿Cuál es el procedimiento para modificar o ampliar la NIC?",
      answer: 'Cuatro',
      options: [
        'Tres',
        'Cuatro',
        'Cinco',
        'Seis'
      ]
    },
    {
        numb: 5,
        question:"¿Cuál es el organismo encargado de prestar el servicio de transporte público en la ciudad de Madrid?",
        answer: 'La Comunidad de Madrid',
        options: [
          'El Ayuntamiento de Madrid',
          'La Comunidad de Madrid',
          'El Consorcio Regional de Transportes',
          'Metro de Madrid, S.A.'
        ]
      },
      {
        numb: 6,
        question:"¿Cuál es el recurso principal del Consorcio Regional de Transportes?",
        answer: 'Las aportaciones de los Ayuntamientos de la Comunidad de Madrid',
        options: [
          'Las multas de tráfico impuestas en Madrid',
          'Los ingresos generados por las empresas públicas integradas en el CRT',
          'Las aportaciones de los Ayuntamientos de la Comunidad de Madrid',
          'Las subvenciones otorgadas por la Unión Europea'
        ]
      },
      {
        numb: 7,
        question:"¿Qué funciones tiene el Consorcio Regional de Transportes Públicos Regulares de Madrid?",
        answer: 'Todas las anteriores son funciones del Consorcio',
        options: [
          'Gestión y prestación del servicio',
          'La planificación de los servicios y el establecimiento de programas de explotación coordinada para todas las empresas prestadoras de los mismos',
          'Elaboración y aprobación de un marco tarifario común',
          'Todas las anteriores son funciones del Consorcio'
        ]
      },
      {
        numb: 8,
        question:"¿Cuál es la competencia del Vicepresidente del Consejo de Administración?",
        answer: 'El encargado de la supervisión, control y regulación de la circulación',
        options: [
          'La dirección inmediata de los servicios del Consorcio en el orden económico, administrativo y técnico',
          'Asistir con voz, pero sin voto, a las reuniones del Consejo de Administración',
          'Gestionar las relaciones con las empresas prestadoras de los servicios, así como con los órganos ejecutivos de las Administraciones Públicas en materias de la competencia del Consorcio, y con los sindicatos, asociaciones y usuarios',
          'Sustituir al Presidente del Consejo de Administración en caso de ausencia, incapacidad transitoria, enfermedad o fallecimiento hasta el nombramiento de nuevo Presidente'
        ]
      },
      {
        numb: 9,
        question:"¿Cuál es la competencia del Director Gerente? ",
        answer: 'Regular la circulación de trenes con seguridad',
        options: [
          'La dirección inmediata de los servicios del Consorcio en el orden económico, administrativo y técnico',
          'Asistir con voz, pero sin voto, a las reuniones del Consejo de Administración',
          'Gestionar las relaciones con las empresas prestadoras de los servicios, así como con los órganos ejecutivos de las Administraciones Públicas en materias de la competencia del Consorcio, y con los sindicatos, asociaciones y usuarios','Proponer al Consejo de Administración los nombramientos de los titulares de los órganos internos del Consorcio',
        ]
      },
      {
        numb: 10,
        question:"¿Puede el Director Gerente votar en las reuniones del Consejo de Administración?",
        answer: 'No',
        options: [
          'Si',
          'No',
          '',
          ''
        ]
      },
      {
        numb: 11,
        question:"¿Qué competencia tiene el Director Gerente en cuanto al personal y la organización interna del Consorcio?",
        answer: 'La dirección inmediata del personal y la organización interna e inspección de sus servicios',
        options: [
          'La dirección inmediata del personal y la organización interna e inspección de sus servicios',
          'Aprobar los contratos programa',
          'Representar legalmente al Consorcio',
          'Proponer e informar las cuestiones de carácter técnico del Consorcio'
        ]
      },
      {
        numb: 12,
        question:"¿Cuál es la competencia del Vicepresidente del Consejo de Administración?",
        answer: 'Sustituir al Presidente del Consejo de Administración en caso de ausencia, incapacidad transitoria, enfermedad o fallecimiento',
        options: [
          'Ejercer la dirección inmediata del personal y la organización interna e inspección de sus servicios',
          'Asistir con voz, pero sin voto, a las reuniones del Consejo de Administración',
          'Sustituir al Presidente del Consejo de Administración en caso de ausencia, incapacidad transitoria, enfermedad o fallecimiento',
          'Gestionar las relaciones con las empresas prestadoras de los servicios'
        ]
      },
      {
        numb:13,
        question:"¿Qué atribución tiene el Director Gerente en relación con los nombramientos de los titulares de los órganos internos del Consorcio?",
        answer: 'Puede proponer al Consejo de Administración los nombramientos de los titulares de los órganos internos del Consorcio',
        options: [
          'No tiene ninguna atribución en relación con los nombramientos de los titulares de los órganos internos del Consorcio',
          'Puede nombrar directamente a los titulares de los órganos internos del Consorcio sin necesidad de aprobación del Consejo de Administración',
          'Puede proponer al Consejo de Administración los nombramientos de los titulares de los órganos internos del Consorcio',
          'Puede nombrar directamente a los titulares de los órganos internos del Consorcio pero siempre en consulta con el Presidente del Consejo de Administración'

        ]
      },
      {numb: 14,
        question:"¿Cuántos representantes conforman el Comité Técnico del Consorcio?",
        answer: '15',
        options: [
          '6',
          '18',
          '4',
          '15'
        ]
      },
      {
        numb: 15,
        question:"¿Qué tipo de personalidad jurídica tienen las Empresas municipales o supramunicipales prestadoras de los servicios de transporte regulados por la presente Ley?",
        answer: 'Personalidad jurídica independiente',
        options: [
          'Personalidad jurídica conjunta',
          'Personalidad jurídica independiente',
          'Personalidad jurídica dependiente',
          'Personalidad jurídica compartida'
        ]
      },
      {
        numb: 16,
        question:"¿Quién ostenta la titularidad de las acciones de las Empresas de ellos dependientes?",
        answer: 'El Consorcio',
        options: [
          'Los Ayuntamientos',
          'La Comunidad',
          'El Consorcio',
          'Las Empresas'
        ]
      },
      {
        numb: 17,
        question:"¿Quién puede adquirir acciones o participaciones de empresas públicas de transporte previo acuerdo con el ente titular de las mismas?",
        answer: 'El Consorcio',
        options: [
          'Las Empresas municipales o supramunicipales prestadoras de los servicios de transporte',
          'Los Ayuntamientos',
          'La Comunidad',
          'El Consorcio'
        ]
      },
      {numb: 18,
        question:"¿Quién será nombrado por el Consejo de Administración del Consorcio para representarlo en aquellos Consejos, a través del cual se canalizarán las relaciones formales entre cada empresa y el Consorcio?",
        answer: 'Un Delegado',
        options: [
          'Un Delegado',
          'Un Consejero',
          'Un Directivo',
          'Un Asesor'
        ]
      },
      {
        numb: 19,
        question:"¿Qué tipo de relación tiene el Consorcio con RENFE a efectos de la prestación por ésta de los servicios que afectan exclusivamente a la Comunidad de Madrid?",
        answer: 'Relación contractual',
        options: [
          'Relación contractual',
          'Relación de dependencia',
          'Relación de colaboración',
          'Relación de competencia'
        ]
      },
      {
        numb: 20,
        question:"¿Quién elaborará el proyecto de contrato-programa con RENFE?",
        answer: 'El Consejo de Administración del Consorcio',
        options: [
          'El Consejo de Administración de RENFE',
          'La Asamblea de Madrid',
          'El Consejo de Administración del Consorcio',
          'La Consejería de Obras Públicas y Transportes de la Comunidad de Madrid'
        ]
      },
      {
        numb: 21,
        question:"¿Quién ejercerá la inspección y tramitará y resolverá los expedientes de todo tipo relativos a las Empresas titulares de concesiones comprendidas dentro de su ámbito competencial?",
        answer: 'El Consorcio',
        options: [
          'Los Ayuntamientos',
          'La Comunidad',
          'El Consorcio',
          'Las Empresas'
        ]
      },
      {
        numb: 22,
        question:"¿Qué podrá imponer el Consorcio a las Empresas titulares de concesiones comprendidas dentro de su ámbito competencial?",
        answer: 'La aplicación de tarifas combinadas',
        options: [
          'El cese de actividades',
          'La aplicación de tarifas combinadas',
          'La venta de acciones',
          'La fusión con otras empresas'
        ]
      },
      {
        numb: 23,
        question:"¿Qué podrán suscribir el Consorcio y las empresas concesionarias para definir los compromisos mutuos en función de módulos objetivos?",
        answer: 'Convenios o contratos-programa',
        options: [
          'Convenios o contratos-programa',
          'Acciones o participaciones',
          'Convenios de colaboración',
          'Contratos de venta'
        ]
      },
      {
        numb: 24,
        question:"¿A qué podrán aplicarse las aportaciones económicas a que se refiere el apartado 5 del artículo 11 de la presente Ley?",
        answer: 'Al Consorcio',
        options: [
          'A las empresas concesionarias',
          'Al Consorcio',
          'A la Comunidad',
          'A los Ayuntamientos'
        ]
      },
];
//selecting all required elements
const start_btn = document.querySelector(".start_btn button");
const info_box = document.querySelector(".info_box");
const exit_btn = info_box.querySelector(".buttons .quit");
const continue_btn = info_box.querySelector(".buttons .restart");
const quiz_box = document.querySelector(".quiz_box");
const result_box = document.querySelector(".result_box");
const option_list = document.querySelector(".option_list");
const time_line = document.querySelector("header .time_line");
const timeText = document.querySelector(".timer .time_left_txt");
const timeCount = document.querySelector(".timer .timer_sec");

// if startQuiz button clicked
start_btn.onclick = ()=>{
    info_box.classList.add("activeInfo"); //show info box
}

// if exitQuiz button clicked
exit_btn.onclick = ()=>{
    info_box.classList.remove("activeInfo"); //hide info box
}

// if continueQuiz button clicked
continue_btn.onclick = ()=>{
    info_box.classList.remove("activeInfo"); //hide info box
    quiz_box.classList.add("activeQuiz"); //show quiz box
    showQuetions(0); //calling showQestions function
    queCounter(1); //passing 1 parameter to queCounter
    startTimer(40); //calling startTimer function
    startTimerLine(0); //calling startTimerLine function
}

let timeValue =  40;
let que_count = 0;
let que_numb = 1;
let userScore = 0;
let counter;
let counterLine;
let widthValue = 0;

const restart_quiz = result_box.querySelector(".buttons .restart");
const quit_quiz = result_box.querySelector(".buttons .quit");

// if restartQuiz button clicked
restart_quiz.onclick = ()=>{
    quiz_box.classList.add("activeQuiz"); //show quiz box
    result_box.classList.remove("activeResult"); //hide result box
    timeValue = 15; 
    que_count = 0;
    que_numb = 1;
    userScore = 0;
    widthValue = 0;
    showQuetions(que_count); //calling showQestions function
    queCounter(que_numb); //passing que_numb value to queCounter
    clearInterval(counter); //clear counter
    clearInterval(counterLine); //clear counterLine
    startTimer(timeValue); //calling startTimer function
    startTimerLine(widthValue); //calling startTimerLine function
    timeText.textContent = "Tiempo"; //change the text of timeText to Time Left
    next_btn.classList.remove("show"); //hide the next button
}

// if quitQuiz button clicked
quit_quiz.onclick = ()=>{
    window.location.reload(); //reload the current window
}

const next_btn = document.querySelector("footer .next_btn");
const bottom_ques_counter = document.querySelector("footer .total_que");

// if Next Que button clicked
next_btn.onclick = ()=>{
    if(que_count < questions.length - 1){ //if question count is less than total question length
        que_count++; //increment the que_count value
        que_numb++; //increment the que_numb value
        showQuetions(que_count); //calling showQestions function
        queCounter(que_numb); //passing que_numb value to queCounter
        clearInterval(counter); //clear counter
        clearInterval(counterLine); //clear counterLine
        startTimer(timeValue); //calling startTimer function
        startTimerLine(widthValue); //calling startTimerLine function
        timeText.textContent = "Tiempo"; //change the timeText to Time Left
        next_btn.classList.remove("show"); //hide the next button
    }else{
        clearInterval(counter); //clear counter
        clearInterval(counterLine); //clear counterLine
        showResult(); //calling showResult function
    }
}

// getting questions and options from array
function showQuetions(index){
    const que_text = document.querySelector(".que_text");

    //creating a new span and div tag for question and option and passing the value using array index
    let que_tag = '<span>'+ questions[index].numb + ". " + questions[index].question +'</span>';
    // que_tag= questions[index].sort(()=> Math.random()-.5);

    let option_tag = '<div class="option"><span>'+ questions[index].options[0] +'</span></div>'
    + '<div class="option"><span>'+ questions[index].options[1] +'</span></div>'
    + '<div class="option"><span>'+ questions[index].options[2] +'</span></div>'
    + '<div class="option"><span>'+ questions[index].options[3] +'</span></div>';
    que_text.innerHTML = que_tag; //adding new span tag inside que_tag
    option_list.innerHTML = option_tag; //adding new div tag inside option_tag
    
    const option = option_list.querySelectorAll(".option");

    // set onclick attribute to all available options
    for(i=0; i < option.length; i++){
        option[i].setAttribute("onclick", "optionSelected(this)");
    }
}
// creating the new div tags which for icons
let tickIconTag = '<div class="icon tick"><i class="fas fa-check"></i></div>';
let crossIconTag = '<div class="icon cross"><i class="fas fa-times"></i></div>';

//if user clicked on option
function optionSelected(answer){
    clearInterval(counter); //clear counter
    clearInterval(counterLine); //clear counterLine
    let userAns = answer.textContent; //getting user selected option
    let correcAns = questions[que_count].answer; //getting correct answer from array
    const allOptions = option_list.children.length; //getting all option items

    if(userAns == correcAns){ //if user selected option is equal to array's correct answer
        userScore += 1; //upgrading score value with 1
        answer.classList.add("correct"); //adding green color to correct selected option
        answer.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
        console.log("Correct Answer");
        console.log("Your correct options = " + userScore);
    }else{
        answer.classList.add("incorrect"); //adding red color to correct selected option
        answer.insertAdjacentHTML("beforeend", crossIconTag); //adding cross icon to correct selected option
        console.log("Wrong Answer");

        for(i=0; i < allOptions; i++){
            if(option_list.children[i].textContent == correcAns){ //if there is an option which is matched to an array answer 
                option_list.children[i].setAttribute("class", "option correct"); //adding green color to matched option
                option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to matched option
                console.log("Auto selected correct answer.");
            }
        }
    }
    for(i=0; i < allOptions; i++){
        option_list.children[i].classList.add("disabled"); //once user select an option then disabled all options
    }
    next_btn.classList.add("show"); //show the next button if user selected any option
}

function showResult(){
    info_box.classList.remove("activeInfo"); //hide info box
    quiz_box.classList.remove("activeQuiz"); //hide quiz box
    result_box.classList.add("activeResult"); //show result box
    const scoreText = result_box.querySelector(".score_text");
    if (userScore > 3){ // if user scored more than 3
        //creating a new span tag and passing the user score number and total question number
        let scoreTag = '<span>Enhorabuena! 🎉, has obtenido <p>'+ userScore +'</p> de <p>'+ questions.length +'</p></span>';
        scoreText.innerHTML = scoreTag;  //adding new span tag inside score_Text
    }
    else if(userScore > 1){ // if user scored more than 1
        let scoreTag = '<span>Genial 😎, obtuvistes <p>'+ userScore +'</p> de <p>'+ questions.length +'</p></span>';
        scoreText.innerHTML = scoreTag;
    }
    else{ // if user scored less than 1
        let scoreTag = '<span>Lo siento 😐, solo obtuviste <p>'+ userScore +'</p> de <p>'+ questions.length +'</p></span>';
        scoreText.innerHTML = scoreTag;
    }
}

function startTimer(time){
    counter = setInterval(timer, 1000);
    function timer(){
        timeCount.textContent = time; //changing the value of timeCount with time value
        time--; //decrement the time value
        if(time < 9){ //if timer is less than 9
            let addZero = timeCount.textContent; 
            timeCount.textContent = "0" + addZero; //add a 0 before time value
        }
        if(time < 0){ //if timer is less than 0
            clearInterval(counter); //clear counter
            timeText.textContent = "Tiempo"; //change the time text to time off
            const allOptions = option_list.children.length; //getting all option items
            let correcAns = questions[que_count].answer; //getting correct answer from array
            for(i=0; i < allOptions; i++){
                if(option_list.children[i].textContent == correcAns){ //if there is an option which is matched to an array answer
                    option_list.children[i].setAttribute("class", "option correct"); //adding green color to matched option
                    option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to matched option
                    console.log("Time Off: Auto selected correct answer.");
                }
            }
            for(i=0; i < allOptions; i++){
                option_list.children[i].classList.add("disabled"); //once user select an option then disabled all options
            }
            next_btn.classList.add("show"); //show the next button if user selected any option
        }
    }
}

function startTimerLine(time){
    counterLine = setInterval(timer, 55);
    function timer(){
        time += 1; //upgrading time value with 1
        time_line.style.width = time + "px"; //increasing width of time_line with px by time value
        if(time > 560){ //if time value is greater than 549
            clearInterval(counterLine); //clear counterLine
        }
    }
}

function queCounter(index){
   
    let totalQueCounTag = '<span><p>'+ index +'</p> de <p>'+ questions.length +'</p> Preguntas</span>';
    bottom_ques_counter.innerHTML = totalQueCounTag; 
}