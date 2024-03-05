function crypt(){
    var itext=document.getElementById("ourtext").value;
    var otext=window.btoa(itext);
    document.getElementById("outputtext").innerHTML=otext;
    }
    function decrypt(){
        var itext=document.getElementById("ourtext").value;
        var otext=window.atob(itext);
        document.getElementById("outputtext").innerHTML=otext;
        }