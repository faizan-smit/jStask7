var $name1, $name2;
$name1 = prompt("Enter First name")
$name2 =  prompt("Enter Last name")

var tada ={
    fname: $name1,
    lname: $name2,
    foo: function(){
        // alert(this.fname + " " + this.lname)
        return this.fname + " " + this.lname
    }
}

document.write(tada.foo())