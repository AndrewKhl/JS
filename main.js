class User
 {
   constructor(_fname, _sname, _age, _email, _uURL)
    {
      this.fname = _fname;
      this.sname = _sname;
      this.age = _age;
      this.email = _email;
      this.ImURL = _uURL;
    }

   toString()
    {
      return this.fname+" "+this.sname+" "+this.age+" "+"year"+" "+"Email: "+this.email;
    }
 }
 var arrUsers = [];
 function btnSendClick()
  {
    let data = {};
    data.fname = document.getElementById("fname").value;
    data.sname = document.getElementById("sname").value;
    data.age = document.getElementById("age").value;
    data.email = document.getElementById("email").value;
    data.ImURL = document.getElementById("ImURL").value;
    if (!data.ImURL) data.ImURL='ava.png';
     if (data.fname!="" && data.sname!="" && data.age>0 && data.age<100)
      {
       arrUsers.push(new User(data.fname, data.sname, data.age, data.email, data.ImURL));
       console.log("User add");
      }
       else
      {
       alert('Incorrect data');
       console.log("Input Error");
      }
  }
function clearPage()
 {
  document.body.innerHTML = "";
 }
function btnViewClick()
 {
  clearPage();
  let body = document.body;
  let past = "<div>\n";
  for (let i=0; i<arrUsers.length; i++)
   {
    past+="<p>"+(i+1)+" User "+arrUsers[i].toString();
    past+="<p> <img src="+arrUsers[i].ImURL+"></p>"
   }
  past+="</div>";
  body.innerHTML = past;
 }
