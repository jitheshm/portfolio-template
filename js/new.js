$(document).ready(()=>{
    $('#gform').submit((e)=>{
        e.preventDefault();
        $.ajax({
            url:'https://script.google.com/macros/s/AKfycbxSGC9D8trUw-sUIcSUgBzaFXpbibUFX5tMczKsQ41v7MLof8BCEMYgpqHwbY4-OWeXmw/exec',
            type: 'POST',
            data: $('#gform').serialize()
          }).done(()=>{
            alert("form submitted successfully");
            window.location.reload();
          })
    })
})