document.querySelector('#tip-form').onchange = function(){

  var bill = Number(document.getElementById('billTotal').value);
  var tip = document.getElementById('tipInput').value;
  
  document.getElementById('tipOutput').innerHTML = `${tip}%`;
  
  var tipValue = bill * (tip/100)
  var finalBill = bill + tipValue
console.log(finalBill)
var tipAmount = document.querySelector('#tipAmount')
var totalBillWithTip = document.querySelector('#totalBillWithTip')

tipAmount.value = tipValue.toFixed(2);
 totalBillWithTip.value =finalBill.toFixed(2);
 
 const tipProgress = document.getElementById('tipProgress');
const tipPercentageInput = document.getElementById('tipInput');

// An array of GIFs representing the animation frames | 12 in total
const gifFrames = ['frame_0.gif', 'frame_1.gif', 'frame_2.gif',
 'frame_3.gif', 'frame_4.gif', 'frame_5.gif', 'frame_6.gif',
 'frame_7.gif', 'frame_8.gif', 'frame_9.gif', 'Explosion.png'];

tipPercentageInput.addEventListener('input', () => {
  // Get the current tip percentage value
  const tipPercentage = tipPercentageInput.value;

  // Calculate the frame index based on the tip percentage
  const frameIndex = Math.floor((tipPercentage / 101) * gifFrames.length);

  // Set the GIF source to the corresponding frame
  tipProgress.src = gifFrames[frameIndex];

  // Show the GIF (if it's not already visible)
  tipProgress.style.display = 'block';
});

 //Show Results

  document.getElementById('results').style.display='block'
}