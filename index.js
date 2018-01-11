function takeANumber(line, name) {
  line.push(name)
  return `Welcome, ${name}. You are number ${line.length} in line.`
}

function nowServing(line) {
  if (line.length > 0)
    return `Currently serving ${line.shift()}.`
  else
    return 'There is nobody waiting to be served!'
}

function currentLine(line) {
  let s = line.length > 0 ? 'The line is currently: ' : 'The line is currently empty.'
  for (let i = 0; i < line.length; i++) {
    s += `${i + 1}. ${line[i]}
  }
  return s
}