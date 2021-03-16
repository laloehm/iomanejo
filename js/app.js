// alert("La resolución de tu pantalla es: " + screen.width + " x " + screen.height) 

// let ancho = screen.width;

let division = document.querySelectorAll('.division');

function reportWindowSize() {
    ancho = screen.width;
    ancho.textContent = window.innerWidth;
    // division.style.height = ancho * .38 + 'px';
    division.forEach(element => {
        element.style.height = ancho * .37 + 'px';
    });
    
}

window.onresize = reportWindowSize;

let armado1 = document.querySelector('#armado_1');
let armado2 = document.querySelector('#armado_2');
let armado3 = document.querySelector('#armado_3');
let armado5 = document.querySelector('#armado_5');
let armado6 = document.querySelector('#armado_6');

let total = document.querySelector('#total');
let uno = 2290;
let dos = 3790;
let tres = 4548;
let cinco = 700;
let seis = 700;
    
// $(armado1).change(function(){
//     if( $('#armado_1').prop('checked') ) {
//         total.innerHTML = '$' + `${uno}`
//     } else {
//         total.innerHTML = '$' + '0'
//     }
// });
// $(armado2).change(function(){
//     if( $('#armado_2').prop('checked') ) {
//         total.innerHTML = '$' + `${dos}`
//     } else {
//         total.innerHTML = '$' + '0'
//     }    
// });
// $(armado3).change(function(){
//     if( $('#armado_3').prop('checked') ) {
//         total.innerHTML = '$' + `${tres}`
//     } else {
//         total.innerHTML = '$' + '0'
//     }    
// });
// $(armado5).change(function(){
//     if( $('#armado_5').prop('checked') ) {
//         total.innerHTML = '$' + `${cinco}`
//     } else {
//         total.innerHTML = '$' + '0'
//     }    
// });
// $(armado6).change(function(){
//     if( $('#armado_6').prop('checked') ) {
//         total.innerHTML = '$' + `${seis}`
//     } else {
//         total.innerHTML = '$' + '0'
//     }    
// });

let reforced = $('.reforzado');
let pricereforced = $('.precio_reforzamiento');

reforced.on('change', function () {
    // console.log(basic.val())
    switch (reforced.val()) {
        case '395':
            pricereforced.text(`$${((395))}`);
            break;
        
        case '790':
            pricereforced.text(`$${((395 * 2))}`);
            break;
        
        case '1185':
            pricereforced.text(`$${((395 * 3))}`);
            break;
        
        case '1580':
            pricereforced.text(`$${((395 * 4))}`);
            break;
        case '1975':
            pricereforced.text(`$${((395 * 5))}`);
            break;
        case '2370':
            pricereforced.text(`$${((395 * 6))}`);
            break;
        case '2765':
            pricereforced.text(`$${((395 * 7))}`);
            break;
        case '3160':
            pricereforced.text(`$${((395 * 8))}`);
            break;
        
        default:
            break;
    }
})
let horasmanejo= $('.horas_manejo');
let pricemanejo = $('.precio_manejo');

horasmanejo.on('change', function () {
    // console.log(basic.val())
    switch (horasmanejo.val()) {
        case '2990':
            pricemanejo.text(`$${((2990))} MXN`);
            break;        
        case '3780':
            pricemanejo.text(`$${((3780))} MXN`);
            break;        
        case '4570':
            pricemanejo.text(`$${((4570))} MXN`);
            break;        
        case '5360':
            pricemanejo.text(`$${((5360))} MXN`);
            break;
        case '6150':
            pricemanejo.text(`$${((6150))} MXN`);
            break;
        case '6940':
            pricemanejo.text(`$${((6940))} MXN`);
            break;
        case '7730':
            pricemanejo.text(`$${((7730))} MXN`);
            break;        
        default:
            break;
    }
})

$(':radio, :checkbox').change(updateTotal);

function updateTotal() {
    var total = 0;
    $(':radio:checked, :checkbox:checked').each(function () {
        total += parseInt(this.value);
    });    
    $('#total').text('$' + total + ' MXN');
}

$('#armado_4').change(function(){  
  let valor = $('#armado_4').val();  
  $('#armado_5').val(valor);
  console.log($('#armado_5').val())  
});
$('#horas_manejo').change(function(){  
  let valor = $('#horas_manejo').val();  
  $('#input_manejo').val(valor);
    console.log($('#input_manejo').val());
});

$('#horas_manejo').parent().click(function () {
    if ($('#input_manejo').prop('checked')) {
        $('#input_manejo').prop('checked',false)
    }
})
$('#armado_4').parent().click(function () {
    if ($('#armado_5').prop('checked')) {
        $('#armado_5').prop('checked',false)
    }
})