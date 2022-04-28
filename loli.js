let fetch = require('node-fetch')

let handler = async (m, { conn, text }) => {
let res = await fetch('https://raw.githubusercontent.com/Xmell91/loli/master/loli.json')
if (!res.ok) throw await `${res.status} ${res.statusText}`;
let json = await res.json();
let url = json[Math.floor(Math.random() * json.length)]
conn.sendFile(m.chat, await (await fetch(url)).buffer(), '', '*nih lolinya🤭*', m, 0, { thumbnail: Buffer.alloc(0) })
}
handler.command = /^(loli)$/i
handler.tags = ['anime']
handler.help = ['loli']
handler.limit = true
handler.register = true

module.exports = handler
