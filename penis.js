let msg = {
viewOnceMessage: {
message: {
interactiveMessage: {
"contextInfo": {
"mentionedJid": [m.sender],
"isForwarded": true,
"forwardedNewsletterMessageInfo": {
"newsletterJid": '0@newsletter',
"newsletterName": 'By King Sam',
"serverMessageId": 1
},
},
"header": {
"title": ``,
...(await prepareWAMessageMedia({ image: mengkece }, { upload: ryozingod.waUploadToServer })),
"hasMediaAttachment": true
},
"body": {
"text": ""
},
"footer": {
"text": "⿻  ⌜ King Sam Inventory ⌟  ⿻"
},
"nativeFlowMessage": {
"buttons": [
{
"name": "quick_reply",
"buttonParamsJson": "{\"display_text\":\"⧠ 𝑪𝑳𝑨𝑺𝑺𝑰𝑪 𝑩𝑶𝑻 ⧠\n𝐌𝐲 𝐎𝐰𝐧𝐞𝐫 𝐢𝐬 𝕶𝖎𝖓𝖌 𝕾𝖆𝖒\",\"id\":\".terkentod\"}"
}
],
"messageParamsJson": ""
}
}
}
}
}

zetsubo.reply(m.chat, msg, {});

> let target = m.chat

async function pnis() {
var etc = generateWAMessageFromContent(target, proto.Message.fromObject({
viewOnceMessage: {
message: {
interactiveMessage: {
"contextInfo": {
"mentionedJid": [m.sender],
"isForwarded": true,
"forwardedNewsletterMessageInfo": {
"newsletterJid": '0@newsletter',
"newsletterName": 'By King Sam',
"serverMessageId": 1
},
},
"header": {
"title": ``,
...(await prepareWAMessageMedia({ image: mengkece }, { upload: ryozingod.waUploadToServer })),
"hasMediaAttachment": true
},
"body": {
"text": ""
},
"footer": {
"text": "⿻  ⌜ King Sam Inventory ⌟  ⿻"
},
"nativeFlowMessage": {
"buttons": [
{
"name": "quick_reply",
"buttonParamsJson": "{\"display_text\":\"⧠ 𝑪𝑳𝑨𝑺𝑺𝑰𝑪 𝑩𝑶𝑻 ⧠\n𝐌𝐲 𝐎𝐰𝐧𝐞𝐫 𝐢𝐬 𝕶𝖎𝖓𝖌 𝕾𝖆𝖒\",\"id\":\".terkentod\"}"
}
],
"messageParamsJson": ""
}
}
}
}
}
}), { userJid: target, quoted: m })
await zetsubo.reply(target, etc.message, { participant: { jid: target }, messageId: etc.key.id })
}

pnis()