function takeANumber(katzDeliLine, customerName) {
  katzDeliLine.push(customerName);
  
  return `Welcome, ${customerName}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(katzDeliLine) {
  
  if(katzDeliLine.length !== 0) {
    return katzDeliLine.shift();
  } else {
    return "There is nobody waiting to be served!"
  }
  
}