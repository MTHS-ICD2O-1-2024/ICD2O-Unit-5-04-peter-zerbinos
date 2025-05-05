// Copyright (c) 2025 Peter Zerbinos All rights reserved
//
// Created by: Peter Zerbinos
// Created on: May 2025
// This file contains the JS functions for index.html

"use scrict"

function checkForDiscount() {
  const userAge = parseInt(document.getElementById('user-age').value)
  const dayOfWeek = document.getElementById('day-of-week').value

  // process
  if ((dayOfWeek == 'TUE' || dayOfWeek == 'THU') || (userAge > 12 && userAge < 21)) {
    document.getElementById('result').innerHTML =
      '<p>You are eligible for student pricing!</p>'
  }
  else {
    document.getElementById('result').innerHTML =
      '<p>You must pay the regular price.</p>'
  }
}
