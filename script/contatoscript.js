function mascara_cpf(){
   var cpf = $('#cpf').val();
   if(cpf.length == 3 || cpf.length == 7){      
      $('#cpf').val( cpf+'.' );
   };
   if(cpf.length == 11){
      $('#cpf').val( cpf+'-' );
   };
};
