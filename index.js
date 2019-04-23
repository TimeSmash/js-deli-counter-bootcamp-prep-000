
// function takeANumber(line, name) {
//   line.push(name)
//   return `Welcome, ${name}. You are number ${line.indexOf(name)+1} in line.`
// }

// function nowServing(line) {
//   if (line.length >=1) {
//     return `Currently serving ${line.shift()}.`
//   } else {
//     return "There is nobody waiting to be served!"
//   }
// }
  
// function currentLine(line) {
//   	var line_list = line.map(x => (` ${line.indexOf(x)+1}. ${x}`))
//   	if (line.length >= 1) {
// 	return `The line is currently:${line_list}`
// 	} else {
// 	return "The line is currently empty."
// 	}
// }

// function uninterruptedService(line) {
// 	if (!line.length) {
// 		return "The line is currently empty"
//     } else {
//         console.log(currentLine(line))
// 		    for (var i = line.length; i > -1; i--) {
// 	 	  	  console.log(nowServing(line))
// 		  	  if (line.length) {
// 				  console.log(currentLine(line))
// 			  }
// 		  }
//     }
// }

var katzLine = []

function takeANumber(line, name) {
  line.push(name)
  return `Welcome, ${name}. You are number ${line.indexOf(name)+1} in line.`
}

function nowServing(line) {
  if (line.length >=1) {
  return `Currently serving ${line.shift()}.`
  } else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(line) {
  var orderedLine = []
  if (line.length >=1) {
    for (var i = 0; i<line.length; i++) {
      orderedLine.push(` ${[i+1]}. ${line[i]}`)
    }
  return `The line is currently:${orderedLine}`
  } else {
    return "The line is currently empty."
  }
}

