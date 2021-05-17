# shc-covid19-decoder
Trash POC to dump SHC Vaccination Proof (such as the one provided by government of Quebec)

I wish this would take the PDF directly, but I did not want to dependon GraphicsMagick to do `pdf2img` ...

Hackish steps:
- Take a screenshot of the PDF, save as PNG, place in Downloads folder `~/Downloads/vaccination_proof.png` (or modify path in `dump_shc.js`)
- Run `node dump_shc.js`
