# shc-covid19-decoder

Trash POC to cryprographically verify the signature of COVID-19 vacinnation proof and decode the payload.

Hackish steps:
- Take a screenshot of the PDF, save as PNG (I wish this would take the PDF directly, but I did not want to depend on GraphicsMagick to do `pdf2img` ...)
- Run `node dump_shc.js PATH_TO_FILE.png`

![demo](demo.png)
