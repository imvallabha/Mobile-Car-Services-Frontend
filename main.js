const selected = document.querySelector(".selected");
const optionsContainer = document.querySelector(".options-container");

const optionList = document.querySelectorAll(".option");

selected.addEventListener("click", () => {
    optionsContainer.classList.toggle("active");
});

optionList.forEach(o => {
    o.addEventListener("click", () => {
        selected.innerHTML = o.querySelector("label").innerHTML;
        o.querySelector("input").checked=true;
        optionsContainer.classList.remove("active");
    });
});


function radioValue(){

    var ele = document.getElementsByName('category')
    for(i = 0; i < ele.length; i++) {
        if(ele[i].checked)
        var city = ele[i].value;
    }
    localStorage.setItem('city-name', city);
    window.location.href="register.html";
}

$(document).on('click', '#info', function(e) {
    swal(
        '<span style="color:black; font-size:20px;">Please select your city</span>',
        '',
        'info'
    )
});

$(document).on('click', '#contact', function(e) {
    swal({
      title: 'Enter your email to contact',
      input: 'email',
      inputPlaceholder: 'Example@email.xxx',
      showCancelButton: true,
      confirmButtonText: 'Submit',
      showLoaderOnConfirm: true,
      preConfirm: (email) => {
        return new Promise((resolve) => {
          setTimeout(() => {
            if (email === 'example@email.com') {
              swal.showValidationError(
                'This email is already taken.'
              )
            }
            resolve()
          }, 2000)
        })
      },
      allowOutsideClick: false
    }).then((result) => {
      if (result.value) {
        swal({
          type: 'success',
          title: 'We will contact you soon!',
          html: 'Submitted email: ' + result.value
        })
      }
    })
});


