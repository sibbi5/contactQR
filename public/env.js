$(document).ready(function(){
  console.log('Ready')
  let idnumber;
  let currentSongNumber = 0;
  let songs = null;
  //DB calling funciton
  const dbcallingfunction=(idnumber)=>{

    let data = {
      id : idnumber
    }
  
    $.get('/messages',data, function(messages){
      $('#messageindox').empty();
      messages.forEach((message)=>{
        $('#messageindox').append('<div class="row">'+message.message+'</div>')
      })
      
    })

  }
  dbcallingfunction(1);
  songs = ["song-a","song-b","song-c","song-d","song-e"]

  //click function for the Intention song
    $("#intentionImage").click(function () {
      $("#sheet").css("display", "none");
      // alert('Thank you for clicking button 1')
      idnumber= 1;
      currentSongNumber = idnumber-1;

    dbcallingfunction(idnumber); 
    document.getElementById("my-audio").setAttribute("src", `assets/${songs[idnumber-1]}.mp3`);
    });

  //click function for the Lovemelikeyoudo song
  // $(function () {
    $("#lovemelikeyoudoImage").click(function () {
      $("#sheet").css("display", "none");
      // alert('Thank you for clicking button 2')
      idnumber= 2;
      currentSongNumber = idnumber-1;

      dbcallingfunction(idnumber);
      document.getElementById("my-audio")
      .setAttribute("src", `assets/${songs[idnumber-1]}.mp3`);
    });

//click function for blankspace song
  $("#blankspaceImage").click(function () {
    $("#sheet").css("display", "none");
    // alert('Thank you for clicking button 2')
    idnumber= 3;
    currentSongNumber = idnumber-1;
    
    dbcallingfunction(idnumber);
    document.getElementById("my-audio")
    .setAttribute("src", `assets/${songs[idnumber-1]}.mp3`);
  });

  //click function for girlslikeyouImage song
  $("#girlslikeyouImage").click(function () {
    $("#sheet").css("display", "none");
    // alert('Thank you for clicking button 2')
    idnumber= 4;
    currentSongNumber = idnumber-1;
    
    dbcallingfunction(idnumber);
    document.getElementById("my-audio")
    .setAttribute("src", `assets/${songs[idnumber-1]}.mp3`);
  });

  //click function for memoriesImage song
  $("#memoriesImage").click(function () {
    $("#sheet").css("display", "none");
    // alert('Thank you for clicking button 2')
    idnumber= 5;
    currentSongNumber = idnumber-1;
    
    dbcallingfunction(idnumber);
    document.getElementById("my-audio")
    .setAttribute("src", `assets/${songs[idnumber-1]}.mp3`);
  });


const playNextSong=()=>{
    // alert('Playling next song')
    if (currentSongNumber >= songs.length - 1) {
        currentSongNumber = 0;
    } else {
        currentSongNumber = currentSongNumber + 1;
    }
    dbcallingfunction(currentSongNumber+1); 
    document
    .getElementById("my-audio")
    .setAttribute("src", `assets/${songs[currentSongNumber]}.mp3`);
  }

$('#nextButton').click(playNextSong)

})
