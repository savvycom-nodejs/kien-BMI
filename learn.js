function calculationBmi(){
    const weight = document.getElementById('weight').value
    const height = document.getElementById('height').value
    const male = document.getElementById('male').value
    const female = document.getElementById('female').value
    // tinhs bmi

    const bmi = ((weight) /(height * height)).toFixed(1)
    document.getElementById('result').innerHTML 


    if(bmi < 20.7 && male === 'male' || bmi < 19.1 && female === 'female')   {
        document.getElementById('result-text').innerHTML = 'GẦY'
    }else if(bmi > 20.7 && bmi < 26.4 && male === 'male' || bmi > 19.1 && bmi< 25.8 && female === 'female'){
       document.getElementById('result-text').innerHTML = 'BÌNH THƯỜNG'
    }else if(bmi > 26.4 && bmi < 27.8 && male === 'male'  || bmi > 25.8 && bmi< 27.3 && female === 'female'){
       document.getElementById('result-text').innerHTML = 'THỪA CÂN NHẸ'
    }else if(bmi > 27.8 && bmi < 31.1 && male === 'male'  || bmi > 27.3 && bmi< 32.3 && female === 'female'){
       document.getElementById('result-text').innerHTML = 'TRÊN LÍ TƯỞNG'
   }else{
   document.getElementById('result-text').innerHTML = 'BÉO'
   }
}






// print Number (Text = fale)

function checkInputHeight() {
    const inputHeight = document.getElementById("height");
    const errorTextHeight = document.getElementById("errorTextHeight");

    // Lấy giá trị từ ô input
    const inputValue = inputHeight.value;
    // Kiểm tra xem giá trị nhập vào có phải là kí tự số hay không
    if (!isNaN(inputValue )) {
      // Nếu là kí tự số, ẩn thông báo lỗi (nếu có)
      errorTextHeight.style.display = "none";
    } else {
      // Nếu không phải là kí tự số, hiển thị thông báo lỗi
      errorTextHeight.style.display = "block";
    }
  }

function checkInputWeight() {
    const inputWeight = document.getElementById("weight");
    const errorTextWeight = document.getElementById("errorTextWeight");

    // Lấy giá trị từ ô input
    const inputValue2 = inputWeight.value;
    // Kiểm tra xem giá trị nhập vào có phải là kí tự số hay không
    if (!isNaN(inputValue2 )) {
      // Nếu là kí tự số, ẩn thông báo lỗi (nếu có)
      errorTextWeight.style.display = "none";
    } else {
      // Nếu không phải là kí tự số, hiển thị thông báo lỗi
      errorTextWeight.style.display = "block";
    }
  }
















// clear
function reload(){
    weight = document.getElementById('weight').value = document.getElementById('weight').getAttribute('name') 
    height = document.getElementById('height').value = document.getElementById('height').getAttribute('name') 
    // sử lí gender
    bmi=  document.getElementById('result').innerText  = 'Kết quả'
    bmi=  document.getElementById('result-text').innerText   = " "

}