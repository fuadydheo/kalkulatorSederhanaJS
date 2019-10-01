function hitung(){

    var myform = document.form1;
    var x = eval(myform.x.value);
    var y = eval(myform.y.value);
    var pil = myform.opt.value;

    if(pil == "tambah"){
        var z = x+y;
    }else if (pil == "kurang"){
        var z = x-y;
    }else if (pil == "kali"){
        var z = x*y;
    }else if (pil == "bagi"){
        var z= x/y;
    }
    myform.hasil.value = z;
    myform.x.value = "";
    myform.y.value = "";
    }
    
    function resetForm(){
        document.form1.reset();
    }


