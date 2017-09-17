module.exports = function multiply(first, second) {

   var answer = "";
   var prstr = "";
   var pr = "";
   var answerstr ="";
   var ost = 0;
   var pranswer = 0;
   var chet = 0;
   var pos = 0;
   for(var x = first.length - 1; x >= 0 ; x--)
   {
      ost = 0;
      prstr = "";
      for(var y = second.length -1; y >=0; y--)
      {

          pr = "";
          pranswer =  parseInt(first[x]) * parseInt(second[y]);
          pranswer = pranswer + ost;
          pr += pranswer;
         if(pr.length > 1)
         {
            ost = parseInt(pr[0]);
            prstr += pr[1];
         }
         else
         {
             prstr += pr[0];
         }
      }
      if(pr.length > 1)
      {
         prstr += pr[0];
      }
      pos = 0;
      ost = 0;
      console.log(answer);
      console.log(prstr);
      if(answer.length <= 0)
      {
         answer += prstr;
      }
      else {

         answerstr = "";
         answerstr += answer;
         answer = "";
         for (var t = 0; t < chet; t++) {
             answer += answerstr[t];
         }
          for (var z = chet; z < answerstr.length; z++) {
              pr = "";
              pranswer = parseInt(answerstr[z]) + parseInt(prstr[pos]);
              pranswer = pranswer + ost;
              ost = 0;
              pr += pranswer;
              if (pr.length > 1) {
                  ost = parseInt(pr[0]);
                  if(z == answerstr.length - 1)
                  {
                     answer += pr[1];
                        if(prstr[pos +1]) {
                            pranswer = parseInt(pr[0]) + parseInt(prstr[pos + 1]);
                            answer += pranswer;
                        }
                  }
                  else {
                      answer += pr[1];
                  }
              }
              else {

                  answer+= pranswer;
                  if(z == answerstr.length - 1)
                  {
                      if(prstr[pos +1]) {
                          answer += prstr[pos + 1];
                      }
                  }
              }
              pos++;

          }

      }

      chet++;
   }
   console.log(answer);
   console.log(answer.split('').reverse().join(''));
   return answer.split('').reverse().join('');


  // your solution
}
