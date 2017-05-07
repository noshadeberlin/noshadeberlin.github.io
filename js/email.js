// Email obfuscator script 2.1 by Tim Williams, University of Arizona
// Random encryption key feature coded by Andrew Moulden
// This code is freeware provided these four comment lines remain intact
// A wizard to generate this code is at http://www.jottings.com/obfuscator/
window.onload = function () { coded = "9hSmP9m@ShQCPV0.0G"
  key = "aU8t7gCrAs9xMNV2uEPIXmnlezTQ61RjoFGJ5yibSp0wfk3vL4hDOBcYqHdWKZ"
  shift=coded.length
  link=""
  for (i=0; i<coded.length; i++) {
    if (key.indexOf(coded.charAt(i))==-1) {
      ltr = coded.charAt(i)
      link += (ltr)
    }
    else {
      ltr = (key.indexOf(coded.charAt(i))-shift+key.length) % key.length
      link += (key.charAt(ltr))
    }
  }
document.getElementById('email-link').href = "mailto:"+link
document.getElementById('email-link').innerHTML = link
}
