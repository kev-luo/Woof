let reviewdog = $("#reviewdog")
let dogBtn = $("#dogReviewBtn")
reviewdog.hide()

dogBtn.on("click", function(){
  reviewdog.show()
  
})

$("#dogSubmit").on("click", function(){
  let dogReview = $("#dogBody").val()
  let date = $("#dates").val()
  let ratings = 5

  let dogObj = {
    body : dogReview,
    dates : date,
    rating : ratings
  }

})

let cancel = $("#cancelBtn")

cancel.on("click", function(){
  reviewdog.hide()
})