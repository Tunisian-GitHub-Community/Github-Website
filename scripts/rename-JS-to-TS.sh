#!/bin/bash

rename() {
  extension="${1##*.}"
  contents=$(cat $1)
  if [[ $contents == *"import React"* ]]
  then
    mv "$1" "${1%.$extension}.tsx"
    echo "Renamed $1 to ${1%.$extension}.tsx"
    tsCount=$(cat tsCount.temp)
    ((tsCount++))
    echo $tsCount > tsCount.temp
  else
    mv "$1" "${1%.$extension}.ts"
    echo "Renamed $1 to ${1%.$extension}.ts"
    tsxCount=$(cat tsxCount.temp)
    ((tsxCount++))
    echo $tsxCount > tsxCount.temp
  fi
}

runFindCommand() {
  echo "0" > tsCount.temp
  echo "0" > tsxCount.temp
  find src \( -name "*.js" -o -name "*.jsx" \) -exec bash -c 'rename "$@"' bash {} \;
  tsCount=$(cat tsCount.temp)
  tsxCount=$(cat tsxCount.temp)
  totalFiles=$((tsCount + tsxCount))
  echo "Done. Renamed $totalFiles files:"
  echo "- $tsCount files from .js to .ts"
  echo "- $tsxCount files from .js (or .jsx) to .tsx"
  rm tsCount.temp
  rm tsxCount.temp
}

export -f rename
runFindCommand