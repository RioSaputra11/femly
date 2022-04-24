let fetch = require('node-fetch')
let handler = async (m, { conn, usedPrefix, command }) => {
let res = await fetch('https://raw.githubusercontent.com/irwanx/db/master/random/cecan.txt')
let txt = await res.text()
let arr = txt.split('\n')
let cita = arr[Math.floor(Math.random() * arr.length)]
await conn.sendFile(m.chat, cita, 'cecan.jpg', '*nih cecan*🥵', m)
}
handler.tags = ['internet']
handler.help = ['cecan']
handler.command = /^(cecan)$/i

handler.limit = true

module.exports = handler
