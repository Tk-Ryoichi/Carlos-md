const fs = require('fs')
const chalk = require('chalk')

// ganti info bot dibawah ini
global.botName = "HE IS MAJESTIC"
global.ownerName = "HE IS MAJESTIC"
global.ownerNumber = ["2348108166304"] 

global.Auto_Typing = true // auto typing
global.Auto_Recording = true // auto recording
global.Auto_ReadPesan = true // auto read messages

// Auto Downloader Tiktok
global.TiktokAutoDownload = true

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})
