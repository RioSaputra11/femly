let handler = async (m, { conn }) => {
     conn.reply(m.chat, `Apah nyari SC?🤭`, m)
}
handler.help = ['sourcecode']
handler.tags = ['info']
handler.command = /^(sc(ript(bot)?)?|sourcecode)$/i

module.exports = handler


