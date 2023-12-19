let P_si = document.getElementById("radio_Si_1")
let P_no = document.getElementById("radio_No_1")

const Radio_P = () =>{
  if(P_si.checked == true)
    document.getElementById("respuesta_p").value  = 'Si'
  if(P_no.checked == true)
    document.getElementById("respuesta_p").value  = 'No'
  }
  
P_si.addEventListener("change", Radio_P)
P_no.addEventListener("change", Radio_P)

let P1_mujer = document.getElementById("radio_mujer")
let P1_hombre = document.getElementById("radio_hombre")

const Radio_P1 = () =>{
  if(P1_mujer.checked == true)
    document.getElementById("respuesta_p1").value  = 'Mujer'
  if(P1_hombre.checked == true)
    document.getElementById("respuesta_p1").value  = 'Hombre'
  }
  
P1_mujer.addEventListener("change", Radio_P1)
P1_hombre.addEventListener("change", Radio_P1)

let P2_17 = document.getElementById("radio_17")
let P2_18 = document.getElementById("radio_18")
let P2_25 = document.getElementById("radio_25")
let P2_35 = document.getElementById("radio_35")
let P2_45 = document.getElementById("radio_45")
let P2_55 = document.getElementById("radio_55")
let P2_60 = document.getElementById("radio_mas_60")

const Radio_P2 = () =>{
  if(P2_17.checked == true)
    document.getElementById("respuesta_p2").value  = 'Menos de 18'
  if(P2_18.checked == true)
    document.getElementById("respuesta_p2").value  = '18-25'
  if(P2_25.checked == true)
    document.getElementById("respuesta_p2").value  = '26-35'
  if(P2_35.checked == true)
    document.getElementById("respuesta_p2").value  = '36-45'
  if(P2_45.checked == true)
    document.getElementById("respuesta_p2").value  = '46-55'
  if(P2_55.checked == true)
    document.getElementById("respuesta_p2").value  = '56-60'
  if(P2_60.checked == true)
    document.getElementById("respuesta_p2").value  = 'Más de 60 '
  }
P2_17.addEventListener("change", Radio_P2)
P2_18.addEventListener("change", Radio_P2)
P2_25.addEventListener("change", Radio_P2)
P2_35.addEventListener("change", Radio_P2)
P2_45.addEventListener("change", Radio_P2)
P2_55.addEventListener("change", Radio_P2)
P2_60.addEventListener("change", Radio_P2)

let P3_1 = document.getElementById("radio_panama")
let P3_2 = document.getElementById("radio_Chiriqui")
let P3_3 = document.getElementById("radio_Cocle")
let P3_4 = document.getElementById("radio_Herrera")
let P3_5 = document.getElementById("radio_Santos")
let P3_6 = document.getElementById("radio_Veraguas")
let P3_7 = document.getElementById("radio_Otra")

const Radio_P3 = () =>{
  if(P3_1.checked == true)
    document.getElementById("respuesta_p3").value  = 'Ciudad de Panamá'
  if(P3_2.checked == true)
    document.getElementById("respuesta_p3").value  = 'Chiriquí/Bocas del Toro'
  if(P3_3.checked == true)
    document.getElementById("respuesta_p3").value  = 'Coclé'
  if(P3_4.checked == true)
    document.getElementById("respuesta_p3").value  = 'Herrera'
  if(P3_5.checked == true)
    document.getElementById("respuesta_p3").value  = 'Los Santos'
  if(P3_6.checked == true)
    document.getElementById("respuesta_p3").value  = 'Veraguas'
  if(P3_7.checked == true)
    document.getElementById("respuesta_p3").value  = 'Otra región de Panamá '
  }
P3_1.addEventListener("change", Radio_P3)
P3_2.addEventListener("change", Radio_P3)
P3_3.addEventListener("change", Radio_P3)
P3_4.addEventListener("change", Radio_P3)
P3_5.addEventListener("change", Radio_P3)
P3_6.addEventListener("change", Radio_P3)
P3_7.addEventListener("change", Radio_P3)

let P4_1 = document.getElementById("radio_p4_1")
let P4_2 = document.getElementById("radio_p4_2")
let P4_3 = document.getElementById("radio_p4_3")
let P4_4 = document.getElementById("radio_p4_4")
let P4_5 = document.getElementById("radio_p4_5")
let P4_6 = document.getElementById("radio_p4_6")
let P4_7 = document.getElementById("radio_p4_1")

const Radio_P4 = () =>{
  if(P4_1.checked == true)
    document.getElementById("respuesta_p4").value  = 'Medios de comunicación'
  if(P4_2.checked == true)
    document.getElementById("respuesta_p4").value  = 'Investigación de mercado / Consultoría'
  if(P4_3.checked == true)
    document.getElementById("respuesta_p4").value  = 'Publicidad / Relaciones Públicas'
  if(P4_4.checked == true)
    document.getElementById("respuesta_p4").value  = 'Fabricante / Distribuidor / Minorista de bebidas'
  if(P4_5.checked == true)
    document.getElementById("respuesta_p4").value  = 'Bar / Restaurantes'
  if(P4_6.checked == true)
    document.getElementById("respuesta_p4").value  = 'Ninguna de las anteriores'
  }

P4_1.addEventListener("change", Radio_P4)
P4_2.addEventListener("change", Radio_P4)
P4_3.addEventListener("change", Radio_P4)
P4_4.addEventListener("change", Radio_P4)
P4_5.addEventListener("change", Radio_P4)
P4_6.addEventListener("change", Radio_P4)

let P5_1 = document.getElementById("radio_p5_1")
let P5_2 = document.getElementById("radio_p5_2")
let P5_3 = document.getElementById("radio_p5_3")
let P5_4 = document.getElementById("radio_p5_4")
let P5_5 = document.getElementById("radio_p5_5")
let P5_6 = document.getElementById("radio_p5_6")
let P5_7 = document.getElementById("radio_p5_7")
let P5_8 = document.getElementById("radio_p5_8")

const Radio_P5 = () =>{
  if(P5_1.checked == true)
    document.getElementById("respuesta_p5").value  = 'Menos de $400'
  if(P5_2.checked == true)
    document.getElementById("respuesta_p5").value  = '$400 a $599'
  if(P5_3.checked == true)
    document.getElementById("respuesta_p5").value  = '$600 a $799'
  if(P5_4.checked == true)
    document.getElementById("respuesta_p5").value  = '$800 a $999'
  if(P5_5.checked == true)
    document.getElementById("respuesta_p5").value  = '$1,000 a $1,499'
  if(P5_6.checked == true)
    document.getElementById("respuesta_p5").value  = '$1,500 a $2,500'
  if(P5_7.checked == true)
    document.getElementById("respuesta_p5").value  = 'Más de $2,500'
  if(P5_8.checked == true)
    document.getElementById("respuesta_p5").value  = 'No sabe'
  }

P5_1.addEventListener("change", Radio_P5)
P5_2.addEventListener("change", Radio_P5)
P5_3.addEventListener("change", Radio_P5)
P5_4.addEventListener("change", Radio_P5)
P5_5.addEventListener("change", Radio_P5)
P5_6.addEventListener("change", Radio_P5)
P5_7.addEventListener("change", Radio_P5)
P5_8.addEventListener("change", Radio_P5)

let P6_1 = document.getElementById("radio_p6_1")
let P6_2 = document.getElementById("radio_p6_2")

const Radio_P6 = () =>{
  if(P6_1.checked == true)
    document.getElementById("respuesta_p6").value  = 'Si'
  if(P6_2.checked == true)
    document.getElementById("respuesta_p6").value  = 'No'
  }

P6_1.addEventListener("change", Radio_P6)
P6_2.addEventListener("change", Radio_P6)


let P7_1 = document.getElementById("radio_p7_1")
let P7_2 = document.getElementById("radio_p7_2")
let P7_3 = document.getElementById("radio_p7_3")
let P7_4 = document.getElementById("radio_p7_4")

const Radio_P7 = () =>{
  if(P7_1.checked == true)
    document.getElementById("respuesta_p7").value  = 'En la última semana'
  if(P7_2.checked == true)
    document.getElementById("respuesta_p7").value  = 'Entre 2 y 4 semanas atrás'
  if(P7_3.checked == true)
    document.getElementById("respuesta_p7").value  = 'Hace más de 1 mes'
  if(P7_4.checked == true)
    document.getElementById("respuesta_p7").value  = 'Nunca las he visitado'
  }

P7_1.addEventListener("change", Radio_P7)
P7_2.addEventListener("change", Radio_P7)
P7_3.addEventListener("change", Radio_P7)
P7_4.addEventListener("change", Radio_P7)

let P8_1 = document.getElementById("radio_p8_1")
let P8_2 = document.getElementById("radio_p8_2")
let P8_3 = document.getElementById("radio_p8_3")
let P8_4 = document.getElementById("radio_p8_4")
let P8_5 = document.getElementById("radio_p8_5")
let P8_6 = document.getElementById("radio_p8_6")

const Radio_P8 = () =>{
  if(P8_1.checked == true)
    document.getElementById("respuesta_p8").value  = 'Por lo menos una vez a la semana'
  if(P8_2.checked == true)
    document.getElementById("respuesta_p8").value  = '4 a 6 veces por mes'
  if(P8_3.checked == true)
    document.getElementById("respuesta_p8").value  = '2 a 3 veces por mes'
  if(P8_4.checked == true)
    document.getElementById("respuesta_p8").value  = '1 vez por mes'
  if(P8_5.checked == true)
    document.getElementById("respuesta_p8").value  = 'Con menor frecuencia'
  if(P8_6.checked == true)
    document.getElementById("respuesta_p8").value  = 'No sabe/no recuerda'
  }

P8_1.addEventListener("change", Radio_P8)
P8_2.addEventListener("change", Radio_P8)
P8_3.addEventListener("change", Radio_P8)
P8_4.addEventListener("change", Radio_P8)
P8_5.addEventListener("change", Radio_P8)
P8_6.addEventListener("change", Radio_P8)


