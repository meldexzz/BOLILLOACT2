const handler = async (m, { conn }) => {
  const mensaje = `╔═══════════════╗
┇➤𝙁𝙍𝙀𝙀 𝙁𝙄𝙍𝙀 𝙓 𝘽𝙊𝙇𝙄𝙇𝙇𝙊 𝘽𝙊𝙏 🥖 
╚═══════════════╝

▸▸𝘾𝙊𝙈𝘼𝙉𝘿𝙊𝙎 𝘿𝙄𝙎𝙋𝙊𝙉𝙄𝘽𝙇𝙀𝙎◂◂

▸▸ 𝙈𝘼𝙋𝘼𝙎 ◂◂
│┊➺ 🌴.𝘣𝘦𝘳𝘮𝘶𝘥𝘢
│┊➺ 🌴.𝘱𝘶𝘳𝘨𝘢𝘵𝘰𝘳𝘪𝘰   
│┊➺ 🌴.𝘬𝘢𝘭𝘢𝘩𝘢𝘳𝘪 
╰ ∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙ ∙ ∙ ∙ ∙  
▸▸ 𝙍𝙀𝙂𝙇𝘼𝙎 ◂◂
│┊➺ 📜.𝘤𝘭𝘬
│┊➺ 📜.𝘪𝘯𝘧𝘪𝘯𝘪𝘵𝘰
│┊➺ 📜.𝘷𝘷2
│┊➺ 📜.𝘭𝘪𝘥𝘦𝘳𝘦𝘴
╰ ∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙ ∙ ∙ ∙ ∙  
▸▸ 𝙇𝙄𝙎𝙏𝘼𝙎 ◂◂
│┊➺ 🛡️.4𝘷𝘴4   
│┊➺ 🛡️.6𝘷𝘴6 
│┊➺ 🛡️.8𝘷𝘴8   
│┊➺ 🛡️.12𝘷𝘴12   
│┊➺ 🛡️.16𝘷𝘴16   
│┊➺ 🛡️.20𝘷𝘴20   
│┊➺ 🛡️.24𝘷𝘴24   
│┊➺ 🛡️.𝘴𝘤𝘳𝘪𝘮 
╰ ∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙ ∙ ∙ ∙ ∙  

▸▸ 𝙍𝙐𝙇𝙀𝙏𝘼𝙎 ◂◂
│┊➺ 👨🏻‍💻.𝘥𝘰𝘯𝘢𝘳𝘴𝘢𝘭𝘢   
│┊➺ 👨🏻‍💻.𝘳𝘰𝘵𝘢𝘳𝘮𝘰𝘤𝘩𝘪𝘭𝘢 🦸‍♂️   
╰ ∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙ ∙ ∙ ∙ ∙

➤  𝘽𝙊𝙇𝙄𝙇𝙇𝙊 𝘽𝙊𝙏 / 𝙈𝙀𝙇𝘿𝙀𝙓𝙕𝙕 / 𝙅𝙊𝙎𝙎 🥖 `;

  await conn.sendMessage(m.chat, { text: mensaje }, { quoted: m });
};

handler.command = /^(freefire|free fire|ffmenu)$/i; // Se activa con ".freefire", ".free fire" o ".ffmenu"

export default handler;
