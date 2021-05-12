p1Name = localStorage.getItem("player1_name"); 
p2Name = localStorage.getItem("player2_name");

p1Score = 0;
p2Score = 0; 

document.getElementById("player1_name").innerHTML = p1Name + ":";
document.getElementById("player2_name").innerHTML = p2Name + ":";

document.getElementById("player1_score").innerHTML = p1Score;
document.getElementById("player2_score").innerHTML = p2Score;

document.getElementById("player_question").innerHTML = "Question Turn -" + p1Name;
document.getElementById("player_answer").innerHTML = "Answer Turn -" + p2Name;


function send(){
    word = document.getElementById("word").value;
    W = word.toLowerCase();
    console.log("Word =" + W);

    ch1 = w.charAt(1);
    console.log(ch1);

    lenDiv2 = Math.floor(W.length / 2);
    ch2 = w.charAt(lenDiv2);
    console.log(ch2);

    lenMinus1 = W.length - 1;
    ch3 = W.charAt(lenMinus1);
    console.log(ch3); 

    blank1 = W.replace(ch1, "_");
    blank2 = blank1.replace(ch2, "_");
    blank3 = blank2.replace(ch3, "_");
    console.log("final word =" + blank3);

    qWord = "<h3 id='word_display'>Q." + blank3 + "</h3>";
    text_input = "<br>Answer : <input type='text' id='input_check_box'>";
    check_button = "<br> <button class='btn btn-info' onclick='check()'>Check </button>";
    final_div = qword + text_input + check_button; 

    document.getElementById("output").innerHTML = final_div;
    document.getElementById("word").value = " ";
}

QTurn = "player1";
ATurn = "player2";

function check(){
    ans = document.getElementById("input_check_box").value;
    answer = ans.toLowerCase();
    console.log(answer);

    if(answer == W){
       
      if(ATurn == "player1"){
        p1Score = p1Score + 1;
        document.getElementById("player1_score").innerHTML = p1Score;
      }  

      else
      {
        p2Score = p2Score + 1;
        document.getElementById("player2_score").innerHTML = p2Score;
      }
    
    }

    


    if(QTurn == "player1"){
        QTurn = "player2" 
        document.getElementById("player_question").innerHTML = "Question Turn - " + p2Name;
      }  

      else
      {
        QTurn = "player1";
        document.getElementById("player_question").innerHTML = "Question Turn - " + p1Name;
      }
    
    }


    if(ATurn == "player1"){
        ATurn = "player2" 
        document.getElementById("player_answer").innerHTML = "Answer Turn - " + p2Name;
      }  

      else
      {
        ATurn = "player1";
        document.getElementById("player_answer").innerHTML = "Answer Turn - " + p1Name;
      }
    
    }

    document.getElementById("output").innerHTML = "";
    
}



