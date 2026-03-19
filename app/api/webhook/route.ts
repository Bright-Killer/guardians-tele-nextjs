import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const update = await request.json();

  if (update.message) {
    const chatId = update.message.chat.id;
    const text = update.message.text || '';

    let reply = '✅ Bot TOPUP.ID aktif! Kirim UID + paket game kamu untuk order.';

    if (text === '/start') {
      reply = 'Selamat datang di TOPUP.ID Bot!\n\nKetik /order untuk mulai top-up game.';
    }

    await fetch(`https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id: chatId, text: reply })
    });
  }

  return NextResponse.json({ ok: true });
}
