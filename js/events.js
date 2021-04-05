function deployFullAnswer(fullQuestion, question, answer) {
    
    //STYLES ANSWER
    document.getElementById(answer).style.display = "block";
    


    //STYLES QUESTION
    document.getElementById(question).style.color = "black";

    //STYLES FULL QUESTION
    document.getElementById(fullQuestion).style.maxWidth = "100%";
    document.getElementById(fullQuestion).style.borderStyle = "solid";
    document.getElementById(fullQuestion).style.borderRadius = "20px";
    document.getElementById(fullQuestion).style.borderColor = "#A2BFC3";
    document.getElementById(fullQuestion).style.backgroundColor = "#A2BFC3";
    document.getElementById(fullQuestion).style.marginBottom = "10px";

    
  }

  /*
  function hideFullAnswer(fullQuestion, question, answer) {
    
    //STYLES ANSWER
    document.getElementById(answer).style.display = "none";
    


    //STYLES QUESTION
    document.getElementById(question).style.color = "#F3E4D9";
    document.getElementById(question).style.maxWidth = "100%";
    document.getElementById(question).style.borderStyle = "solid";
    document.getElementById(question).style.borderRadius = "20px";
    document.getElementById(question).style.borderColor = "#A2BFC3";
    document.getElementById(question).style.backgroundColor = "none";

    //STYLES FULL QUESTION
    document.getElementById(fullQuestion).style.maxWidth = "100%";
    document.getElementById(fullQuestion).style.borderStyle = "none";
    document.getElementById(fullQuestion).style.backgroundColor = "none";

    
  }
  */

  